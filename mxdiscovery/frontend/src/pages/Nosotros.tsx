import React from "react";
import Mision from "../components/Mision";
import cris from "../assets/cris.jpg";
import omar from "../assets/omar.jpeg";
import jose from "../assets/jose.jpg";
import nataen from "../assets/nata.jpg";
import FacebookPage from "../components/facebook";
import Trabajos from "../components/trabajos";
import FractalTreeComponent from "../components/fractal";
const Nosotros = () => {


  return (
    <>
      <br />
      <br />
      <br />

      <div className="container mx-auto">
        <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">

          {/* Perfil 1 */}
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">DOCUMENTADOR</h3>
              <p className="my-4">Responsable de la parte de documentación.
                Garantizó una documentación completa y precisa para el proyecto, proporcionando una guía detallada que facilitó la comprensión y colaboración en el equipo.</p>
            </blockquote>
            <figcaption className="flex items-center justify-center ">
              <img className="rounded-full w-20 h-20" src={cris} alt="profile picture" />
              <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Pulido Larios Cristopher</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Documentación/Diseño</div>
              </div>
            </figcaption>
          </figure>

          {/* Perfil 2 */}
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">MARKETING</h3>
              <p className="my-4">Encargado del área de marketing.
                Desarrolló estrategias de marketing efectivas para promover y dar visibilidad al proyecto.
                Colaboró con otros equipos para asegurar una comunicación cohesiva entre el desarrollo y las estrategias de marketing.
                Implementó tácticas innovadoras para atraer a la audiencia objetivo y aumentar la presencia del proyecto en el mercado.</p>
            </blockquote>
            <figcaption className="flex items-center justify-center ">
              <img className="rounded-full w-20 h-20" src={omar} alt="profile picture" />
              <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Gonzalez Hernandez Cruz Omar</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Marketing/Diseño</div>
              </div>
            </figcaption>
          </figure>

          {/* Perfil 3 */}
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">DESARROLLADOR WEB</h3>
              <p className="my-4">Encargado del desarrollo tanto en el backend como en el frontend.
                Desarrolló eficientemente las funciones del backend para garantizar un rendimiento óptimo del sistema.
                Diseñó y creó interfaces de usuario atractivas y funcionales en el frontend, proporcionando una experiencia de usuario fluida.</p>
            </blockquote>
            <figcaption className="flex items-center justify-center ">
              <img className="rounded-full w-20 h-20" src={jose} alt="profile picture" />
              <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Cruz Arredondo José David</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">SubLíder/Programador</div>
              </div>
            </figcaption>
          </figure>

          {/* Perfil 4 */}
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">DESARROLLADOR WEB</h3>
              <p className="my-4">Líder y Programador en MxDiscovery.
                Encargado tanto del desarrollo en el backend como en el frontend.
                Supervisó y coordinó el equipo de desarrollo, asegurando la coherencia y eficiencia en todas las fases del proyecto.
                Diseñó e implementó características clave para mejorar la funcionalidad y la experiencia del usuario.</p>
            </blockquote>
            <figcaption className="flex items-center justify-center ">
              <img className="rounded-full w-20 h-20" src={nataen} alt="profile picture" />
              <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Salas Figueroa Jesús Nahataen</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Líder/Programador</div>
              </div>
            </figcaption>
          </figure>

        </div>

        <Mision />


        <FractalTreeComponent />
        <Trabajos />

      </div>
    </>
  );
};

export default Nosotros;
