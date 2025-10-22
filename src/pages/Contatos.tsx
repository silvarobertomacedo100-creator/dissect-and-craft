import { useState } from "react";
import { Search, Plus, Phone, Mail, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contacts = [
  { id: 1, name: "BotEasy Agent", phone: "+55 11 98765-0000", email: "agent@boteasy.ai", avatar: "B", color: "bg-primary", tags: ["IA", "Assistente", "Suporte"] },
  { id: 2, name: "Maria Santos", phone: "+55 11 98765-4322", email: "maria@example.com", avatar: "M", color: "bg-success", tags: ["Novo", "Prospect"] },
  { id: 3, name: "Pedro Oliveira", phone: "+55 11 98765-4323", email: "pedro@example.com", avatar: "P", color: "bg-primary", tags: ["Suporte"] },
  { id: 4, name: "João Silva", phone: "+55 11 98765-4321", email: "joao@example.com", avatar: "J", color: "bg-blue-500", tags: ["VIP", "Cliente"] },
];

const avatarColors = [
  "bg-primary",
  "bg-blue-500", 
  "bg-success",
  "bg-warning",
  "bg-destructive",
  "bg-pink-500"
];

export default function Contatos() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  const handleEditContact = (contact: typeof contacts[0]) => {
    setSelectedContact(contact);
    setShowEditModal(true);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Contatos</h1>
            <p className="text-muted-foreground">Gerencie todos os contatos da sua plataforma</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Novo Contato
          </Button>
        </div>

        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome, telefone ou email..."
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filtrar
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => handleEditContact(contact)}
            >
              <div className="flex flex-col items-center text-center">
                <Avatar className={`w-16 h-16 mb-4 ${contact.color}`}>
                  <AvatarFallback className={`${contact.color} text-white text-xl font-bold`}>
                    {contact.avatar}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-lg mb-3">{contact.name}</h3>
                <div className="space-y-2 w-full mb-4">
                  <div className="flex items-center gap-2 text-sm justify-center">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm justify-center">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{contact.email}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {contact.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Contact Modal */}
      <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Editar Contato</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="name">Nome *</Label>
              <Input id="name" defaultValue={selectedContact.name} className="mt-2" />
            </div>
            <div>
              <Label htmlFor="phone">Telefone *</Label>
              <Input id="phone" defaultValue={selectedContact.phone} className="mt-2" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" defaultValue={selectedContact.email} className="mt-2" />
            </div>
            <div>
              <Label>Cor do Avatar</Label>
              <div className="flex gap-2 mt-2">
                {avatarColors.map((color) => (
                  <button
                    key={color}
                    className={`w-10 h-10 rounded-full ${color} border-2 border-transparent hover:border-white transition-all`}
                  />
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="tags">Etiquetas</Label>
              <div className="flex gap-2 mt-2 mb-2">
                <Input placeholder="Adicionar etiqueta..." className="flex-1" />
                <Button size="sm">Adicionar</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedContact.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                    <button className="ml-2 hover:text-destructive">×</button>
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="notes">Observações</Label>
              <Textarea
                id="notes"
                placeholder="Assistente virtual inteligente do BotEasy"
                className="mt-2"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowEditModal(false)}>
              Cancelar
            </Button>
            <Button onClick={() => setShowEditModal(false)}>Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
