import { useState } from "react";
import { ArrowLeft, Play, Save, Plus, MessageSquare, GitBranch, FileText, Zap, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const flowComponents = [
  { icon: MessageSquare, label: "Enviar Mensagem", color: "bg-blue-500" },
  { icon: GitBranch, label: "Condição", color: "bg-purple-500" },
  { icon: FileText, label: "Coletar Dados", color: "bg-yellow-500" },
  { icon: Zap, label: "Ação", color: "bg-orange-500" },
];

const flowBlocks = [
  {
    id: 1,
    type: "start",
    title: "Iniciar",
    description: "Início do fluxo",
    badge: "Início",
    icon: "🚀",
    color: "border-primary"
  },
  {
    id: 2,
    type: "message",
    title: "ds",
    description: "dsafadsf",
    badge: "Enviar Mensagem",
    icon: "💬",
    color: "border-blue-500"
  },
  {
    id: 3,
    type: "condition",
    title: "asdfads",
    description: "fafsdf",
    badge: "Condição",
    icon: "⚡",
    color: "border-yellow-500"
  }
];

export default function Fluxos() {
  const [isEditingFlow] = useState(true);

  if (!isEditingFlow) {
    return (
      <div className="h-full flex flex-col">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Fluxos</h1>
              <p className="text-muted-foreground">Crie fluxos de conversa para seus bots</p>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Novo Fluxo
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex">
      {/* Sidebar com componentes */}
      <div className="w-80 border-r border-border bg-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex-1">
            <h2 className="font-bold">Editor de Fluxos</h2>
            <p className="text-xs text-muted-foreground">Crie fluxos de conversa para seus bots</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3">Componentes do Fluxo</h3>
          <div className="space-y-2">
            {flowComponents.map((component) => {
              const Icon = component.icon;
              return (
                <button
                  key={component.label}
                  className="w-full flex items-center gap-3 p-3 rounded-lg border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 transition-colors text-left"
                >
                  <div className={`w-10 h-10 rounded-lg ${component.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">{component.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-4 bg-muted rounded-lg">
          <div className="flex items-start gap-2">
            <span className="text-lg">💡</span>
            <div>
              <p className="text-xs font-semibold mb-1">Dica:</p>
              <p className="text-xs text-muted-foreground">
                Clique nos componentes acima para adicionar blocos ao seu fluxo
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Canvas do Fluxo */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-border bg-card flex items-center justify-between">
          <h2 className="font-bold">Editor de Fluxos</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Play className="w-4 h-4 mr-2" />
              Testar Bot
            </Button>
            <Button size="sm">
              <Save className="w-4 h-4 mr-2" />
              Salvar Fluxo
            </Button>
          </div>
        </div>

        <div className="flex-1 p-8 overflow-auto bg-background">
          <div className="max-w-4xl mx-auto space-y-6">
            {flowBlocks.map((block, index) => (
              <div key={block.id}>
                <div className={`bg-card border-2 ${block.color} rounded-xl p-6 hover:shadow-lg transition-shadow`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{block.icon}</span>
                      <div>
                        <h3 className="font-bold text-lg">{block.title}</h3>
                        <p className="text-sm text-muted-foreground">{block.description}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {block.badge}
                  </Badge>
                </div>
                
                {index < flowBlocks.length - 1 && (
                  <div className="flex justify-center my-4">
                    <div className="w-0.5 h-12 bg-border"></div>
                  </div>
                )}
              </div>
            ))}

            <div className="flex justify-center">
              <Button variant="outline" className="border-dashed">
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Bloco
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
