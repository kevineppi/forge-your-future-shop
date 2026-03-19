import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import ScrollToTop from "./components/ScrollToTop";
import { lazy, Suspense } from "react";

// ─── Critical pages (loaded eagerly – always visible above fold) ──────────────
import Index from "./pages/Index";

// ─── All other pages (lazy-loaded – only fetched when navigated to) ──────────
const FdmDruck               = lazy(() => import("./pages/FdmDruck"));
const Materialien            = lazy(() => import("./pages/Materialien"));
const Einzelanfertigungen    = lazy(() => import("./pages/Einzelanfertigungen"));
const ModellbauDekoration    = lazy(() => import("./pages/ModellbauDekoration"));
const Impressum              = lazy(() => import("./pages/Impressum"));
const Wien3DDruck            = lazy(() => import("./pages/Wien3DDruck"));
const Linz3DDruck            = lazy(() => import("./pages/Linz3DDruck"));
const Graz3DDruck            = lazy(() => import("./pages/Graz3DDruck"));
const Salzburg3DDruck        = lazy(() => import("./pages/Salzburg3DDruck"));
const Innsbruck3DDruck       = lazy(() => import("./pages/Innsbruck3DDruck"));
const Klagenfurt3DDruck      = lazy(() => import("./pages/Klagenfurt3DDruck"));
const Villach3DDruck         = lazy(() => import("./pages/Villach3DDruck"));
const Wels3DDruck            = lazy(() => import("./pages/Wels3DDruck"));
const StPoelten3DDruck       = lazy(() => import("./pages/StPoelten3DDruck"));
const Dornbirn3DDruck        = lazy(() => import("./pages/Dornbirn3DDruck"));
const Burgenland3DDruck      = lazy(() => import("./pages/Burgenland3DDruck"));
const Steiermark3DDruck      = lazy(() => import("./pages/Steiermark3DDruck"));
const Oberoesterreich3DDruck = lazy(() => import("./pages/Oberoesterreich3DDruck"));
const Niederoesterreich3DDruck = lazy(() => import("./pages/Niederoesterreich3DDruck"));
const Vorarlberg3DDruck      = lazy(() => import("./pages/Vorarlberg3DDruck"));
const Kaernten3DDruck        = lazy(() => import("./pages/Kaernten3DDruck"));
const Gunskirchen3DDruck     = lazy(() => import("./pages/Gunskirchen3DDruck"));
const Admin                  = lazy(() => import("./pages/Admin"));
const Auth                   = lazy(() => import("./pages/Auth"));
const NotFound               = lazy(() => import("./pages/NotFound"));
const Ratgeber               = lazy(() => import("./pages/Ratgeber"));
const KostenGuide            = lazy(() => import("./pages/ratgeber/KostenGuide"));
const VerfahrensVergleich    = lazy(() => import("./pages/ratgeber/VerfahrensVergleich"));
const MaterialGuide          = lazy(() => import("./pages/ratgeber/MaterialGuide"));
const PrototypingGuide       = lazy(() => import("./pages/ratgeber/PrototypingGuide"));
const MessemodellGuide       = lazy(() => import("./pages/ratgeber/MessemodellGuide"));
const ArchitekturmodellGuide = lazy(() => import("./pages/ratgeber/ArchitekturmodellGuide"));
const Prototypen             = lazy(() => import("./pages/Prototypen"));
const RapidPrototyping       = lazy(() => import("./pages/RapidPrototyping"));
const Glossar                = lazy(() => import("./pages/Glossar"));
const Referenzen             = lazy(() => import("./pages/Referenzen"));
const Architekturmodelle     = lazy(() => import("./pages/Architekturmodelle"));
const ArchitekturmodellRegion = lazy(() => import("./pages/ArchitekturmodellRegion"));
const Messemodelle           = lazy(() => import("./pages/Messemodelle"));
const MessemodellRegion      = lazy(() => import("./pages/MessemodellRegion"));
const Kunstobjekte           = lazy(() => import("./pages/Kunstobjekte"));
const Firmenkunden           = lazy(() => import("./pages/Firmenkunden"));
const Kontakt                = lazy(() => import("./pages/Kontakt"));
const UeberUns               = lazy(() => import("./pages/UeberUns"));

// ─── Minimal fallback shown during chunk fetch ────────────────────────────────
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/fdm-3d-druck" element={<FdmDruck />} />
              <Route path="/prototypen" element={<Prototypen />} />
              <Route path="/rapid-prototyping" element={<RapidPrototyping />} />
              <Route path="/3d-druck-materialien" element={<Materialien />} />
              <Route path="/einzelanfertigungen" element={<Einzelanfertigungen />} />
              <Route path="/modellbau-dekoration" element={<ModellbauDekoration />} />
              <Route path="/impressum" element={<Impressum />} />
              {/* Redirect trailing-slash variant to avoid canonical mismatch */}
              <Route path="/impressum/" element={<Navigate to="/impressum" replace />} />
              <Route path="/ratgeber" element={<Ratgeber />} />
              <Route path="/ratgeber/kosten-guide" element={<KostenGuide />} />
              <Route path="/ratgeber/verfahrens-vergleich" element={<VerfahrensVergleich />} />
              <Route path="/ratgeber/material-guide" element={<MaterialGuide />} />
              <Route path="/ratgeber/prototyping-guide" element={<PrototypingGuide />} />
              <Route path="/ratgeber/messemodell-guide" element={<MessemodellGuide />} />
              <Route path="/ratgeber/architekturmodell-guide" element={<ArchitekturmodellGuide />} />
              <Route path="/glossar" element={<Glossar />} />
              <Route path="/referenzen" element={<Referenzen />} />
              <Route path="/architekturmodelle" element={<Architekturmodelle />} />
              <Route path="/architekturmodelle/:region" element={<ArchitekturmodellRegion />} />
              <Route path="/messemodelle" element={<Messemodelle />} />
              <Route path="/messemodelle/:region" element={<MessemodellRegion />} />
              <Route path="/kunstobjekte" element={<Kunstobjekte />} />
              <Route path="/firmenkunden" element={<Firmenkunden />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/ueber-uns" element={<UeberUns />} />
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
