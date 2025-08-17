import { useState } from "react";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className = "" }: SidebarProps) => {
  const [activeItem, setActiveItem] = useState("grid");

  const navItems = [
    { id: "grid", icon: "📱", label: "Dashboard" },
    { id: "receipt", icon: "🧾", label: "Orders" },
    { id: "map-pin", icon: "📍", label: "Location" },
    { id: "users", icon: "👥", label: "Users" },
    { id: "clock", icon: "🕐", label: "History" },
  ];

  return (
    <aside id="sidebar" className={`bg-sidebar text-sidebar-foreground ${className}`}>
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-4 border-b border-sidebar-foreground/10">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">R</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4">
          <ul className="space-y-2 px-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveItem(item.id)}
                  className={`w-full p-3 rounded-lg transition-colors flex items-center justify-center text-2xl hover:bg-sidebar-foreground/10 ${
                    activeItem === item.id ? "bg-sidebar-active text-primary-foreground" : ""
                  }`}
                  aria-label={item.label}
                  data-testid={`nav-${item.id}`}
                >
                  {item.icon}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;