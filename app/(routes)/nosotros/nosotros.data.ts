import { LucideIcon, Scissors, Users, Armchair } from "lucide-react";
interface NosotrosProps {
  id: number;
  icono: LucideIcon,
  titulo: string,
  descripcion: string,
}
export const NosotrosDato: NosotrosProps[] = [
  {
    id: 1,
    icono: Scissors,
    titulo: "Precisión inigualable",
    descripcion:
      "Creemos en los detalles. Desde el desvanecimiento perfecto hasta la alineación más nítida, la mediocridad no tiene cabida en nuestras sillas.",
  },
  {
    id: 2,
    icono: Armchair,
    titulo: "Ambiente y relax",
    descripcion:
      "Una barbería es un santuario. Ofrecemos un espacio donde puedes relajarte, charlar y recargar energías.",
  },
  {
    id: 3,
    icono: Users,
    titulo: "Comunidad primero",
    descripcion:
      "Somos más que un negocio; somos un centro. Construimos relaciones que perduran más que cualquier corte de pelo.",
  },
];