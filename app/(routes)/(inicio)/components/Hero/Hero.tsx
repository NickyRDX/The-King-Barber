"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
export default function Hero() {
  return (
    <main className="grow">
      <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/heroImagen.png')" }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center-safe">
          <div className="flex flex-col gap-6 max-w-2xl animate-fade-in-up">
            <div className="flex items-center-safe gap-2 text-primary font-bold uppercase tracking-widest text-sm">
              <span className="w-8 h-[2px] bg-[#f48c25] mb-3">Est. 2026</span>
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
              Refina tu estilo.
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-orange-300">
                Corona tu look.
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-lg">
              Experimente un trato real en The King Barber. Donde la tradición
              se fusiona con la precisión moderna en un ambiente de lujo
              refinado.
            </p>
            <div className="flex flex-col w-full cursor-pointer sm:flex-row gap-4 mt-4">
              <Button
                asChild
                className="flex items-center-safe justify-center-safe rounded-lg h-12 px-8 bg-primary hover:text-black transition-all text-[#231a10] text-base font-black uppercase tracking-wider shadow-xl"
              >
                <Link href={`#`}>Reservar Ahora!</Link>
              </Button>

              <Button
                asChild
                variant="ghost"
                className="flex items-center justify-center rounded-lg h-12 px-8 bg-transparent border border-white/20 transition-all text-white text-base font-medium uppercase tracking-wider cursor-pointer"
              >
                <Link href={`#`}>Ver Servicios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
