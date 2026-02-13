import React from 'react'
import Logo from '../Logo/Logo'
import Link from 'next/link';
import { Facebook, Instagram, LocationEdit, PhoneCall } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#150f09] border-t border-[#493622] py-12">
      <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center-safe mb-6">
              <Logo />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Refinando a los caballeros de la ciudad desde 2024. Recuperamos la
              sensación clásica de barbería con un toque moderno.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold uppercase mb-5 tracking-wider decoration-1 underline-offset-2 underline hover:italic transition-transform duration-300 hover:text-orange-400">
              Enlaces Rapidos
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  className="text-slate-300 hover:text-primary transition-colors text-sm"
                  href={`/servicios`}
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-300 hover:text-primary transition-colors text-sm"
                  href={`/nosotros`}
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-300 hover:text-primary transition-colors text-sm"
                  href={`#`}
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-300 hover:text-primary transition-colors text-sm"
                  href={`#`}
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold uppercase mb-6 tracking-wider underline decoration-1 underline-offset-2 hover:italic transition-transform duration-300 hover:text-orange-400">
              Horarios
            </h3>
            <ul className="flex flex-col space-y-4 text-sm text-gray-500">
              <li className="flex justify-between">
                <span className="mr-2">Lun - Vie</span>{" "}
                <span className="text-white">9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="mr-2">Sabados</span>{" "}
                <span className="text-white">10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="mr-0">Domingo</span>{" "}
                <span className="text-orange-300">Closed</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold uppercase mb-6 tracking-wider decoration-1 underline-offset-2 underline hover:italic transition-transform duration-300 hover:text-orange-400">
              Contactos
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                  <LocationEdit />
                </span>
                <span>
                  Ramirez de Velazco 3057, T4001
                  <br />
                  San Miguel de Tucumán, Tucumán
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">
                  <PhoneCall />
                </span>
                <span>+44 (0) 20 1234 5678</span>
              </li>
              <li className="flex gap-4 mt-2">
                <a
                  className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors"
                  href="#"
                >
                  <Facebook />
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors"
                  href="#"
                >
                  <Instagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}
