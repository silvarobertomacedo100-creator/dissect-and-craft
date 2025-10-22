import { useState } from "react";
import { Download, MessageSquare, Users, Clock, Timer, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const statsData = [
  { icon: MessageSquare, label: "Total de conversas", value: "6", trend: "+12% ao mês", color: "bg-blue-500" },
  { icon: Users, label: "Conversas em IA total", value: "0", trend: "0% de total", color: "bg-success" },
  { icon: Clock, label: "Tempo de resposta", value: "00:00:00", trend: "Tempo médio", color: "bg-primary" },
  { icon: Timer, label: "Tempo de atendimentos", value: "00:00:00", trend: "Tempo de atendimentos", color: "bg-warning" },
];

const barChartData = [
  { date: "11/01", agente: 10, bot: 5 },
  { date: "12/01", agente: 15, bot: 12 },
  { date: "13/01", agente: 20, bot: 18 },
  { date: "14/01", agente: 30, bot: 25 },
  { date: "15/01", agente: 45, bot: 40 },
  { date: "16/01", agente: 40, bot: 35 },
  { date: "17/01", agente: 50, bot: 45 },
];

const lineChartData = [
  { date: "11/01", linha1: 10, linha2: 12 },
  { date: "12/01", linha1: 15, linha2: 18 },
  { date: "13/01", linha1: 20, linha2: 25 },
  { date: "14/01", linha1: 25, linha2: 30 },
  { date: "15/01", linha1: 40, linha2: 45 },
  { date: "16/01", linha1: 35, linha2: 33 },
  { date: "17/01", linha1: 48, linha2: 52 },
];

const pieChartData = [
  { name: "Canal 1", value: 450, color: "#10b981" },
  { name: "Canal 2", value: 120, color: "#3b82f6" },
];

export default function Relatorios() {
  const [activeTab, setActiveTab] = useState("geral");

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Relatórios</h1>
            <p className="text-muted-foreground">
              Monitore o desempenho do seu atendimento em tempo real
            </p>
          </div>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
          <div className="px-6 pt-4">
            <TabsList>
              <TabsTrigger value="geral">Geral</TabsTrigger>
              <TabsTrigger value="atendimento">Atendimento</TabsTrigger>
              <TabsTrigger value="avaliacoes">Avaliações</TabsTrigger>
              <TabsTrigger value="chatbots">Chatbots</TabsTrigger>
              <TabsTrigger value="agentes">Agentes de IA</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="geral" className="p-6 mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {statsData.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs text-success">{stat.trend}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </Card>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4">Conversas abertas por atendente</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={barChartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="date" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                      labelStyle={{ color: '#f1f5f9' }}
                    />
                    <Bar dataKey="agente" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="bot" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4">Conversas por canal</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center gap-6 mt-4">
                  {pieChartData.map((entry, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: entry.color }} />
                      <span className="text-sm">{entry.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">Conversas iniciadas por dia</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="date" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                    labelStyle={{ color: '#f1f5f9' }}
                  />
                  <Line type="monotone" dataKey="linha1" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="linha2" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="atendimento" className="p-6 mt-0">
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <Clock className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Relatórios em tempo real</h3>
                <p className="text-muted-foreground">
                  Acompanhe as métricas de atendimento em tempo real
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="avaliacoes" className="p-6 mt-0">
            <div className="flex items-center justify-center h-96">
              <Card className="p-8 max-w-md">
                <div className="text-center">
                  <Star className="w-16 h-16 text-warning mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Avaliações dos Clientes</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Veja como seus clientes classificam seu serviço
                  </p>
                  <div className="flex justify-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-6 h-6 fill-warning text-warning" />
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-6 mt-6">
                    <div>
                      <p className="text-3xl font-bold text-warning">4.8</p>
                      <p className="text-xs text-muted-foreground">Média geral</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">127</p>
                      <p className="text-xs text-muted-foreground">Total de avaliações</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-success">94%</p>
                      <p className="text-xs text-muted-foreground">Satisfação</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="chatbots" className="p-6 mt-0">
            <div className="flex items-center justify-center h-96">
              <Card className="p-8 max-w-md">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Performance dos Chatbots</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Analise o desempenho dos seus bots de atendimento
                  </p>
                  <div className="grid grid-cols-3 gap-6 mt-6">
                    <div>
                      <p className="text-3xl font-bold text-primary">0</p>
                      <p className="text-xs text-muted-foreground">Bots ativos</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-success">86%</p>
                      <p className="text-xs text-muted-foreground">Taxa de resolução</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-500">1,234</p>
                      <p className="text-xs text-muted-foreground">Atendimentos</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="agentes" className="p-6 mt-0">
            <div className="flex items-center justify-center h-96">
              <Card className="p-8 max-w-md">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Métricas do Agentes de IA</h3>
                  <p className="text-sm text-muted-foreground">
                    Monitore o desempenho dos seus agentes de IA
                  </p>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
