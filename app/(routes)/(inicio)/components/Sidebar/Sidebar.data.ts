import { Headset, Home, LucideIcon, User, UserRoundCog } from "lucide-react";
interface SidebarItemProps{
  id: number;
  titulo: string;
  href: string;
  icon: LucideIcon
}
export const SidebarData: SidebarItemProps[] = [
  {
    id: 1,
    titulo: "Inicio",
    href: "/",
    icon: Home,
  },
  {
    id: 2,
    titulo: "Servicios",
    href: "/servicios",
    icon: UserRoundCog,
  },
  {
    id: 3,
    titulo: "Nosotros",
    href: "/nosotros",
    icon: User,
  },
  {
    id: 4,
    titulo: "Contacto",
    href: "/contacto",
    icon: Headset,
  },
];
