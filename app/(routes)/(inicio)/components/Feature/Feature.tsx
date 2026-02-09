import { ArrowRightFromLineIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FeatureData } from "./Feature.data";
export default function Feature() {
  return (
    <section className="py-20 relative overflow-hidden" id="servicios">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end-safe mb-12 gap-6">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-orange-300 font-bold uppercase tracking-widest text-sm">
              Nuestra experiencia
            </h2>
            <h3 className="text-white text-pretty text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              ¿Por qué elegir al King Barber?
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed tracking-tighter text-pretty">
              Más que un corte de pelo. Es un ritual. Descubre qué nos hace los
              mejores de la ciudad.
            </p>
          </div>
          <Link href="#" className="flex items-center-safe gap-2 ">
            <ArrowRightFromLineIcon
              size={30}
              className="text-white hover:text-primary duration-300 transition-transform hover:translate-x-1"
            />
          </Link>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FeatureData.map(({ descripcion, id, titulo, icono: Icon }) => (
            <div
              key={id}
              className="group bg-[#342618] border border-[#493622] p-8 rounded-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center-safe justify-center-safe mb-6 group-hover:bg-orange-400/20 transition-colors">
                <Icon className='text-primary'/>
              </div>
              <h4 className='text-white text-xl font-bold mb-3'>{titulo}</h4>
              <p className='text-[#cbad90] leading-relaxed'>{ descripcion}</p>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}
