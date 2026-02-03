import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Index from "./pages/Index";
import FdmDruck from "./pages/FdmDruck";
import Materialien from "./pages/Materialien";
import Einzelanfertigungen from "./pages/Einzelanfertigungen";
import ModellbauDekoration from "./pages/ModellbauDekoration";
import Impressum from "./pages/Impressum";
import Wien3DDruck from "./pages/Wien3DDruck";
import Linz3DDruck from "./pages/Linz3DDruck";
import Graz3DDruck from "./pages/Graz3DDruck";
import Salzburg3DDruck from "./pages/Salzburg3DDruck";
import Innsbruck3DDruck from "./pages/Innsbruck3DDruck";
import Klagenfurt3DDruck from "./pages/Klagenfurt3DDruck";
import Villach3DDruck from "./pages/Villach3DDruck";
import Wels3DDruck from "./pages/Wels3DDruck";
import StPoelten3DDruck from "./pages/StPoelten3DDruck";
import Dornbirn3DDruck from "./pages/Dornbirn3DDruck";
import Burgenland3DDruck from "./pages/Burgenland3DDruck";
import Steiermark3DDruck from "./pages/Steiermark3DDruck";
import Oberoesterreich3DDruck from "./pages/Oberoesterreich3DDruck";
import Niederoesterreich3DDruck from "./pages/Niederoesterreich3DDruck";
import Vorarlberg3DDruck from "./pages/Vorarlberg3DDruck";
import Kaernten3DDruck from "./pages/Kaernten3DDruck";
import Gunskirchen3DDruck from "./pages/Gunskirchen3DDruck";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Ratgeber from "./pages/Ratgeber";
import KostenGuide from "./pages/ratgeber/KostenGuide";
import VerfahrensVergleich from "./pages/ratgeber/VerfahrensVergleich";
import MaterialGuide from "./pages/ratgeber/MaterialGuide";
import PrototypingGuide from "./pages/ratgeber/PrototypingGuide";
import Prototypen from "./pages/Prototypen";
import Glossar from "./pages/Glossar";
import Referenzen from "./pages/Referenzen";
import Architekturmodelle from "./pages/Architekturmodelle";
import Messemodelle from "./pages/Messemodelle";
import Kunstobjekte from "./pages/Kunstobjekte";
import Firmenkunden from "./pages/Firmenkunden";
import Kontakt from "./pages/Kontakt";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/fdm-3d-druck" element={<FdmDruck />} />
            <Route path="/prototypen" element={<Prototypen />} />
            <Route path="/3d-druck-materialien" element={<Materialien />} />
            <Route path="/einzelanfertigungen" element={<Einzelanfertigungen />} />
            <Route path="/modellbau-dekoration" element={<ModellbauDekoration />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/ratgeber" element={<Ratgeber />} />
            <Route path="/ratgeber/kosten-guide" element={<KostenGuide />} />
            <Route path="/ratgeber/verfahrens-vergleich" element={<VerfahrensVergleich />} />
            <Route path="/ratgeber/material-guide" element={<MaterialGuide />} />
            <Route path="/ratgeber/prototyping-guide" element={<PrototypingGuide />} />
            <Route path="/glossar" element={<Glossar />} />
            <Route path="/referenzen" element={<Referenzen />} />
            <Route path="/architekturmodelle" element={<Architekturmodelle />} />
            <Route path="/messemodelle" element={<Messemodelle />} />
            <Route path="/kunstobjekte" element={<Kunstobjekte />} />
            <Route path="/firmenkunden" element={<Firmenkunden />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/3d-druck-wien" element={<Wien3DDruck />} />
            <Route path="/3d-druck-linz" element={<Linz3DDruck />} />
            <Route path="/3d-druck-graz" element={<Graz3DDruck />} />
            <Route path="/3d-druck-salzburg" element={<Salzburg3DDruck />} />
            <Route path="/3d-druck-innsbruck" element={<Innsbruck3DDruck />} />
            <Route path="/3d-druck-klagenfurt" element={<Klagenfurt3DDruck />} />
            <Route path="/3d-druck-villach" element={<Villach3DDruck />} />
            <Route path="/3d-druck-wels" element={<Wels3DDruck />} />
            <Route path="/3d-druck-st-poelten" element={<StPoelten3DDruck />} />
            <Route path="/3d-druck-dornbirn" element={<Dornbirn3DDruck />} />
            <Route path="/3d-druck-burgenland" element={<Burgenland3DDruck />} />
            <Route path="/3d-druck-steiermark" element={<Steiermark3DDruck />} />
            <Route path="/3d-druck-oberoesterreich" element={<Oberoesterreich3DDruck />} />
            <Route path="/3d-druck-niederoesterreich" element={<Niederoesterreich3DDruck />} />
            <Route path="/3d-druck-vorarlberg" element={<Vorarlberg3DDruck />} />
            <Route path="/3d-druck-kaernten" element={<Kaernten3DDruck />} />
            <Route path="/3d-druck-gunskirchen" element={<Gunskirchen3DDruck />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/auth" element={<Auth />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
