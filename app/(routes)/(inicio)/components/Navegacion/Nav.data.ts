type NavItemProps = {
  id: number;
  titulo: string;
  href: string
}
export const NavData: NavItemProps[] = [
  {
    id: 1,
    titulo: "Inicio",
    href: "/",
  },
  {
    id: 2,
    titulo: "Sobre Nosotros",
    href: "/nosotros",
  },
  {
    id: 3,
    titulo: "Servicios",
    href: "/servicios",
  },
  {
    id: 4,
    titulo: "Contacto",
    href: "/contacto",
  },
];