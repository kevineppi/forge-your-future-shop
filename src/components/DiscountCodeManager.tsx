import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Plus } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export const DiscountCodeManager = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [newCode, setNewCode] = useState({
    code: "",
    discount_percentage: "",
    max_uses: "",
    expires_at: "",
  });

  const { data: discountCodes, isLoading } = useQuery({
    queryKey: ["discount-codes"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("discount_codes")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  const createCodeMutation = useMutation({
    mutationFn: async (codeData: typeof newCode) => {
      const { data, error } = await supabase
        .from("discount_codes")
        .insert({
          code: codeData.code.toUpperCase(),
          discount_percentage: parseInt(codeData.discount_percentage),
          max_uses: codeData.max_uses ? parseInt(codeData.max_uses) : null,
          expires_at: codeData.expires_at || null,
        })
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["discount-codes"] });
      setNewCode({ code: "", discount_percentage: "", max_uses: "", expires_at: "" });
      toast({
        title: "Rabattcode erstellt",
        description: "Der Rabattcode wurde erfolgreich erstellt.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Fehler",
        description: error.message || "Fehler beim Erstellen des Rabattcodes",
        variant: "destructive",
      });
    },
  });

  const toggleCodeMutation = useMutation({
    mutationFn: async ({ id, is_active }: { id: string; is_active: boolean }) => {
      const { error } = await supabase
        .from("discount_codes")
        .update({ is_active })
        .eq("id", id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["discount-codes"] });
      toast({
        title: "Status aktualisiert",
        description: "Der Status des Rabattcodes wurde aktualisiert.",
      });
    },
  });

  const deleteCodeMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("discount_codes")
        .delete()
        .eq("id", id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["discount-codes"] });
      toast({
        title: "Rabattcode gelöscht",
        description: "Der Rabattcode wurde erfolgreich gelöscht.",
      });
    },
  });

  const handleCreateCode = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newCode.code || !newCode.discount_percentage) {
      toast({
        title: "Fehler",
        description: "Code und Rabatt sind erforderlich",
        variant: "destructive",
      });
      return;
    }

    const discount = parseInt(newCode.discount_percentage);
    if (discount < 1 || discount > 100) {
      toast({
        title: "Fehler",
        description: "Rabatt muss zwischen 1 und 100% liegen",
        variant: "destructive",
      });
      return;
    }

    createCodeMutation.mutate(newCode);
  };

  if (isLoading) {
    return <div>Laden...</div>;
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Neuen Rabattcode erstellen</h3>
        <form onSubmit={handleCreateCode} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="code">Code</Label>
              <Input
                id="code"
                value={newCode.code}
                onChange={(e) => setNewCode({ ...newCode, code: e.target.value.toUpperCase() })}
                placeholder="SOMMER2024"
                required
              />
            </div>
            <div>
              <Label htmlFor="discount">Rabatt (%)</Label>
              <Input
                id="discount"
                type="number"
                min="1"
                max="100"
                value={newCode.discount_percentage}
                onChange={(e) => setNewCode({ ...newCode, discount_percentage: e.target.value })}
                placeholder="10"
                required
              />
            </div>
            <div>
              <Label htmlFor="max_uses">Max. Verwendungen (optional)</Label>
              <Input
                id="max_uses"
                type="number"
                min="1"
                value={newCode.max_uses}
                onChange={(e) => setNewCode({ ...newCode, max_uses: e.target.value })}
                placeholder="Unbegrenzt"
              />
            </div>
            <div>
              <Label htmlFor="expires_at">Ablaufdatum (optional)</Label>
              <Input
                id="expires_at"
                type="datetime-local"
                value={newCode.expires_at}
                onChange={(e) => setNewCode({ ...newCode, expires_at: e.target.value })}
              />
            </div>
          </div>
          <Button type="submit" disabled={createCodeMutation.isPending}>
            <Plus className="w-4 h-4 mr-2" />
            Rabattcode erstellen
          </Button>
        </form>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Bestehende Rabattcodes</h3>
        {discountCodes && discountCodes.length === 0 ? (
          <p className="text-muted-foreground">Keine Rabattcodes vorhanden</p>
        ) : (
          <div className="grid gap-4">
            {discountCodes?.map((code) => (
              <Card key={code.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <span className="font-mono font-bold text-lg">{code.code}</span>
                      <span className="text-primary font-semibold">-{code.discount_percentage}%</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 space-y-1">
                      {code.max_uses !== null && (
                        <div>
                          Verwendet: {code.current_uses} / {code.max_uses}
                        </div>
                      )}
                      {code.expires_at && (
                        <div>
                          Läuft ab: {new Date(code.expires_at).toLocaleString("de-AT")}
                        </div>
                      )}
                      <div>
                        Erstellt: {new Date(code.created_at).toLocaleDateString("de-AT")}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Label htmlFor={`active-${code.id}`}>Aktiv</Label>
                      <Switch
                        id={`active-${code.id}`}
                        checked={code.is_active}
                        onCheckedChange={(checked) =>
                          toggleCodeMutation.mutate({ id: code.id, is_active: checked })
                        }
                      />
                    </div>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => {
                        if (confirm("Rabattcode wirklich löschen?")) {
                          deleteCodeMutation.mutate(code.id);
                        }
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
