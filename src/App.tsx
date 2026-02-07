import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TVLoader } from "@/components/ui/TVLoader";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check if user has already seen the loader in this session
    const visited = sessionStorage.getItem('sohub-visited');
    if (visited) {
      setHasVisited(true);
      setIsLoading(false);
    }
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('sohub-visited', 'true');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* TV Loader - only shows on first visit per session */}
        {!hasVisited && isLoading && (
          <TVLoader onComplete={handleLoaderComplete} />
        )}
        
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
