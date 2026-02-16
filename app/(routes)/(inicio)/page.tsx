"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navegacion from "./components/Navegacion/Navegacion";
import Hero from "./components/Hero/Hero";
import Feature from "./components/Feature/Feature";
import Galeria from "./components/Galeria/Galeria";
import Cta from "./components/Cta/Cta";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navegacion />
      <Hero />
      <Feature />
      <Galeria />
      <Cta />
      <Footer />
    </>
  );
}
