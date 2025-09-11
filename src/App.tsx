import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SEOWrapper } from "./components/SEOWrapper";
import Navigation from "./components/Navigation";
import Breadcrumbs from "./components/Breadcrumbs";
import BackToTop from "./components/BackToTop";
import Index from "./pages/Index";
import Bestemmingen from "./pages/Bestemmingen";
import Deals from "./pages/Deals";
import Gidsen from "./pages/Gidsen";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SEOWrapper>
            <Navigation />
            <Breadcrumbs />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/bestemmingen" element={<Bestemmingen />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/gidsen" element={<Gidsen />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <BackToTop />
          </SEOWrapper>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
