import React from 'react'
import Logo from '../Logo/Logo'
import Link from 'next/link';
import { LocationEdit, PhoneCall } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#150f09] border-t border-[#493622] py-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center-safe gap-2 mb-6">
              <Logo />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Refinando a los caballeros de la ciudad desde 2024. Recuperamos la
              sensación clásica de barbería con un toque moderno.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold uppercase mb-5 tracking-wider">
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
            <h3 className="text-white font-bold uppercase mb-6 tracking-wider">
              Hours
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li className="flex justify-between">
                <span>Lun - Vie</span>{" "}
                <span className="text-white">9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sabados</span>{" "}
                <span className="text-white">10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>{" "}
                <span className="text-orange-300">Closed</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold uppercase mb-6 tracking-wider">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                  <LocationEdit/>
                </span>
                <span>
                  123 Royal Street, King's Cross
                  <br />
                  London, UK
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">
                  <PhoneCall/>
                </span>
                <span>+44 (0) 20 1234 5678</span>
              </li>
              <li className="flex gap-4 mt-2">
                <a
                  className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors"
                  href="#"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors"
                  href="#"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.53c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}
