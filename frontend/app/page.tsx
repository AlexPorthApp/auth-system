"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

export default function HomePage() {
  const router = useRouter();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/auth/login");
    } else {
      setAuth(true);
    }
  }, []);

  if (!auth) return <p>Cargando...</p>;

  return <h1 className="text-3xl font-bold text-center">¡Bienvenido al Dashboard!</h1>;
}
