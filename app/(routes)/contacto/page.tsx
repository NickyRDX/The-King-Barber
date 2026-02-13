"use client";

import Navegacion from "../(inicio)/components/Navegacion/Navegacion";
import Footer from "../(inicio)/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Twitter,
  Instagram,
  Facebook,
  User,
  Scissors,
  SendHorizonal,
  ExternalLink,
} from "lucide-react";

export default function ContactoPage() {
  return (
    <>
      <Navegacion />

      <main className="min-h-screen">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Layout principal: 2 columnas en desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Columna Izquierda: Texto + Formulario */}
            <div>
              {/* Encabezado */}
              <div className="mb-8 md:mb-10">
                <p className="text-orange-400 uppercase tracking-widest text-sm font-semibold mb-3">
                  Get In Touch
                </p>
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
                  Book Your Throne
                </h1>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg">
                  Whether you need a fresh fade or a royal shave, our chairs are
                  waiting. Send us a message to schedule your next appointment.
                </p>
              </div>

              {/* Formulario */}
              <Card className="bg-[#1a1310] border-[#493622]/50 shadow-lg">
                <CardContent className="space-y-5">
                  {/* Fila 1: Nombre y Teléfono */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="fullName"
                        className="text-slate-300 text-sm"
                      >
                        Nombre & Apellido
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
                        <Input
                          id="fullName"
                          placeholder="John Doe"
                          className="pl-10 bg-[#231a10] border-[#493622]/60 text-white placeholder:text-slate-600 h-11 focus-visible:border-orange-400/50 focus-visible:ring-orange-400/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-300 text-sm">
                        Numero de Telefono
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          className="pl-10 bg-[#231a10] border-[#493622]/60 text-white placeholder:text-slate-600 h-11 focus-visible:border-orange-400/50 focus-visible:ring-orange-400/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Fila 2: Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-300 text-sm">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="king@example.com"
                        className="pl-10 bg-[#231a10] border-[#493622]/60 text-white placeholder:text-slate-600 h-11 focus-visible:border-orange-400/50 focus-visible:ring-orange-400/20"
                      />
                    </div>
                  </div>

                  {/* Fila 3: Servicio */}
                  <div className="space-y-2">
                    <Label className="text-slate-300 text-sm">
                      Elige Nuestro Servicio
                    </Label>
                    <div className="relative">
                      <Scissors className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-500 z-10 pointer-events-none" />
                      <Select>
                        <SelectTrigger className="w-full pl-10 bg-[#231a10] border-[#493622]/60 text-white h-11 focus-visible:border-orange-400/50 focus-visible:ring-orange-400/20 [&>span]:text-slate-400">
                          <SelectValue placeholder="Signature Haircut" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#231a10] border-[#493622] text-white">
                          <SelectItem value="signature-haircut">
                            Corte de pelo exclusivo
                          </SelectItem>
                          <SelectItem value="royal-shave">
                            Afeitado real
                          </SelectItem>
                          <SelectItem value="beard-trim">Beard Trim</SelectItem>
                          <SelectItem value="hair-coloring">
                            Coloración del cabello
                          </SelectItem>
                          <SelectItem value="full-package">
                            Paquete completo
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Fila 4: Mensaje */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-300 text-sm">
                      Comentanos:
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Any special requests or preferred times?"
                      rows={4}
                      className="bg-[#231a10] border-[#493622]/60 text-white placeholder:text-slate-600 min-h-[120px] resize-y focus-visible:border-orange-400/50 focus-visible:ring-orange-400/20"
                    />
                  </div>

                  {/* Botón enviar */}
                  <Button
                    type="submit"
                    className="w-full h-12 rounded-lg text-base font-bold uppercase tracking-wider cursor-pointer gap-2"
                  >
                    Enviar Mensaje
                    <SendHorizonal className="size-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Columna Derecha: Tarjetas de info + Mapa */}
            <div className="space-y-6">
              {/* Grid de tarjetas de información */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Tarjeta: Visítanos */}
                <Card className="bg-[#1a1310] border-[#493622]/50 hover:border-orange-400/30 transition-colors duration-300">
                  <CardContent className="pt-1">
                    <div className="w-10 h-10 rounded-lg bg-orange-400/10 flex items-center justify-center mb-4">
                      <MapPin className="size-5 text-orange-400" />
                    </div>
                    <h3 className="text-white font-bold text-base mb-2">
                      Visita Nuestra Local
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Ramirez de Velazco 3057
                      <br />
                      Argentina, Tucumán, San Miguel de Tucumán
                    </p>
                  </CardContent>
                </Card>

                {/* Tarjeta: Llámanos */}
                <Card className="bg-[#1a1310] border-[#493622]/50 hover:border-orange-400/30 transition-colors duration-300">
                  <CardContent className="pt-1">
                    <div className="w-10 h-10 rounded-lg bg-orange-400/10 flex items-center justify-center mb-4">
                      <Phone className="size-5 text-orange-400" />
                    </div>
                    <h3 className="text-white font-bold text-base mb-2">
                      Telefono
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      +1 (555) 019-2834
                      <br />
                      Lun-Sab: 9am - 8pm
                    </p>
                  </CardContent>
                </Card>

                {/* Tarjeta: Email */}
                <Card className="bg-[#1a1310] border-[#493622]/50 hover:border-orange-400/30 transition-colors duration-300">
                  <CardContent className="pt-1">
                    <div className="w-10 h-10 rounded-lg bg-orange-400/10 flex items-center justify-center mb-4">
                      <Mail className="size-5 text-orange-400" />
                    </div>
                    <h3 className="text-white font-bold text-base mb-2">
                      Nuestro Email
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      contact@kingbarber.com
                      <br />
                      Response within 24h
                    </p>
                  </CardContent>
                </Card>

                {/* Tarjeta: Redes Sociales */}
                <Card className="bg-[#1a1310] border-[#493622]/50 hover:border-orange-400/30 transition-colors duration-300">
                  <CardContent className="pt-1">
                    <h3 className="text-white font-bold text-base mb-4">
                      Sigue al Rey
                    </h3>
                    <div className="flex items-center gap-3">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-[#231a10] border border-[#493622]/50 flex items-center justify-center text-slate-400 hover:bg-orange-400 hover:text-white hover:border-orange-400 transition-all duration-300"
                        aria-label="Twitter"
                      >
                        <Twitter className="size-4" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-[#231a10] border border-[#493622]/50 flex items-center justify-center text-slate-400 hover:bg-orange-400 hover:text-white hover:border-orange-400 transition-all duration-300"
                        aria-label="Instagram"
                      >
                        <Instagram className="size-4" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-[#231a10] border border-[#493622]/50 flex items-center justify-center text-slate-400 hover:bg-orange-400 hover:text-white hover:border-orange-400 transition-all duration-300"
                        aria-label="Facebook"
                      >
                        <Facebook className="size-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sección del Mapa */}
              <Card className="bg-[#1a1310] border-[#493622]/50 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative w-full h-[250px] sm:h-[300px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.500492463349!2d-65.23902598758534!3d-26.79218797662206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225da7a375678f%3A0x1cb96ed7f0774c4c!2sTHE%20KING%20BARBER!5e0!3m2!1ses-419!2sar!4v1771016210897!5m2!1ses-419!2sar"
                      className="w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="The King Barber Location"
                    />
                  </div>
                  <div className="px-4 py-3">
                    <a
                      href="https://www.google.com/maps/place/New+York,+NY+10012"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-400 hover:text-orange-400 transition-colors text-sm"
                    >
                      Abrir Google Maps
                      <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
