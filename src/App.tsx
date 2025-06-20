import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";           // Ahora contiene Apply
import Banks from "./pages/Banks";          // Ahora contiene el contenido anterior de Index
import Loading from "./pages/Loading";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";
import LoadingResults from "./pages/Loading-results";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />                {/* Apply ahora en raíz */}
          <Route path="/banks" element={<Banks />} />           {/* Página antigua ahora en /banks */}
          <Route path="/loading" element={<Loading />} />
          <Route path="/loading-results" element={<LoadingResults />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
