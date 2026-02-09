import { Flame, LucideIcon, ScissorsLineDashed, ShowerHead } from "lucide-react";

interface FeatureItemProps {
  id: number;
  titulo: string;
  icono: LucideIcon;
  descripcion: string;
}
export const FeatureData: FeatureItemProps[] = [
  {
    id: 1,
    titulo: "Cortes Expertos",
    icono: ScissorsLineDashed,
    descripcion:
      "Maestros barberos con años de experiencia dedicados a crear el look perfecto para la forma de tu rostro.",
  },
  {
    id: 2,
    titulo: "Afeitado con toalla caliente",
    icono: ShowerHead,
    descripcion:
      "Relájese con nuestro exclusivo tratamiento con toalla caliente y afeitado con navaja para lograr un acabado más apurado y suave.",
  },
  {
    id: 3,
    titulo: "Productos de primera calidad",
    icono: Flame,
    descripcion:
      "Solo utilizamos productos de cuidado personal de primera calidad que nutren tu cabello y piel, disponibles para su compra.",
  },
];
