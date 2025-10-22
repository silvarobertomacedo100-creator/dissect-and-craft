import { useState } from "react";
import { Search, Plus, Phone, Mail, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const conversations = [
  {
    id: 1,
    name: "BotEasy Agent",
    message: "Olá! Para que eu possa responder com IA, configure a API do Gemini em Configurações → Gemini AI. 😊",
    time: "20 minutos",
    status: "Em atendimento",
    avatar: "B",
    color: "bg-primary"
  }
];

export default function Conversas() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [showDeviceModal, setShowDeviceModal] = useState(false);

  return (
    <div className="flex h-full">
      {/* Conversations List */}
      <div className="w-[480px] border-r border-border flex flex-col bg-card">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Conversas</h2>
            <Button 
              size="sm"
              onClick={() => setShowWhatsAppModal(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Iniciar
            </Button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome ou telefone..."
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex gap-2 p-4 border-b border-border">
          <Button variant="default" size="sm">Todas</Button>
          <Button variant="secondary" size="sm">Abertas</Button>
          <Button variant="secondary" size="sm">Aguardando</Button>
          <Button variant="secondary" size="sm">Finalizadas</Button>
        </div>

        <div className="flex-1 overflow-auto">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              className="p-4 border-b border-border hover:bg-muted/50 cursor-pointer"
            >
              <div className="flex gap-3">
                <Avatar className={`w-12 h-12 ${conv.color}`}>
                  <AvatarFallback className={`${conv.color} text-white font-semibold`}>
                    {conv.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-sm">{conv.name}</h3>
                    <span className="text-xs text-muted-foreground">{conv.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                    {conv.message}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {conv.status}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conversation Details */}
      <div className="flex-1 flex flex-col">
        <div className="p-6 border-b border-border bg-card">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16 bg-primary">
              <AvatarFallback className="bg-primary text-white text-xl font-semibold">
                B
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl font-bold">BotEasy Agent</h2>
                <Badge className="bg-accent">Assistente Virtual</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Assistente sempre ativo - Tire suas dúvidas sobre o BotEasy
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="max-w-3xl">
            <div className="bg-card p-6 rounded-lg border border-border mb-4">
              <div className="flex items-start gap-3">
                <Avatar className="w-8 h-8 bg-primary">
                  <AvatarFallback className="bg-primary text-white text-sm">B</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-sm">BotEasy Agent</span>
                  </div>
                  <p className="text-sm">
                    Olá! Para que eu possa responder com IA, configure a API do Gemini em Configurações → Gemini AI. 😊
                  </p>
                  <span className="text-xs text-muted-foreground mt-2 inline-block">01:42</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Sidebar */}
        <div className="w-80 border-l border-border bg-card p-6">
          <div className="text-center mb-6">
            <Avatar className="w-24 h-24 mx-auto mb-4 bg-primary">
              <AvatarFallback className="bg-primary text-white text-3xl font-bold">
                B
              </AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold mb-2">BotEasy Agent</h3>
            
            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span>+55 11 98765-0000</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span>agent@boteasy.ai</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Tag className="w-4 h-4 text-muted-foreground" />
                <span>Etiquetas</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <Badge>IA</Badge>
              <Badge>Assistente</Badge>
              <Badge>Suporte</Badge>
            </div>

            <div className="mt-6 p-4 bg-muted rounded-lg text-left">
              <h4 className="font-semibold text-sm mb-2">Observações</h4>
              <p className="text-xs text-muted-foreground">
                Assistente virtual inteligente do BotEasy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp QR Code Modal */}
      <Dialog open={showWhatsAppModal} onOpenChange={setShowWhatsAppModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Sincronize o BotEasy com o seu WhatsApp!</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-6 py-4">
            <div className="w-64 h-64 bg-white rounded-lg flex items-center justify-center">
              <div className="text-center text-black p-4">
                <p className="text-sm">QR Code aqui</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => {
                setShowWhatsAppModal(false);
                setShowDeviceModal(true);
              }}
            >
              Gerar novo QR Code
            </Button>
            <div className="w-full space-y-2">
              <p className="font-semibold text-sm">Como conectar:</p>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>Abra o WhatsApp no celular</li>
                <li>Toque em Mais opções → Dispositivos conectados</li>
                <li>Toque em Conectar um dispositivo</li>
                <li>Aponte seu celular para esta tela para escanear o código</li>
              </ol>
            </div>
            <Button className="w-full bg-success hover:bg-success/90">
              Já Escaneei - Confirmar Conexão
            </Button>
            <p className="text-xs text-muted-foreground">
              Sessão: boteasy_1761109341710
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Device Name Modal */}
      <Dialog open={showDeviceModal} onOpenChange={setShowDeviceModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Sincronize o BotEasy com o seu WhatsApp!</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Nome do Dispositivo *
              </label>
              <Input placeholder="Ex: WhatsApp Principal" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">
                Número do WhatsApp *
              </label>
              <Input placeholder="Ex: +55 11 98765-4321" />
              <p className="text-xs text-muted-foreground mt-1">
                Digite o número que será usado para atendimento
              </p>
            </div>
            <Button className="w-full" onClick={() => setShowDeviceModal(false)}>
              Gerar QR Code
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
