import { Send, Upload, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function EnvioMassa() {
  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-border">
        <h1 className="text-3xl font-bold mb-2">Envio em Massa</h1>
        <p className="text-muted-foreground">
          Envie mensagens para múltiplos contatos de uma vez
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          <Card className="p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Send className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Campanha de Envio em Massa</h2>
              <p className="text-muted-foreground">
                Crie campanhas e envie mensagens personalizadas para seus contatos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="p-6 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold mb-1">0</p>
                <p className="text-sm text-muted-foreground">Contatos selecionados</p>
              </Card>
              <Card className="p-6 text-center">
                <Send className="w-8 h-8 text-success mx-auto mb-3" />
                <p className="text-2xl font-bold mb-1">0</p>
                <p className="text-sm text-muted-foreground">Mensagens enviadas</p>
              </Card>
              <Card className="p-6 text-center">
                <Upload className="w-8 h-8 text-warning mx-auto mb-3" />
                <p className="text-2xl font-bold mb-1">0</p>
                <p className="text-sm text-muted-foreground">Campanhas ativas</p>
              </Card>
            </div>

            <div className="space-y-3">
              <Button className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Criar Nova Campanha
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <Upload className="w-4 h-4 mr-2" />
                Importar Lista de Contatos
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
