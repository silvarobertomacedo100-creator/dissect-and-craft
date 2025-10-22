import { useState } from "react";
import { ArrowLeft, Plus, MessageSquare, Building2, Trash2, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

type ConfigSection = "main" | "canais" | "setores" | "atendentes" | "etiquetas";

const whatsappChannels = [
  { id: 1, name: "WhatsApp Principal", phone: "+55 11 98765-4321", status: "Conectado" },
  { id: 2, name: "WhatsApp Principal", phone: "+55 11 98765-4321", status: "Conectado" },
  { id: 3, name: "WhatsApp Principal", phone: "+55 11 98765-4321", status: "Conectado" },
];

const setores = [
  { id: 1, name: "Vendas", description: "Equipe responsável por vendas e prospecção", icon: "💼" },
  { id: 2, name: "Suporte", description: "Atendimento e suporte técnico aos clientes", icon: "🎧" },
  { id: 3, name: "Financeiro", description: "Gestão financeira e cobranças", icon: "💰" },
  { id: 4, name: "Vendas", description: "Equipe de vendas e prospecção", icon: "💼" },
  { id: 5, name: "Suporte", description: "Atendimento e suporte técnico", icon: "🎧" },
];

const atendentes = [
  { id: 1, name: "Operador", email: "xxxxxx@umbler.com", setor: "Vendas", status: "Ativo", avatar: "O", color: "bg-primary" },
];

const etiquetas = [
  { id: 1, name: "hjhgj", color: "bg-destructive" },
];

const tagColors = [
  "bg-destructive", "bg-orange-500", "bg-warning", "bg-success",
  "bg-success", "bg-blue-500", "bg-blue-500", "bg-primary",
  "bg-primary", "bg-pink-500", "bg-pink-500", "bg-destructive"
];

export default function Configuracoes() {
  const [section, setSection] = useState<ConfigSection>("main");
  const [showSetorModal, setShowSetorModal] = useState(false);
  const [showAtendenteModal, setShowAtendenteModal] = useState(false);
  const [showEtiquetaModal, setShowEtiquetaModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState(tagColors[0]);

  const handleRemoveChannel = (id: number) => {
    toast.success("Canal removido com sucesso");
  };

  const handleDeleteSetor = (id: number) => {
    toast.success("Setor removido com sucesso");
  };

  if (section === "main") {
    return (
      <div className="h-full flex flex-col">
        <div className="p-6 border-b border-border">
          <h1 className="text-3xl font-bold mb-2">Configurações</h1>
          <p className="text-muted-foreground">Gerencie as configurações da sua plataforma</p>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
            <Card 
              className="p-6 hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => setSection("canais")}
            >
              <MessageSquare className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Canais de Atendimento</h3>
              <p className="text-sm text-muted-foreground">
                Gerencie os canais de mensagens da sua organização
              </p>
            </Card>

            <Card 
              className="p-6 hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => setSection("setores")}
            >
              <Building2 className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Setores</h3>
              <p className="text-sm text-muted-foreground">
                Defina os setores da sua organização
              </p>
            </Card>

            <Card 
              className="p-6 hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => setSection("atendentes")}
            >
              <Avatar className="w-8 h-8 bg-primary mb-4">
                <AvatarFallback className="bg-primary text-white">A</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-bold mb-2">Atendentes</h3>
              <p className="text-sm text-muted-foreground">
                Gerencie os atendentes e suas permissões
              </p>
            </Card>

            <Card 
              className="p-6 hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => setSection("etiquetas")}
            >
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-lg">🏷️</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Etiquetas</h3>
              <p className="text-sm text-muted-foreground">
                Crie etiquetas para organizar
              </p>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (section === "canais") {
    return (
      <div className="h-full flex flex-col">
        <div className="p-6 border-b border-border">
          <button 
            onClick={() => setSection("main")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Configurações
          </button>
          <h1 className="text-3xl font-bold mb-2">Canais de atendimento</h1>
          <p className="text-muted-foreground">
            Gerencie os canais de mensagens da sua organização
          </p>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <Card className="p-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-success flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold">WhatsApp Básico</h3>
                <p className="text-sm text-muted-foreground">Conexão via QR Code</p>
              </div>
            </div>
          </Card>

          <div className="space-y-3">
            {whatsappChannels.map((channel) => (
              <Card key={channel.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-success" />
                    <div>
                      <p className="font-semibold">{channel.name}</p>
                      <p className="text-sm text-muted-foreground">{channel.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-success">{channel.status}</Badge>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={() => handleRemoveChannel(channel.id)}
                    >
                      Remover
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (section === "setores") {
    return (
      <div className="h-full flex flex-col">
        <div className="p-6 border-b border-border">
          <button 
            onClick={() => setSection("main")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Configurações
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Setores</h1>
              <p className="text-muted-foreground">Defina os setores da sua organização</p>
            </div>
            <Button onClick={() => setShowSetorModal(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Novo Setor
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {setores.map((setor) => (
              <Card key={setor.id} className="p-6 relative group">
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive hover:bg-destructive/10"
                  onClick={() => handleDeleteSetor(setor.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
                <div className="text-4xl mb-4">{setor.icon}</div>
                <h3 className="text-lg font-bold mb-2">{setor.name}</h3>
                <p className="text-sm text-muted-foreground">{setor.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <Dialog open={showSetorModal} onOpenChange={setShowSetorModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo Setor</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label>Nome do Setor *</Label>
                <Input placeholder="Ex: Vendas" className="mt-2" />
              </div>
              <div>
                <Label>Descrição</Label>
                <Input placeholder="Descreva o setor..." className="mt-2" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowSetorModal(false)}>
                Cancelar
              </Button>
              <Button onClick={() => {
                setShowSetorModal(false);
                toast.success("Setor criado com sucesso");
              }}>
                Criar Setor
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  if (section === "atendentes") {
    return (
      <div className="h-full flex flex-col">
        <div className="p-6 border-b border-border">
          <button 
            onClick={() => setSection("main")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Configurações
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Atendentes</h1>
              <p className="text-muted-foreground">Gerencie os atendentes e suas permissões</p>
            </div>
            <Button onClick={() => setShowAtendenteModal(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Novo Atendente
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="space-y-3 max-w-4xl">
            {atendentes.map((atendente) => (
              <Card key={atendente.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className={`w-12 h-12 ${atendente.color}`}>
                      <AvatarFallback className={`${atendente.color} text-white font-semibold`}>
                        {atendente.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{atendente.name}</p>
                      <p className="text-sm text-muted-foreground">{atendente.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-success">{atendente.status}</Badge>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setShowAtendenteModal(true)}
                    >
                      Editar
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Dialog open={showAtendenteModal} onOpenChange={setShowAtendenteModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Editar Atendente</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label>Nome *</Label>
                <Input defaultValue="Operador" className="mt-2" />
              </div>
              <div>
                <Label>Email *</Label>
                <Input defaultValue="xxxxxx@umbler.com" className="mt-2" />
              </div>
              <div>
                <Label>Setor</Label>
                <Select defaultValue="vendas">
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vendas">Vendas</SelectItem>
                    <SelectItem value="suporte">Suporte</SelectItem>
                    <SelectItem value="financeiro">Financeiro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowAtendenteModal(false)}>
                Cancelar
              </Button>
              <Button onClick={() => {
                setShowAtendenteModal(false);
                toast.success("Atendente atualizado com sucesso");
              }}>
                Salvar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  if (section === "etiquetas") {
    return (
      <div className="h-full flex flex-col">
        <div className="p-6 border-b border-border">
          <button 
            onClick={() => setSection("main")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Configurações
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Etiquetas</h1>
              <p className="text-muted-foreground">Crie etiquetas para organizar</p>
            </div>
            <Button onClick={() => setShowEtiquetaModal(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Nova Etiqueta
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="flex flex-wrap gap-3">
            {etiquetas.map((etiqueta) => (
              <button
                key={etiqueta.id}
                onClick={() => setShowEtiquetaModal(true)}
                className="group relative"
              >
                <Badge className={`${etiqueta.color} text-white px-4 py-2 text-sm`}>
                  {etiqueta.name}
                </Badge>
              </button>
            ))}
          </div>
        </div>

        <Dialog open={showEtiquetaModal} onOpenChange={setShowEtiquetaModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Editar Etiqueta</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label>Nome da Etiqueta *</Label>
                <Input defaultValue="hjhgj" className="mt-2" />
              </div>
              <div>
                <Label>Cor</Label>
                <div className="grid grid-cols-6 gap-3 mt-2">
                  {tagColors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full ${color} border-2 ${
                        selectedColor === color ? 'border-white' : 'border-transparent'
                      } transition-all`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowEtiquetaModal(false)}>
                Cancelar
              </Button>
              <Button onClick={() => {
                setShowEtiquetaModal(false);
                toast.success("Etiqueta atualizada com sucesso");
              }}>
                Salvar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return null;
}
