import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Index from "./pages/Index";
import FdmDruck from "./pages/FdmDruck";
import RapidPrototyping from "./pages/RapidPrototyping";
import Materialien from "./pages/Materialien";
import Einzelanfertigungen from "./pages/Einzelanfertigungen";
import Serienfertigung from "./pages/Serienfertigung";
import Impressum from "./pages/Impressum";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

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
            <Route path="/rapid-prototyping" element={<RapidPrototyping />} />
            <Route path="/3d-druck-materialien" element={<Materialien />} />
            <Route path="/einzelanfertigungen" element={<Einzelanfertigungen />} />
            <Route path="/serienfertigung" element={<Serienfertigung />} />
            <Route path="/impressum" element={<Impressum />} />
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
