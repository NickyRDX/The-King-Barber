import React from "react";

export default function Galeria() {
  return (
    <section className="py-20 bg-[#1a120b]" id="galeria">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-300 font-bold uppercase tracking-widest text-sm block mb-2">
            La atmósfera
          </span>
          <h3 className="text-white text-pretty text-3xl md:text-4xl font-semibold">
            Entra en la Realeza
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px]">
          <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-xl">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('/images/img1.png')` }}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
          </div>
          <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-xl">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
              style={{ backgroundImage: `url('/images/img2.png')` }}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
          </div>
          <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-xl">
            <div
              style={{ backgroundImage: `url('/images/img3.png')` }}
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
}
