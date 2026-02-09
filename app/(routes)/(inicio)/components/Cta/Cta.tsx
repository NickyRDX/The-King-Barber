"use client";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Cta() {
  return (
    <section className="py-24 relative">
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: `url('/images/texture.png')` }}
      />
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-white text-4xl md:text-6xl font-black tracking-tight text-pretty">
          Ready for your new look
        </h2>
        <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          No te conformes con lo común. Reserva tu cita hoy y experimenta la
          diferencia de un corte de rey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center-safe">
          <Button
            className="cursor-pointer flex items-center-safe justify-center-safe rounded-xs h-12 px-10 uppercase text-lg font-bold tracking-tight"
            variant="default"
          >
            Reserva ahora
          </Button>
          <Button
            className="cursor-pointer flex items-center-safe justify-center-safe rounded-xs h-12 px-10 uppercase text-lg font-bold tracking-tight text-slate-600"
            variant="secondary"
          >
            Contacta con nosotros
          </Button>
        </div>
      </div>
    </section>
  );
}
