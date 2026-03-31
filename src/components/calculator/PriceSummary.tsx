import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { PriceBreakdown } from "@/lib/priceCalculator";
import { TrendingDown, AlertTriangle, Send, Info } from "lucide-react";

interface Props {
  result: PriceBreakdown | null;
  onInquiry: () => void;
}

const fmt = (n: number) => n.toFixed(2).replace(".", ",") + " €";
const pct = (n: number) => (n * 100).toFixed(0) + " %";

const PriceSummary = ({ result, onInquiry }: Props) => {
  if (!result) {
    return (
      <Card className="border-border/60 shadow-lg bg-muted/30">
        <CardContent className="py-16 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Info className="h-8 w-8 text-primary/60" />
          </div>
          <p className="text-muted-foreground font-medium">
            Konfigurieren Sie Ihr Bauteil und klicken Sie auf „Richtpreis kalkulieren".
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Die Preisindikation erscheint hier.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-primary/30 shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">Preisindikation</CardTitle>
          <Badge variant="outline" className="border-primary/40 text-primary text-xs">
            Unverbindlich
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Detail-Positionen */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Materialkosten / Stück</span>
            <span>{fmt(result.materialCostPerPiece)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Bearbeitungskosten / Stück</span>
            <span>{fmt(result.processingCostPerPiece)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Rüstkosten (einmalig)</span>
            <span>{fmt(result.setupCost)}</span>
          </div>

          <Separator className="my-2" />

          <div className="flex justify-between font-medium">
            <span>Zwischensumme</span>
            <span>{fmt(result.subtotalAll)}</span>
          </div>

          {/* Rabatte */}
          {result.quantityDiscountAmount > 0 && (
            <div className="flex justify-between text-primary">
              <span className="flex items-center gap-1">
                <TrendingDown className="h-3.5 w-3.5" />
                Mengenrabatt ({pct(result.quantityDiscountPercent)})
              </span>
              <span>− {fmt(result.quantityDiscountAmount)}</span>
            </div>
          )}
          {result.orderValueDiscountAmount > 0 && (
            <div className="flex justify-between text-primary">
              <span className="flex items-center gap-1">
                <TrendingDown className="h-3.5 w-3.5" />
                Wertrabatt ({pct(result.orderValueDiscountPercent)})
              </span>
              <span>− {fmt(result.orderValueDiscountAmount)}</span>
            </div>
          )}

          {/* Zuschlag */}
          {result.smallOrderSurcharge > 0 && (
            <div className="flex justify-between text-amber-600">
              <span className="flex items-center gap-1 text-destructive">
                <AlertTriangle className="h-3.5 w-3.5" />
                Mindermengenzuschlag
              </span>
              <span>+ {fmt(result.smallOrderSurcharge)}</span>
            </div>
          )}

          <Separator className="my-2" />

          <div className="flex justify-between font-semibold text-base">
            <span>Netto-Richtpreis</span>
            <span>{fmt(result.netTotal)}</span>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>zzgl. 20 % USt</span>
            <span>{fmt(result.vatAmount)}</span>
          </div>
        </div>

        {/* Brutto */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center">
          <p className="text-xs text-muted-foreground mb-1">Geschätzter Bruttopreis</p>
          <p className="text-3xl font-bold text-foreground">{fmt(result.grossTotal)}</p>
          <p className="text-xs text-muted-foreground mt-1">
            ca. {fmt(result.pricePerPiece)} netto / Stück
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground text-center leading-relaxed">
          Unverbindliche Preisindikation auf Basis von Standardwerten.
          Der endgültige Preis kann nach technischer Prüfung abweichen.
        </p>

        {/* CTA */}
        <div className="space-y-3 pt-2">
          <Button
            onClick={onInquiry}
            variant="cta"
            size="lg"
            className="w-full"
          >
            <Send className="h-4 w-4 mr-2" />
            Unverbindliche Anfrage senden
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            Sie möchten ein exaktes Angebot? Senden Sie uns Ihre Datei und
            Anforderungen für eine individuelle Prüfung.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceSummary;
