"use client";
import React from "react";
import Navegacion from "../(inicio)/components/Navegacion/Navegacion";
import Footer from "../(inicio)/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

export default function ReservarPage() {
  return (
    <>
      <Navegacion />
      <main className="px-4 grow py-8 md:px-10 lg:px-40 flex justify-center">
        <section className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* texto header */}
            <div className='flex flex-col gap-2'>
              <h1 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
                Asegure su asiento
              </h1>
              <p className="text-slate-300 text-base font-normal">
                Seleccione una fecha y hora para su próximo corte fresco.
              </p>
            </div>
            {/* Calendario */}
            <div className="bg-[#2a1f14] border border-[#3d2e1e] rounded-2xl p-4 sm:p-6 md:p-8 w-full">
              <Calendar mode="single" className="barber-calendar" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
