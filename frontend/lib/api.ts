const API_URL = "http://localhost:3001";

export const apiPost = async (url: string, data: unknown) => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Hubo un error en la solicitud");
    }

    return await response.json();
  } catch (error) {
    console.error("Error en la petición:", error);
    throw error;
  }
};

export const registerUser = (name: string, email: string, password: string) => {
  return apiPost("/register", { name, email, password });
};

export const loginUser = (email: string, password: string) => {
  return apiPost("/login", { email, password });
};
