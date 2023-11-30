import { useRef, useState, LegacyRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_0mq89f9', 'template_m8ce883', form.current, '7do8qiDFSTf4XVS2J')
                .then((result) => {
                    console.log(result.text);
                    setIsSubmitted(true);
                    setAlertMessage('Form submitted successfully!');
                    resetForm();
                })
                .catch((error) => {
                    console.error(error.text);
                    setIsError(true);
                    setAlertMessage('Oops! Something went wrong. Please try again later.');
                });
        } else {
            console.error("Form reference is not available.");
            setIsError(true);
            setAlertMessage('Oops! Something went wrong. Please try again later.');
        }
    };

    const resetForm = () => {
        if (form.current) {
            form.current.reset();
        }
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (alertMessage) {
            timer = setTimeout(() => {
                setAlertMessage('');
            }, 3000); // El mensaje de alerta desaparecerá después de 3 segundos
        }

        return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
    }, [alertMessage]);

    return (
        <><div className="flex flex-col md:flex-row justify-center items-center ">
            <form
                ref={form as LegacyRef<HTMLFormElement>}
                onSubmit={sendEmail}
                className="max-w-md mx-4 md:mx-auto bg-white p-8 mt-10 rounded-md shadow-md w-full md:w-1/2"
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_name">
                        Nombre
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="user_name"
                        type="text"
                        name="user_name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_email">
                        Correo
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="user_email"
                        type="email"
                        name="user_email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Mensaje
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        name="message"
                    />
                </div>
                <div className="flex items-center justify-center md:justify-end">
                    <button
                        className="mb-2 inline-flex items-center mx-3 px-3 py-2 text-sm font-medium text-center text-gray bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 transition duration-500 hover:scale-110  focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="submit"
                    >
                        Enviar
                    </button>
                </div>
            </form>
            {alertMessage && (
                <div className="mt-4 md:ml-4 md:w-1/2">
                    <div className="fixed top-0 right-0 m-4 p-4 bg-green-500 text-white rounded-md">
                        {alertMessage}
                    </div>
                </div>
            )}
            {isError && (
                <div className="mt-4 md:ml-4 md:w-1/2">
                    <div className="mt-4 text-red-600">{alertMessage}</div>
                </div>
            )}

        </div>
            <div className="mt-8 mx-auto max-w-screen-lg  ">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.9933709852144!2d-116.93678782434988!3d32.472869073792246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d939827c3a03b1%3A0xc98987ff82db9d00!2sMX%20Discovery!5e0!3m2!1ses!2smx!4v1701246427622!5m2!1ses!2smx"
                    width="100%" // Ajustado al 100% del ancho disponible
                    height="400"
                    style={{ border: "0" }}
                    loading="lazy"
                    className="rounded-md"
                ></iframe>
            </div>

        </>

    );
};
