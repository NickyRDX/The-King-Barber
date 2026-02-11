"use client";
import Navegacion from "../(inicio)/components/Navegacion/Navegacion";
import Footer from "../(inicio)/components/Footer/Footer";
import { ArrowRight, History } from "lucide-react";
import { useEffect, useState } from "react";
import barberoEnAccion from "@/public/images/previewAction.png";
import Image from "next/image";
import { NosotrosDato } from "./nosotros.data";
import { Button } from "@/components/ui/button";
import { BarberData } from "./barber.data";
export default function NosotrosPage() {
  const [realizados, setRealizados] = useState<number>(0);
  const [barber, setBarber] = useState<number>(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setRealizados((prev) => {
        // "prev" es el valor más actual del contador "realizados" justo cuando el intervalo corre.
        // Si todavía es menor que 10, sube en 1. Si ya es 10, se queda igual.
        if (prev < 10) {
          return prev + 1;
        }
        return prev;
      });
    }, 1000);
    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(intervalo);
  }, []);
  useEffect(() => {
    const intervalo2 = setInterval(() => {
      setBarber((prev2) => {
        if (prev2 < 8) {
          return prev2 + 1;
        }
        return prev2;
      });
    }, 1200);
    return () => clearInterval(intervalo2);
  }, []);
  return (
    <>
      <Navegacion />
      <main className="grow">
        <section className="relative h-[500px] flex items-center-safe justify-center-safe py-20 px-4">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: "url('/images/heroImagen2.png')" }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-orange-700/20 to-transparent z-10" />
          <div className="relative z-20 flex flex-col items-center-safe text-center gap-6 max-w-3xl mx-auto animate-fade-in-up">
            <span className="text-pretty text-primary font-bold tracking-[0.2em] uppercase text-sm">
              SMT.2026
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-2">
              Nuestro <span className="text-primary">Legado</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
              Más que un simple corte. Redefinimos la experiencia del cuidado
              personal con tradición, precisión y estilo moderno.
            </p>
            <div className="w-24 h-1 bg-primary rounded-full mt-3" />
          </div>
        </section>
        <section className="py-20 px-6 md:px-16 lg:px-40">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center-safe">
            <div className="flex flex-col gap-8 order-2 lg:order-1">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-orange-400 font-bold uppercase tracking-wider text-xs">
                  <History />
                  <span>El comienzo</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                  Todo empezó con una sola silla
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed">
                  Fundada en 2015 por el maestro barbero James "The King"
                  Sterling, nuestra peluquería comenzó como un modesto local en
                  un garaje. La visión era simple: recuperar el arte perdido del
                  corte de pelo para caballeros, integrándolo con técnicas
                  contemporáneas.
                </p>
                <p className="text-slate-500 text-lg leading-relaxed">
                  Hoy, somos un colectivo de artesanos apasionados. No solo
                  cortamos el cabello; cultivamos la confianza. Cada corte está
                  calculado, cada desvanecimiento es un gradiente de perfección,
                  y cada cliente se va sintiéndose como un rey.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-4">
                <div className="flex flex-col gap-2 p-4 rounded-lg bg-[#342618]/50 border border-[#493622]">
                  <span className="text-4xl font-black text-orange-500">
                    {realizados}k+
                  </span>
                  <span className="text-sm text-slate-400 uppercase tracking-wider font-semibold">
                    Cortes Realizados
                  </span>
                </div>
                <div className="flex flex-col gap-2 p-4 rounded-lg bg-[#342618]/50 border border-[#493622]">
                  <span className="text-4xl font-black text-orange-500">
                    {barber}
                  </span>
                  <span className="text-sm text-slate-400 uppercase tracking-wider font-semibold">
                    Maestros Barberos
                  </span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 group relative">
              <div className="absolute -inset-4 bg-primary/30 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={barberoEnAccion}
                  alt="Barbero en acción"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-red-700/80 to-transparent p-6">
                  <p className="text-white font-medium italic">
                    "La precisión no es un acto, es un hábito."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 border-y border-[#493622] bg-[#342618]">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary/80">
                Refinando al caballero moderno
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Nuestra filosofía se basa en tres pilares que definen cada
                interacción dentro de nuestras paredes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {NosotrosDato.map(({ titulo, id, descripcion, icono: Icon }) => (
                <div
                  className="group p-8 rounded-lg bg-[#231a10] border border-[#493622] hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
                  key={id}
                >
                  <div className="size-14 rounded-full bg-[#342618] flex items-center-safe justify-center-safe mb-5 group-hover:bg-orange-400/20 transition-colors duration-500 text-orange-500">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {titulo}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-24 px-6 md:px-16 lg:px-40">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end-safe mb-12 gap-6">
              <div>
                <span className="text-primary font-bold tracking-wider text-sm mb-2 block">
                  Nuestro Talento
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-200">
                  Conoce a los reyes
                </h2>
              </div>
              <Button className="flex items-center-safe gap-2 text-white transition-colors font-semibold group cursor-pointer">
                ver todo el equipo
                <ArrowRight size={40} />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {BarberData.map(({ id, nombre, cargo, imagen }) => (
                <div
                  key={id.toString()}
                  className="group relative overflow-hidden rounded-md aspect-3/4"
                >
                  <Image
                    src={imagen}
                    alt={nombre}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-500 group-hover:scale-110"
                    width={600}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {nombre}
                    </h3>
                    <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
                      {cargo}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
