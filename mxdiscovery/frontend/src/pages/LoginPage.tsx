// Importar los módulos y componentes necesarios de React y otras librerías
import { Link, useNavigate, Navigate } from "react-router-dom";
import { loginRequest } from "../api/users";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthStore } from "../store/auth";
import Logo from "../assets/logo.png";

// Definir el componente funcional LoginPage
const LoginPage = () => {
  // Utilizar el hook useNavigate para la navegación
  const navigate = useNavigate();

  // Obtener el estado de autenticación y la función para establecer el token desde el store de autenticación
  const { isAuth } = useAuthStore();
  const setToken = useAuthStore((state) => state.setToken);

  // Estado local para almacenar el correo electrónico y la contraseña del usuario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Utilizar el hook useMutation para gestionar la lógica de la mutación de inicio de sesión
  const loginMutation = useMutation({
    mutationFn: () => loginRequest(email, password),
    onSuccess: (response) => {
      // En caso de éxito, establecer el token y redirigir a la página principal
      setToken(response.data.access, response.data.refresh);
      toast.success("Inicio de sesión con éxito!");
      navigate("/");
    },
    onError: () => {
      // En caso de error, mostrar un mensaje de error
      toast.error("Error al iniciar sesión");
    },
  });

  // Manejar el envío del formulario
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Llamar a la mutación de inicio de sesión
    loginMutation.mutate();
  };

  // Si la mutación está en curso, mostrar un mensaje de carga
  if (loginMutation.isLoading) return <p>Loading...</p>;

  // Si el usuario ya está autenticado, redirigir a la página principal
  if (isAuth) return <Navigate to="/" />;

  // Renderizar la interfaz de inicio de sesión
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[800px] lg:py-0">

      <div className="w-full md:w-[400px] lg:w-[500px] bg-slate-300 shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Inicio de sesión
          </h1>
          {/* Formulario de inicio de sesión */}
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            {/* Campo para el correo electrónico */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Correo Electrónico
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                placeholder="correo@correo.com"
              />
            </div>

            {/* Campo para la contraseña */}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Contraseña
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="***********"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
              />
            </div>

            {/* Botón para enviar el formulario */}
            <button
              type="submit"
              className="w-full text-gray bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 transition duration-500 hover:scale-110  focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Iniciar sesión
            </button>

            {/* Enlace para registrarse si no tiene una cuenta */}
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              ¿No tienes una cuenta?
              <Link
                to={"/register"}
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                {" "}
                Regístrate
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

// Exportar el componente LoginPage
export default LoginPage;
