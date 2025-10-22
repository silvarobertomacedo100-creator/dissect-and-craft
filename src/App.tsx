import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/Layout/MainLayout";
import Conversas from "./pages/Conversas";
import Contatos from "./pages/Contatos";
import Chatbots from "./pages/Chatbots";
import Fluxos from "./pages/Fluxos";
import Agentes from "./pages/Agentes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Conversas />} />
            <Route path="/contatos" element={<Contatos />} />
            <Route path="/chatbots" element={<Chatbots />} />
            <Route path="/fluxos" element={<Fluxos />} />
            <Route path="/agentes" element={<Agentes />} />
            <Route path="/envio" element={<div className="p-6"><h1 className="text-2xl font-bold">Envio em Massa</h1></div>} />
            <Route path="/relatorios" element={<div className="p-6"><h1 className="text-2xl font-bold">Relatórios</h1></div>} />
            <Route path="/configuracoes" element={<div className="p-6"><h1 className="text-2xl font-bold">Configurações</h1></div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
