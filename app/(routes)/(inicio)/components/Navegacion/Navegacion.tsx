"use client";
import React from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";
import { NavData } from "./Nav.data";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Sidebar from "../Sidebar/Sidebar";
import { usePathname } from "next/navigation";
export default function Navegacion() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  return (
    <nav className="max-w-full max-h-full px-4 relative mb-20">
      <section className="fixed top-0 left-0 right-0 z-50 bg-[#231a10]/90 backdrop-blur-sm border-b border-[#493622]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div>
                <Logo />
              </div>
            </div>
            <div className="hidden lg:flex items-center-safe gap-8">
              {NavData.map(({ id, titulo, href }) => (
                <Link
                  className={` whitespace-nowrap tracking-tighter hover:text-orange-400 transition-colors duration-300 uppercase text-sm font-medium ${
                    isActive(href)
                      ? "underline text-orange-400 decoration-1 underline-offset-2"
                      : "text-slate-300"
                  }`}
                  href={href}
                  key={id}
                >
                  {titulo}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Button className="hidden md:flex cursor-pointer items-center justify-center-safe rounded-full h-10 px-6 uppercase">
                reservar ahora
              </Button>
              <div className="md:hidden ">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
}
