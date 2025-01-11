"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  UserCog,
  BarChart3,
  Store,
  CreditCard,
  Printer,
  UserCircle,
  Cloud,
  Menu,
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: ShoppingCart, label: "Sales", href: "/sales" },
  { icon: Package, label: "Inventory", href: "/inventory" },
  { icon: Users, label: "Customers", href: "/customers" },
  { icon: UserCog, label: "Users", href: "/users" },
  { icon: BarChart3, label: "Reports", href: "/reports" },
  { icon: Store, label: "Stores", href: "/stores" },
  { icon: CreditCard, label: "Payments", href: "/payments" },
  { icon: Printer, label: "Hardware", href: "/hardware" },
  { icon: UserCircle, label: "Employees", href: "/employees" },
  { icon: Cloud, label: "Sync", href: "/sync" },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "h-screen bg-card border-r transition-all duration-300 ease-in-out flex flex-col",
        expanded ? "w-64" : "w-16"
      )}
    >
      <div className="flex items-center justify-between p-4">
        {expanded && (
          <h1 className="text-xl font-bold">
            NHtutL&apos;s<span className="text-primary"> POS</span>
          </h1>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setExpanded(!expanded)}
          className={cn("ml-auto", !expanded && "ml-0")}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      <nav className="space-y-2 p-2 flex-1">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
              pathname === item.href
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent",
              !expanded && "justify-center"
            )}
          >
            <item.icon className="h-5 w-5" />
            {expanded && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
}
