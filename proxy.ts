import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest, NextResponse } from "next/server";

// Rutas que requieren autenticación
const protectedRoutes = ["/reservar"];

function isProtectedRoute(pathname: string): boolean {
  return protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
}

export default withAuth(
  async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Si la ruta no es protegida, dejar pasar sin intervenir
    if (!isProtectedRoute(pathname)) {
      return NextResponse.next();
    }

    // Si llega aquí, el usuario está autenticado (withAuth ya lo validó)
    return NextResponse.next();
  },
  {
    isReturnToCurrentPage: true,
    publicPaths: [
      "/",
      "/nosotros",
      "/servicios",
      "/contacto",
      "/api/auth/(.*)",
    ],
  }
);

export const config = {
  matcher: [
    /*
     * Ejecuta el middleware en todas las rutas excepto:
     * - _next (archivos internos de Next.js)
     * - Archivos estáticos (imágenes, fuentes, etc.)
     * - favicon.ico
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?|ttf)).*)",
  ],
};
