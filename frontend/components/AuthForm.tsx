"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface AuthFormProps {
  type: "register" | "login";
}

export default function AuthForm({ type }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const body = type === "register" ? { name, email, password } : { email, password };
    
    try {
      const res = await fetch(`http://localhost:4000/api/${type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error("Error en la autenticación");
      }

      const data = await res.json();
      localStorage.setItem("token", data.token);
      router.push("/");
    } catch (err) {
      setError("Error en el proceso, verifica los datos.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center">{type === "register" ? "Registro" : "Iniciar Sesión"}</h2>
      
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        {type === "register" && (
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        )}
        
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          {type === "register" ? "Registrarse" : "Iniciar Sesión"}
        </button>
      </form>
    </div>
  );
}
