import { MessageSquare, Users, Bot, GitBranch, Sparkles, Send, BarChart3, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const menuItems = [
  { icon: MessageSquare, label: "Conversas", path: "/" },
  { icon: Users, label: "Contatos", path: "/contatos" },
  { icon: Bot, label: "Chatbots", path: "/chatbots" },
  { icon: GitBranch, label: "Fluxos", path: "/fluxos" },
  { icon: Sparkles, label: "Agentes de IA", path: "/agentes" },
  { icon: Send, label: "Envio em Massa", path: "/envio" },
  { icon: BarChart3, label: "Relatórios", path: "/relatorios" },
  { icon: Settings, label: "Configurações", path: "/configuracoes" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
          <Bot className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-sidebar-foreground">BotEasy</h1>
          <p className="text-xs text-muted-foreground">Automação inteligente</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent"
              )}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 bg-primary">
            <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
              S
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">
              souza daniel silva
            </p>
            <p className="text-xs text-muted-foreground truncate">
              souzadaniel208@gmail.com
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
