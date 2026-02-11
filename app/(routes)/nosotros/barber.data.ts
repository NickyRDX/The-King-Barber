import jefe from "@/public/images/Jefe.png";
import Especialista from "@/public/images/Especialista.png";
import Estilista from "@/public/images/Estilista.png";
import Experto from "@/public/images/Experto.png";
type BarberProps = {
  id: Number;
  nombre: string;
  cargo: string;
  imagen: string;
};
export const BarberData: BarberProps[] = [
  {
    id: 1,
    nombre: "James Sterling",
    cargo: "Dueño & Maestro Barbero",
    imagen: "/images/Jefe.png",
  },
  {
    id: 2,
    nombre: "Marcus Chen",
    cargo: "Especialista en Desvanecimiento",
    imagen: "/images/Especialista.png",
  },
  {
    id: 3,
    nombre: "Sarah Jenkins",
    cargo: "Estilista & Colorista",
    imagen: "/images/Estilista.png",
  },
  {
    id: 4,
    nombre: "Marcus Chen",
    cargo: "Experto en Barba",
    imagen: "/images/Experto.png",
  },
];
