import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index"; // Renamed from Apply to Index     
import Loading from "./pages/Loading";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";
import LoadingResults from "./pages/Loading-results";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import TermsOfUse from "./pages/Terms";
import PrivacyPolicy from "./pages/Privacy";
import ThankYouPage from "./pages/Thank-you";
import Apply from "./pages/Apply"; // Renamed from Index to Apply

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />                
          <Route path="/apply" element={<Apply />} />           
          <Route path="/loading" element={<Loading />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/loading-results" element={<LoadingResults />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
