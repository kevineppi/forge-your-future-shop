import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { 
  Plus, 
  Pencil, 
  Trash2, 
  Upload, 
  Image as ImageIcon, 
  Star, 
  Eye, 
  EyeOff,
  GripVertical,
  X,
  Check,
  Loader2,
  Tags
} from "lucide-react";

interface Reference {
  id: string;
  title: string;
  description: string | null;
  industry: string;
  material: string;
  color: string | null;
  print_time_hours: number | null;
  weight_grams: number | null;
  dimensions: string | null;
  quantity: number | null;
  delivery_days: number | null;
  image_url: string | null;
  customer_quote: string | null;
  customer_name: string | null;
  highlights: string[] | null;
  is_featured: boolean | null;
  is_active: boolean | null;
  sort_order: number | null;
  created_at: string;
}

interface Category {
  id: string;
  name: string;
  type: string;
  color: string | null;
  is_active: boolean | null;
  sort_order: number | null;
}

const emptyReference: Partial<Reference> = {
  title: "",
  description: "",
  industry: "",
  material: "",
  color: "",
  print_time_hours: null,
  weight_grams: null,
  dimensions: "",
  quantity: 1,
  delivery_days: null,
  image_url: null,
  customer_quote: "",
  customer_name: "",
  highlights: [],
  is_featured: false,
  is_active: true,
  sort_order: 0,
};

const ReferencesManager = () => {
  const [references, setReferences] = useState<Reference[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingRef, setEditingRef] = useState<Partial<Reference> | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [newHighlight, setNewHighlight] = useState("");
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryType, setNewCategoryType] = useState<'industry' | 'material'>('industry');
  const { toast } = useToast();

  useEffect(() => {
    fetchReferences();
    fetchCategories();
  }, []);

  const fetchReferences = async () => {
    try {
      const { data, error } = await supabase
        .from('references')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) throw error;
      setReferences(data || []);
    } catch (error) {
      console.error('Error fetching references:', error);
      toast({
        title: "Fehler",
        description: "Referenzen konnten nicht geladen werden",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('reference_categories')
        .select('*')
        .order('type', { ascending: true })
        .order('sort_order', { ascending: true });

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('reference-images')
        .upload(filePath, file, {
          cacheControl: '31536000', // 1 year cache
          upsert: false,
        });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('reference-images')
        .getPublicUrl(filePath);

      setEditingRef(prev => ({ ...prev, image_url: publicUrl }));

      toast({
        title: "Bild hochgeladen",
        description: "Das Bild wurde erfolgreich hochgeladen",
      });
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: "Upload fehlgeschlagen",
        description: "Das Bild konnte nicht hochgeladen werden",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleSaveReference = async () => {
    if (!editingRef?.title || !editingRef?.industry || !editingRef?.material) {
      toast({
        title: "Fehlende Felder",
        description: "Bitte füllen Sie Titel, Branche und Material aus",
        variant: "destructive",
      });
      return;
    }

    try {
      if (editingRef.id) {
        // Update existing
        const { error } = await supabase
          .from('references')
          .update({
            title: editingRef.title,
            description: editingRef.description,
            industry: editingRef.industry,
            material: editingRef.material,
            color: editingRef.color,
            print_time_hours: editingRef.print_time_hours,
            weight_grams: editingRef.weight_grams,
            dimensions: editingRef.dimensions,
            quantity: editingRef.quantity,
            delivery_days: editingRef.delivery_days,
            image_url: editingRef.image_url,
            customer_quote: editingRef.customer_quote,
            customer_name: editingRef.customer_name,
            highlights: editingRef.highlights,
            is_featured: editingRef.is_featured,
            is_active: editingRef.is_active,
            sort_order: editingRef.sort_order,
          })
          .eq('id', editingRef.id);

        if (error) throw error;
        toast({ title: "Referenz aktualisiert" });
      } else {
        // Create new
        const { error } = await supabase
          .from('references')
          .insert({
            title: editingRef.title,
            description: editingRef.description,
            industry: editingRef.industry,
            material: editingRef.material,
            color: editingRef.color,
            print_time_hours: editingRef.print_time_hours,
            weight_grams: editingRef.weight_grams,
            dimensions: editingRef.dimensions,
            quantity: editingRef.quantity,
            delivery_days: editingRef.delivery_days,
            image_url: editingRef.image_url,
            customer_quote: editingRef.customer_quote,
            customer_name: editingRef.customer_name,
            highlights: editingRef.highlights,
            is_featured: editingRef.is_featured,
            is_active: editingRef.is_active,
            sort_order: references.length,
          });

        if (error) throw error;
        toast({ title: "Referenz erstellt" });
      }

      setIsDialogOpen(false);
      setEditingRef(null);
      fetchReferences();
    } catch (error) {
      console.error('Error saving reference:', error);
      toast({
        title: "Fehler",
        description: "Referenz konnte nicht gespeichert werden",
        variant: "destructive",
      });
    }
  };

  const handleDeleteReference = async (id: string) => {
    if (!confirm("Möchten Sie diese Referenz wirklich löschen?")) return;

    try {
      const { error } = await supabase
        .from('references')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Referenz gelöscht" });
      fetchReferences();
    } catch (error) {
      console.error('Error deleting reference:', error);
      toast({
        title: "Fehler",
        description: "Referenz konnte nicht gelöscht werden",
        variant: "destructive",
      });
    }
  };

  const toggleActive = async (id: string, currentState: boolean) => {
    try {
      const { error } = await supabase
        .from('references')
        .update({ is_active: !currentState })
        .eq('id', id);

      if (error) throw error;
      fetchReferences();
    } catch (error) {
      console.error('Error toggling active state:', error);
    }
  };

  const toggleFeatured = async (id: string, currentState: boolean) => {
    try {
      const { error } = await supabase
        .from('references')
        .update({ is_featured: !currentState })
        .eq('id', id);

      if (error) throw error;
      fetchReferences();
    } catch (error) {
      console.error('Error toggling featured state:', error);
    }
  };

  const addHighlight = () => {
    if (!newHighlight.trim()) return;
    setEditingRef(prev => ({
      ...prev,
      highlights: [...(prev?.highlights || []), newHighlight.trim()]
    }));
    setNewHighlight("");
  };

  const removeHighlight = (index: number) => {
    setEditingRef(prev => ({
      ...prev,
      highlights: prev?.highlights?.filter((_, i) => i !== index)
    }));
  };

  const addCategory = async () => {
    if (!newCategoryName.trim()) return;

    try {
      const { error } = await supabase
        .from('reference_categories')
        .insert({
          name: newCategoryName.trim(),
          type: newCategoryType,
          sort_order: categories.filter(c => c.type === newCategoryType).length,
        });

      if (error) throw error;
      toast({ title: "Kategorie erstellt" });
      setNewCategoryName("");
      fetchCategories();
    } catch (error) {
      console.error('Error creating category:', error);
      toast({
        title: "Fehler",
        description: "Kategorie konnte nicht erstellt werden",
        variant: "destructive",
      });
    }
  };

  const deleteCategory = async (id: string) => {
    if (!confirm("Möchten Sie diese Kategorie wirklich löschen?")) return;

    try {
      const { error } = await supabase
        .from('reference_categories')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Kategorie gelöscht" });
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const industryCategories = categories.filter(c => c.type === 'industry');
  const materialCategories = categories.filter(c => c.type === 'material');

  if (loading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-8">
          <Loader2 className="w-6 h-6 animate-spin" />
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="references">
        <TabsList>
          <TabsTrigger value="references">Referenzen ({references.length})</TabsTrigger>
          <TabsTrigger value="categories">Kategorien ({categories.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="references" className="space-y-4">
          {/* Header with Add Button */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Referenzen verwalten</h3>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={() => setEditingRef({ ...emptyReference })}>
                  <Plus className="w-4 h-4 mr-2" />
                  Neue Referenz
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingRef?.id ? "Referenz bearbeiten" : "Neue Referenz erstellen"}
                  </DialogTitle>
                </DialogHeader>

                {editingRef && (
                  <div className="grid gap-6 py-4">
                    {/* Image Upload */}
                    <div className="space-y-2">
                      <Label>Projektbild (Original-Qualität)</Label>
                      <div className="flex items-start gap-4">
                        {editingRef.image_url ? (
                          <div className="relative w-48 h-48 rounded-lg overflow-hidden bg-muted">
                            <img 
                              src={editingRef.image_url} 
                              alt="Preview" 
                              className="w-full h-full object-cover"
                            />
                            <Button
                              variant="destructive"
                              size="icon"
                              className="absolute top-2 right-2 h-8 w-8"
                              onClick={() => setEditingRef(prev => ({ ...prev, image_url: null }))}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        ) : (
                          <label className="flex flex-col items-center justify-center w-48 h-48 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors">
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={handleImageUpload}
                              disabled={uploading}
                            />
                            {uploading ? (
                              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
                            ) : (
                              <>
                                <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                                <span className="text-sm text-muted-foreground text-center px-2">
                                  Bild hochladen<br/>(max. 50MB)
                                </span>
                              </>
                            )}
                          </label>
                        )}
                        <div className="flex-1 space-y-2">
                          <p className="text-sm text-muted-foreground">
                            ✓ Original-Qualität wird beibehalten<br/>
                            ✓ Unterstützt: JPG, PNG, WebP, HEIC<br/>
                            ✓ Max. 50MB pro Bild
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Basic Info */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Titel *</Label>
                        <Input
                          id="title"
                          value={editingRef.title || ""}
                          onChange={(e) => setEditingRef(prev => ({ ...prev, title: e.target.value }))}
                          placeholder="z.B. Prototyp Gehäuse Steuerungsmodul"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Branche *</Label>
                          <Select 
                            value={editingRef.industry || ""} 
                            onValueChange={(v) => setEditingRef(prev => ({ ...prev, industry: v }))}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Wählen..." />
                            </SelectTrigger>
                            <SelectContent>
                              {industryCategories.map(cat => (
                                <SelectItem key={cat.id} value={cat.name}>{cat.name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Material *</Label>
                          <Select 
                            value={editingRef.material || ""} 
                            onValueChange={(v) => setEditingRef(prev => ({ ...prev, material: v }))}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Wählen..." />
                            </SelectTrigger>
                            <SelectContent>
                              {materialCategories.map(cat => (
                                <SelectItem key={cat.id} value={cat.name}>{cat.name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Beschreibung</Label>
                      <Textarea
                        id="description"
                        value={editingRef.description || ""}
                        onChange={(e) => setEditingRef(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Kurze Beschreibung des Projekts..."
                        rows={3}
                      />
                    </div>

                    {/* Technical Data */}
                    <div className="space-y-3">
                      <Label className="text-base font-semibold">Technische Daten</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="color">Farbe</Label>
                          <Input
                            id="color"
                            value={editingRef.color || ""}
                            onChange={(e) => setEditingRef(prev => ({ ...prev, color: e.target.value }))}
                            placeholder="z.B. Anthrazit"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dimensions">Abmessungen</Label>
                          <Input
                            id="dimensions"
                            value={editingRef.dimensions || ""}
                            onChange={(e) => setEditingRef(prev => ({ ...prev, dimensions: e.target.value }))}
                            placeholder="z.B. 120 × 80 × 45 mm"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="print_time">Druckzeit (Stunden)</Label>
                          <Input
                            id="print_time"
                            type="number"
                            step="0.5"
                            value={editingRef.print_time_hours || ""}
                            onChange={(e) => setEditingRef(prev => ({ ...prev, print_time_hours: parseFloat(e.target.value) || null }))}
                            placeholder="z.B. 8.5"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="weight">Gewicht (Gramm)</Label>
                          <Input
                            id="weight"
                            type="number"
                            value={editingRef.weight_grams || ""}
                            onChange={(e) => setEditingRef(prev => ({ ...prev, weight_grams: parseFloat(e.target.value) || null }))}
                            placeholder="z.B. 145"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="quantity">Stückzahl</Label>
                          <Input
                            id="quantity"
                            type="number"
                            value={editingRef.quantity || ""}
                            onChange={(e) => setEditingRef(prev => ({ ...prev, quantity: parseInt(e.target.value) || 1 }))}
                            placeholder="z.B. 3"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="delivery">Lieferzeit (Tage)</Label>
                          <Input
                            id="delivery"
                            type="number"
                            value={editingRef.delivery_days || ""}
                            onChange={(e) => setEditingRef(prev => ({ ...prev, delivery_days: parseInt(e.target.value) || null }))}
                            placeholder="z.B. 2"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <Label className="text-base font-semibold">Highlights</Label>
                      <div className="flex gap-2">
                        <Input
                          value={newHighlight}
                          onChange={(e) => setNewHighlight(e.target.value)}
                          placeholder="z.B. Präzise Toleranzen ±0.2mm"
                          onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addHighlight())}
                        />
                        <Button type="button" onClick={addHighlight} variant="outline">
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {editingRef.highlights?.map((highlight, i) => (
                          <Badge key={i} variant="secondary" className="gap-1 pr-1">
                            {highlight}
                            <button onClick={() => removeHighlight(i)} className="ml-1 hover:text-destructive">
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Customer Quote */}
                    <div className="space-y-3">
                      <Label className="text-base font-semibold">Kundenfeedback (optional)</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="quote">Zitat</Label>
                          <Textarea
                            id="quote"
                            value={editingRef.customer_quote || ""}
                            onChange={(e) => setEditingRef(prev => ({ ...prev, customer_quote: e.target.value }))}
                            placeholder="Kundenzitat..."
                            rows={3}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="customer">Kundenname</Label>
                          <Input
                            id="customer"
                            value={editingRef.customer_name || ""}
                            onChange={(e) => setEditingRef(prev => ({ ...prev, customer_name: e.target.value }))}
                            placeholder="z.B. Ing. M. Huber, Maschinenbau GmbH"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Status Toggles */}
                    <div className="flex items-center gap-8 pt-4 border-t">
                      <div className="flex items-center gap-3">
                        <Switch
                          checked={editingRef.is_active ?? true}
                          onCheckedChange={(checked) => setEditingRef(prev => ({ ...prev, is_active: checked }))}
                        />
                        <Label>Aktiv (öffentlich sichtbar)</Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <Switch
                          checked={editingRef.is_featured ?? false}
                          onCheckedChange={(checked) => setEditingRef(prev => ({ ...prev, is_featured: checked }))}
                        />
                        <Label>Featured (hervorgehoben)</Label>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-4">
                      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Abbrechen
                      </Button>
                      <Button onClick={handleSaveReference}>
                        <Check className="w-4 h-4 mr-2" />
                        Speichern
                      </Button>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>

          {/* References List */}
          <div className="space-y-3">
            {references.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <ImageIcon className="w-12 h-12 text-muted-foreground mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Noch keine Referenzen</h3>
                  <p className="text-muted-foreground mb-4">
                    Erstellen Sie Ihre erste Referenz, um Ihre Projekte zu präsentieren.
                  </p>
                  <Button onClick={() => { setEditingRef({ ...emptyReference }); setIsDialogOpen(true); }}>
                    <Plus className="w-4 h-4 mr-2" />
                    Erste Referenz erstellen
                  </Button>
                </CardContent>
              </Card>
            ) : (
              references.map((ref) => (
                <Card key={ref.id} className={`transition-opacity ${!ref.is_active ? 'opacity-50' : ''}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      {/* Image Thumbnail */}
                      <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        {ref.image_url ? (
                          <img src={ref.image_url} alt={ref.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <ImageIcon className="w-8 h-8 text-muted-foreground" />
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="font-semibold truncate">{ref.title}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline">{ref.industry}</Badge>
                              <Badge variant="secondary">{ref.material}</Badge>
                              {ref.is_featured && (
                                <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                                  <Star className="w-3 h-3 mr-1" />
                                  Featured
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => toggleFeatured(ref.id, ref.is_featured ?? false)}
                              title={ref.is_featured ? "Featured entfernen" : "Als Featured markieren"}
                            >
                              <Star className={`w-4 h-4 ${ref.is_featured ? 'fill-yellow-500 text-yellow-500' : ''}`} />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => toggleActive(ref.id, ref.is_active ?? true)}
                              title={ref.is_active ? "Deaktivieren" : "Aktivieren"}
                            >
                              {ref.is_active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => { setEditingRef(ref); setIsDialogOpen(true); }}
                            >
                              <Pencil className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDeleteReference(ref.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Technical Data */}
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                          {ref.print_time_hours && <span>⏱ {ref.print_time_hours}h</span>}
                          {ref.weight_grams && <span>⚖ {ref.weight_grams}g</span>}
                          {ref.dimensions && <span>📐 {ref.dimensions}</span>}
                          {ref.quantity && <span>📦 {ref.quantity}x</span>}
                          {ref.delivery_days && <span>🚚 {ref.delivery_days}d</span>}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="categories" className="space-y-6">
          {/* Add Category */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Tags className="w-5 h-5" />
                Neue Kategorie erstellen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Select value={newCategoryType} onValueChange={(v: 'industry' | 'material') => setNewCategoryType(v)}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="industry">Branche</SelectItem>
                    <SelectItem value="material">Material</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  placeholder="Kategoriename..."
                  className="flex-1"
                  onKeyDown={(e) => e.key === 'Enter' && addCategory()}
                />
                <Button onClick={addCategory}>
                  <Plus className="w-4 h-4 mr-2" />
                  Hinzufügen
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Industry Categories */}
          <Card>
            <CardHeader>
              <CardTitle>Branchen ({industryCategories.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {industryCategories.map(cat => (
                  <Badge key={cat.id} variant="outline" className="gap-2 py-1.5 px-3">
                    {cat.name}
                    <button onClick={() => deleteCategory(cat.id)} className="hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Material Categories */}
          <Card>
            <CardHeader>
              <CardTitle>Materialien ({materialCategories.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {materialCategories.map(cat => (
                  <Badge key={cat.id} variant="secondary" className="gap-2 py-1.5 px-3">
                    {cat.name}
                    <button onClick={() => deleteCategory(cat.id)} className="hover:text-destructive">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReferencesManager;
