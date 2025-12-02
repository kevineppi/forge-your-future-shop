import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { useToast } from "@/hooks/use-toast";
import { Search, Filter, RefreshCw, Eye, FileText, Truck, Package, CheckCircle2, XCircle, MapPin, Download } from "lucide-react";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import JSZip from "jszip";

type Order = Tables<'orders'>;
type OrderItem = Tables<'order_items'>;

interface OrderWithItems extends Order {
  order_items: OrderItem[];
}

const OrdersManagement = () => {
  const [orders, setOrders] = useState<OrderWithItems[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<OrderWithItems[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedOrder, setSelectedOrder] = useState<OrderWithItems | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    loadOrders();
  }, []);

  useEffect(() => {
    filterOrders();
  }, [orders, searchTerm, statusFilter]);

  const loadOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          order_items (*)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data as OrderWithItems[] || []);
    } catch (error) {
      console.error('Error loading orders:', error);
      toast({
        title: "Fehler",
        description: "Bestellungen konnten nicht geladen werden.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filterOrders = () => {
    let filtered = orders;

    if (searchTerm) {
      filtered = filtered.filter(order =>
        order.customer_email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customer_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter(order => order.status === statusFilter);
    }

    setFilteredOrders(filtered);
  };

  const updateOrderStatus = async (orderId: string, newStatus: Order['status']) => {
    try {
      const { error } = await supabase
        .from('orders')
        .update({ 
          status: newStatus,
          updated_at: new Date().toISOString()
        })
        .eq('id', orderId);

      if (error) throw error;

      setOrders(prev => 
        prev.map(order => 
          order.id === orderId 
            ? { ...order, status: newStatus, updated_at: new Date().toISOString() }
            : order
        )
      );

      toast({
        title: "Status aktualisiert",
        description: "Der Bestellstatus wurde erfolgreich geändert.",
      });
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: "Fehler",
        description: "Status konnte nicht aktualisiert werden.",
        variant: "destructive",
      });
    }
  };

  const getStatusBadge = (status: Order['status']) => {
    const statusConfig = {
      pending: { label: "Ausstehend", variant: "secondary" as const, icon: Package },
      paid: { label: "Bezahlt", variant: "default" as const, icon: CheckCircle2 },
      processing: { label: "In Produktion", variant: "default" as const, icon: Package },
      completed: { label: "Abgeschlossen", variant: "secondary" as const, icon: CheckCircle2 },
      cancelled: { label: "Storniert", variant: "destructive" as const, icon: XCircle }
    };

    const config = statusConfig[status];
    const IconComponent = config.icon;

    return (
      <Badge variant={config.variant} className="flex items-center gap-1">
        <IconComponent className="h-3 w-3" />
        {config.label}
      </Badge>
    );
  };

  const generateInvoice = async (order: OrderWithItems) => {
    toast({
      title: "Rechnung wird erstellt",
      description: "Diese Funktion wird noch implementiert.",
    });
  };

  const downloadAllFiles = async (order: OrderWithItems) => {
    try {
      toast({
        title: "Download wird vorbereitet",
        description: "Die Dateien werden heruntergeladen und zu einem ZIP-Archiv zusammengefasst...",
      });

      const zip = new JSZip();
      const folder = zip.folder(`Bestellung_${order.id.substring(0, 8)}`);

      if (!folder) {
        throw new Error("ZIP-Ordner konnte nicht erstellt werden");
      }

      // Alle Dateien herunterladen und zum ZIP hinzufügen
      const downloadPromises = order.order_items.map(async (item, index) => {
        try {
          const response = await fetch(item.file_url);
          if (!response.ok) throw new Error(`Download fehlgeschlagen für ${item.file_name}`);
          
          const blob = await response.blob();
          const fileName = `${index + 1}_${item.file_name}`;
          folder.file(fileName, blob);
        } catch (error) {
          console.error(`Fehler beim Download von ${item.file_name}:`, error);
          throw error;
        }
      });

      await Promise.all(downloadPromises);

      // ZIP generieren und herunterladen
      const content = await zip.generateAsync({ type: "blob" });
      const url = window.URL.createObjectURL(content);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Bestellung_${order.id.substring(0, 8)}_${format(new Date(order.created_at), "yyyyMMdd")}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Download erfolgreich",
        description: `${order.order_items.length} Datei(en) wurden heruntergeladen.`,
      });
    } catch (error) {
      console.error('Error downloading files:', error);
      toast({
        title: "Fehler beim Download",
        description: "Die Dateien konnten nicht heruntergeladen werden.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Ausstehend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {orders.filter(o => o.status === 'pending').length}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Bezahlt
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {orders.filter(o => o.status === 'paid').length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              In Produktion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {orders.filter(o => o.status === 'processing').length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Abgeschlossen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">
              {orders.filter(o => o.status === 'completed').length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Gesamt
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {orders.length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filter & Aktionen
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Suche nach E-Mail, Name oder Bestell-ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Status filtern" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Status</SelectItem>
                <SelectItem value="pending">Ausstehend</SelectItem>
                <SelectItem value="paid">Bezahlt</SelectItem>
                <SelectItem value="processing">In Produktion</SelectItem>
                <SelectItem value="completed">Abgeschlossen</SelectItem>
                <SelectItem value="cancelled">Storniert</SelectItem>
              </SelectContent>
            </Select>

            <Button onClick={loadOrders} variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Aktualisieren
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>
            Bestellungen ({filteredOrders.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Bestell-ID</TableHead>
                  <TableHead>Kunde</TableHead>
                  <TableHead>E-Mail</TableHead>
                  <TableHead>Artikel</TableHead>
                  <TableHead>Gesamtpreis</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Erstellt</TableHead>
                  <TableHead>Aktionen</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-mono text-sm">
                      {order.id.substring(0, 8)}...
                    </TableCell>
                    <TableCell>{order.customer_name || "-"}</TableCell>
                    <TableCell>{order.customer_email || "-"}</TableCell>
                    <TableCell>{order.order_items?.length || 0}</TableCell>
                    <TableCell className="font-medium">
                      €{order.total_price.toFixed(2)}
                    </TableCell>
                    <TableCell>{getStatusBadge(order.status)}</TableCell>
                    <TableCell>
                      {format(new Date(order.created_at), "dd.MM.yyyy", { locale: de })}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedOrder(order)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => generateInvoice(order)}
                        >
                          <FileText className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Order Detail Dialog */}
      <Dialog open={!!selectedOrder} onOpenChange={(open) => !open && setSelectedOrder(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Bestelldetails</DialogTitle>
          </DialogHeader>
          {selectedOrder && (
            <div className="space-y-6">
              {/* Customer Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Kundeninformationen</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Name</label>
                    <p>{selectedOrder.customer_name || "-"}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">E-Mail</label>
                    <p>{selectedOrder.customer_email || "-"}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Bestell-ID</label>
                    <p className="font-mono text-sm">{selectedOrder.id}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Erstellt am</label>
                    <p>{format(new Date(selectedOrder.created_at), "dd.MM.yyyy HH:mm", { locale: de })}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              {(selectedOrder.shipping_street || selectedOrder.shipping_city) && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Lieferadresse
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>{selectedOrder.shipping_street}</p>
                    <p>{selectedOrder.shipping_postal_code} {selectedOrder.shipping_city}</p>
                    <p>{selectedOrder.shipping_country}</p>
                  </CardContent>
                </Card>
              )}

              {/* Order Items */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span>Bestellpositionen</span>
                    <Button 
                      onClick={() => downloadAllFiles(selectedOrder)}
                      variant="outline"
                      size="sm"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Alle Dateien herunterladen
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Datei</TableHead>
                        <TableHead>Material</TableHead>
                        <TableHead>Farbe</TableHead>
                        <TableHead>Menge</TableHead>
                        <TableHead>Einzelpreis</TableHead>
                        <TableHead>Gesamtpreis</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedOrder.order_items.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-medium">{item.file_name}</TableCell>
                          <TableCell>{item.material}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div 
                                className="w-4 h-4 rounded border border-border" 
                                style={{ backgroundColor: item.color }}
                              />
                              {item.color}
                            </div>
                          </TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>€{item.unit_price.toFixed(2)}</TableCell>
                          <TableCell className="font-medium">€{item.total_price.toFixed(2)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  
                  <div className="mt-4 pt-4 border-t flex justify-between items-center">
                    <div>
                      {selectedOrder.express_service && (
                        <Badge variant="default" className="mr-2">
                          <Truck className="h-3 w-3 mr-1" />
                          Express-Versand
                        </Badge>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Gesamtpreis</p>
                      <p className="text-2xl font-bold">€{selectedOrder.total_price.toFixed(2)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Notes */}
              {selectedOrder.notes && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Bemerkungen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-wrap">{selectedOrder.notes}</p>
                  </CardContent>
                </Card>
              )}

              {/* Status Management */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Bestellstatus verwalten</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <label className="text-sm font-medium min-w-32">Aktueller Status:</label>
                    {getStatusBadge(selectedOrder.status)}
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="text-sm font-medium min-w-32">Status ändern:</label>
                    <Select 
                      value={selectedOrder.status} 
                      onValueChange={(value) => updateOrderStatus(selectedOrder.id, value as Order['status'])}
                    >
                      <SelectTrigger className="w-64">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Ausstehend</SelectItem>
                        <SelectItem value="paid">Bezahlt</SelectItem>
                        <SelectItem value="processing">In Produktion</SelectItem>
                        <SelectItem value="completed">Abgeschlossen</SelectItem>
                        <SelectItem value="cancelled">Storniert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button onClick={() => generateInvoice(selectedOrder)} variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Rechnung erstellen
                    </Button>
                    <Button 
                      onClick={() => window.open(`mailto:${selectedOrder.customer_email}`, '_blank')}
                      variant="outline"
                    >
                      E-Mail senden
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OrdersManagement;
