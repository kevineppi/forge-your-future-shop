import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Package, Calendar, CreditCard, FileText, Download, Palette, Box } from "lucide-react";
import { toast } from "sonner";
import type { Database } from "@/integrations/supabase/types";

type OrderStatus = Database["public"]["Enums"]["order_status"];
type OrderRow = Database["public"]["Tables"]["orders"]["Row"];
type OrderItemRow = Database["public"]["Tables"]["order_items"]["Row"];

interface OrderItem extends Omit<OrderItemRow, "dimensions"> {
  dimensions: {
    x: number;
    y: number;
    z: number;
  };
}

interface Order extends Omit<OrderRow, "post_processing"> {
  post_processing: string[];
  order_items: OrderItem[];
}

const statusConfig: Record<OrderStatus, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  pending: { label: "Ausstehend", variant: "outline" },
  paid: { label: "Bezahlt", variant: "default" },
  processing: { label: "In Bearbeitung", variant: "secondary" },
  completed: { label: "Abgeschlossen", variant: "default" },
  cancelled: { label: "Storniert", variant: "destructive" },
};

const MeineBestellungen = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      toast.error("Bitte melden Sie sich an, um Ihre Bestellungen zu sehen");
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const { data: ordersData, error: ordersError } = await supabase
        .from("orders")
        .select(`
          *,
          order_items (*)
        `)
        .eq("user_id", user?.id)
        .order("created_at", { ascending: false });

      if (ordersError) throw ordersError;

      // Transform the data to match our interface
      const transformedOrders: Order[] = (ordersData || []).map(order => ({
        ...order,
        post_processing: Array.isArray(order.post_processing) ? order.post_processing as string[] : [],
        order_items: order.order_items.map(item => ({
          ...item,
          dimensions: item.dimensions as { x: number; y: number; z: number }
        }))
      }));

      setOrders(transformedOrders);
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Fehler beim Laden der Bestellungen");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("de-AT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="space-y-6">
              <Skeleton className="h-12 w-64" />
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-48 w-full" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Meine Bestellungen
            </h1>
            <p className="text-muted-foreground">
              Übersicht über alle Ihre 3D-Druck Bestellungen
            </p>
          </div>

          {/* Orders List */}
          {orders.length === 0 ? (
            <Card className="border-2 border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-16">
                <Package className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Noch keine Bestellungen</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  Sie haben noch keine Bestellungen aufgegeben.
                </p>
                <a 
                  href="/kostenrechner" 
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
                >
                  Jetzt Bestellung aufgeben
                </a>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <Card key={order.id} className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="space-y-1">
                        <CardTitle className="flex items-center gap-2">
                          <Package className="h-5 w-5 text-primary" />
                          Bestellung #{order.id.slice(0, 8)}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {formatDate(order.created_at)}
                        </CardDescription>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant={statusConfig[order.status].variant} className="text-sm px-3 py-1">
                          {statusConfig[order.status].label}
                        </Badge>
                        {order.express_service && (
                          <Badge variant="secondary" className="text-sm px-3 py-1">
                            Express
                          </Badge>
                        )}
                        <div className="flex items-center gap-2 text-lg font-bold text-primary">
                          <CreditCard className="h-5 w-5" />
                          €{order.total_price.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-6">
                    {/* Order Items */}
                    <div className="space-y-4">
                      {order.order_items.map((item, index) => (
                        <div key={item.id}>
                          {index > 0 && <Separator className="my-4" />}
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Left Column - File & Basic Info */}
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <FileText className="h-5 w-5 text-primary mt-1" />
                                <div className="flex-1">
                                  <div className="font-semibold text-lg mb-1">{item.file_name}</div>
                                  <div className="text-sm text-muted-foreground">
                                    {item.quantity} Stück × €{item.unit_price.toFixed(2)} = <span className="font-semibold text-foreground">€{item.total_price.toFixed(2)}</span>
                                  </div>
                                </div>
                                <a
                                  href={item.file_url}
                                  download
                                  className="text-primary hover:text-primary/80 transition-colors"
                                  title="Datei herunterladen"
                                >
                                  <Download className="h-5 w-5" />
                                </a>
                              </div>

                              <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                                <div className="flex items-center gap-2 text-sm">
                                  <Box className="h-4 w-4 text-primary" />
                                  <span className="font-medium">Abmessungen:</span>
                                  <span className="text-muted-foreground">
                                    {item.dimensions.x} × {item.dimensions.y} × {item.dimensions.z} mm
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <span className="font-medium">Volumen:</span>
                                  <span className="text-muted-foreground">{item.volume.toFixed(2)} cm³</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <span className="font-medium">Druckzeit:</span>
                                  <span className="text-muted-foreground">{item.print_time.toFixed(1)} Stunden</span>
                                </div>
                              </div>
                            </div>

                            {/* Right Column - Material & Print Settings */}
                            <div className="space-y-3">
                              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 space-y-3">
                                <div className="flex items-center gap-2">
                                  <Palette className="h-5 w-5 text-primary" />
                                  <span className="font-semibold text-lg">Druckeinstellungen</span>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                  <div>
                                    <div className="text-muted-foreground mb-1">Material</div>
                                    <div className="font-medium">{item.material}</div>
                                  </div>
                                  <div>
                                    <div className="text-muted-foreground mb-1">Farbe</div>
                                    <div className="font-medium">{item.color}</div>
                                  </div>
                                  <div>
                                    <div className="text-muted-foreground mb-1">Infill</div>
                                    <div className="font-medium">{item.infill}%</div>
                                  </div>
                                  <div>
                                    <div className="text-muted-foreground mb-1">Qualität</div>
                                    <div className="font-medium capitalize">{item.quality}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Additional Info */}
                    {(order.post_processing.length > 0 || order.notes) && (
                      <>
                        <Separator className="my-6" />
                        <div className="space-y-3">
                          {order.post_processing.length > 0 && (
                            <div>
                              <div className="text-sm font-medium mb-2">Nachbearbeitung:</div>
                              <div className="flex flex-wrap gap-2">
                                {order.post_processing.map((process, idx) => (
                                  <Badge key={idx} variant="outline">{process}</Badge>
                                ))}
                              </div>
                            </div>
                          )}
                          {order.notes && (
                            <div>
                              <div className="text-sm font-medium mb-2">Notizen:</div>
                              <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3">
                                {order.notes}
                              </div>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MeineBestellungen;
