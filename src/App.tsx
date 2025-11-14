import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SEOWrapper } from "./components/SEOWrapper";
import Navigation from "./components/Navigation";
import EnhancedBreadcrumbs from "./components/EnhancedBreadcrumbs";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Bestemmingen from "./pages/Bestemmingen";
import Destination from "./pages/Destination";
import Deals from "./pages/Deals";
import Gidsen from "./pages/Gidsen";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const BASENAME = (import.meta.env.BASE_URL && import.meta.env.BASE_URL !== './') ? import.meta.env.BASE_URL : '/';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={BASENAME}>
          <SEOWrapper>
            <Navigation />
            <EnhancedBreadcrumbs />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/bestemmingen" element={<Bestemmingen />} />
              <Route path="/bestemmingen/:slug" element={<Destination />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/gidsen" element={<Gidsen />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <BackToTop />
          </SEOWrapper>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
