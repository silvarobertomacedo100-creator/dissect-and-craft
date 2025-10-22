import { useState } from "react";
import { Plus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const steps = ["Perfil", "Comportamento", "Intenções", "Configuração"];

export default function Agentes() {
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Agentes de IA</h1>
            <p className="text-muted-foreground">
              Crie e configure agentes inteligentes para automatizar atendimentos
            </p>
          </div>
          <Button onClick={() => setShowModal(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Novo Agente de IA
          </Button>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Nenhum agente criado ainda</h2>
          <p className="text-muted-foreground mb-6">
            Crie seu primeiro agente de IA para começar a automatizar seus atendimentos
          </p>
          <Button onClick={() => setShowModal(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Criar Primeiro Agente
          </Button>
        </div>
      </div>

      {/* Modal de Criação de Agente */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Novo Agente de IA</DialogTitle>
          </DialogHeader>

          {/* Steps */}
          <div className="flex justify-between mb-6">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className={`flex items-center gap-2 ${
                    index === currentStep
                      ? "text-primary font-semibold"
                      : index < currentStep
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  <span className="text-sm">
                    {index + 1}. {step}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-8 h-px bg-border mx-2" />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="space-y-4 py-4">
            {currentStep === 0 && (
              <>
                <div>
                  <Label htmlFor="agent-name">Nome do Agente *</Label>
                  <Input
                    id="agent-name"
                    placeholder="Ex: Assistente de Vendas"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="agent-type">Tipo do Agente</Label>
                  <Select defaultValue="standard">
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}

            {currentStep === 1 && (
              <>
                <div>
                  <Label htmlFor="prompt">Pergunta (Prompt) *</Label>
                  <Textarea
                    id="prompt"
                    placeholder="Ex: Qual é o nome da funcionária?"
                    className="mt-2"
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="response">Resposta *</Label>
                  <Textarea
                    id="response"
                    placeholder="Ex: O nome da funcionária é {{resposta}} do setor de {{setor}}"
                    className="mt-2"
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="example">Exemplo de conversa ideal</Label>
                  <Textarea
                    id="example"
                    placeholder="Descreva como seria uma conversa ideal..."
                    className="mt-2"
                    rows={4}
                  />
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <div>
                  <Label>Intenções</Label>
                  <div className="mt-2 p-4 border border-dashed border-border rounded-lg text-center">
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Adicionar Intenção
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      Nenhuma intenção adicionada
                    </p>
                  </div>
                </div>
                <div>
                  <Label>Estágios Obrigatórios</Label>
                  <div className="mt-2">
                    <Button variant="outline" size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Adicionar Estágio
                    </Button>
                  </div>
                </div>
              </>
            )}

            {currentStep === 3 && (
              <div className="text-center py-8">
                <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Configuração Final</h3>
                <p className="text-muted-foreground">
                  Revise as configurações e finalize a criação do seu agente
                </p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between pt-4 border-t border-border">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
            >
              Voltar
            </Button>
            <Button
              onClick={() => {
                if (currentStep < steps.length - 1) {
                  setCurrentStep(currentStep + 1);
                } else {
                  setShowModal(false);
                  setCurrentStep(0);
                }
              }}
            >
              {currentStep === steps.length - 1 ? "Finalizar" : "Próximo"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
