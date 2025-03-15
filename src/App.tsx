
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact"; 
import BlogPage from "./pages/Blog";
import PricingPage from "./pages/Pricing";
import TestimonialsPage from "./pages/Testimonials";
import CheckoutPage from "./pages/Checkout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Page title updater component
const PageTitleUpdater = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Set default title
    const baseTitle = "OutSource Pro";
    
    // Update title based on current route
    switch (location.pathname) {
      case '/':
        document.title = `${baseTitle} | Premium Outsourcing Solutions`;
        break;
      case '/about':
        document.title = `About Us | ${baseTitle}`;
        break;
      case '/services':
        document.title = `Our Services | ${baseTitle}`;
        break;
      case '/contact':
        document.title = `Contact Us | ${baseTitle}`;
        break;
      case '/blog':
        document.title = `Blog | ${baseTitle}`;
        break;
      case '/pricing':
        document.title = `Pricing Plans | ${baseTitle}`;
        break;
      case '/testimonials':
        document.title = `Client Testimonials | ${baseTitle}`;
        break;
      case '/checkout':
        document.title = `Complete Your Purchase | ${baseTitle}`;
        break;
      default:
        document.title = baseTitle;
    }
    
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
};

// Routes component with title updater
const AppRoutes = () => {
  return (
    <>
      <PageTitleUpdater />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
