"use client"
import React from "react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronLeft } from "lucide-react";
import { SidebarData } from "./Sidebar.data";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Sidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="cursor-pointer">
          <ChevronLeft className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#231a10] min-h-full">
        <SheetHeader>
          <SheetTitle className="text-3xl text-slate-200 transition-all duration-500 hover:text-orange-400 hover:underline cursor-pointer mt-6">
            The King Barber
          </SheetTitle>
          <SheetDescription className="text-sm tracking-tight leading-relaxed mt-1.5 text-slate-200">
            Bienvenido a The King Barber, tu barbería favorita en la ciudad SMT.
          </SheetDescription>
        </SheetHeader>
        <section className="w-full max-h-full grid grid-cols-1 space-y-8 px-4">
          {SidebarData.map(({ href, icon: Icon, id, titulo }) => (
            <Link
              className={`text-slate-100 flex text-xl items-center gap-3 leading-0 p-4 rounded-md ${isActive(href) ? 'bg-orange-400/30': 'hover:bg-orange-500/20'}`}
              key={id}
              href={href}
            >
              <Icon size={26} className="text-orange-400" />
              {titulo}
            </Link>
          ))}
        </section>
      </SheetContent>
    </Sheet>
  );
}
