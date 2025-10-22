import { Plus, Pause, Play, Settings as SettingsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot } from "lucide-react";

const chatbots = [
  {
    id: 1,
    name: "Bot de Vendas",
    description: "Bot especializado em vendas e captação de leads",
    model: "Standard",
    tags: ["vendas", "leads"],
    status: "active"
  },
  {
    id: 2,
    name: "Bot de Suporte",
    description: "Atendimento automatizado 24/7",
    model: "Standard",
    tags: ["suporte", "atendimento"],
    status: "active"
  },
  {
    id: 3,
    name: "Atendimento 24/7",
    description: "Bot de atendimento automatizado 24 horas por dia",
    model: "Standard",
    tags: ["atendimento", "suporte"],
    status: "testing"
  },
  {
    id: 4,
    name: "Vendas Pro",
    description: "Bot especializado em vendas e conversão de leads",
    model: "Expert",
    tags: ["vendas", "conversao"],
    status: "active"
  },
  {
    id: 5,
    name: "Bot de Vendas",
    description: "Atendimento automatizado para vendas",
    model: "Standard",
    tags: ["vendas", "comercial"],
    status: "active"
  },
  {
    id: 6,
    name: "Bot de Suporte",
    description: "Responde dúvidas técnicas",
    model: "Expert",
    tags: ["suporte", "tecnico"],
    status: "active"
  }
];

export default function Chatbots() {
  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Chatbots</h1>
            <p className="text-muted-foreground">Gerencie seus bots de atendimento</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Criar Novo Bot
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {chatbots.map((bot) => (
            <div
              key={bot.id}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <Badge 
                  variant={bot.status === "active" ? "default" : "secondary"}
                  className={bot.status === "active" ? "bg-success" : "bg-warning"}
                >
                  {bot.status === "active" ? "Ativo" : "Testando"}
                </Badge>
              </div>

              <h3 className="font-bold text-lg mb-2">{bot.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">
                {bot.description}
              </p>

              <div className="mb-4">
                <Badge variant="outline" className="text-xs">
                  Modelo: {bot.model}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {bot.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                >
                  {bot.status === "active" ? (
                    <>
                      <Pause className="w-4 h-4 mr-2" />
                      Pausar
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Ativar
                    </>
                  )}
                </Button>
                <Button variant="outline" size="sm">
                  <SettingsIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
