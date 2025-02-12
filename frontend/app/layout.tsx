"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const auth = isAuthenticated();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/auth/login");
  };

  return (
    <html lang="es">
      <head>
        <title>Auth System</title>
      </head>
      <body className="bg-gray-100">
        <nav className="flex justify-between p-4 bg-gray-200">
          <Link href="/" className="font-bold">Home</Link>
          <div>
            {auth ? (
              <button onClick={handleLogout} className="text-red-500">Cerrar sesión</button>
            ) : (
              <>
                <Link href="/auth/login" className="mr-4">Login</Link>
                <Link href="/auth/register">Registro</Link>
              </>
            )}
          </div>
        </nav>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
