import React from "react";
import Link from "next/link";
import { Scissors } from "lucide-react";
export default function Logo() {
  return (
    <Link href={`/`} className="flex gap-x-2 items-center mr-4">
      <Scissors className="text-orange-400" size={28} />
      <h1 className="uppercase font-bold text-xl whitespace-nowrap tracking-tighter text-white">
        the king barber
      </h1>
    </Link>
  );
}
