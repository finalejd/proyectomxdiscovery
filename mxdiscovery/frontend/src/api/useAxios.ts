import axios, { AxiosRequestHeaders } from "axios";
import { useAuthStore } from "../store/auth"; // Realiza el llamado de una funcion para deterninar si el usuario es administrador en la tienda
import jwt_decode from "jwt-decode"; // permite codificar tokens desde la libreria de jwt
import { Token } from "../Interfaces"; //realiza la importacion a "Interfaces"  para generar el token


//Permite cerrar sesion llamando la funcionb "logout"
function logout() {
    useAuthStore.getState().logout()
    window.location.href = '/login'
}

//proporciona un enlace entre el baseURL y la variable de entorno
const baseURL = import.meta.env.VITE_BACKEND_URL 

export const axi = axios.create({
    baseURL
});

export const authAxios = axios.create({
    baseURL,
    withCredentials: true
});

// con este fragmento de codigo, desde el token de un usuario, permite evaluar
// el tiempo que este usuario o administrador estara con su sesion abierta,
// una vez expirado el tiempo de 5 min, se refrescara la pagina en automatico,
// y sera devuelto a la pagina de inicio de sesion
authAxios.interceptors.request.use(async (config) => {
    const token: string = useAuthStore.getState().access;
    config.headers = {
        Authorization: `Bearer ${token}`,
    } as AxiosRequestHeaders;

    const tokenDecoded: Token = jwt_decode(token)

    const expiration = new Date(tokenDecoded.exp * 1000); // expiracion del token
    const now = new Date(); // la expiracion del token comienza apartir de la hora actual
    const fiveMin = 1000 * 60 * 5; // representa los 5 minutos en milisegundos, actua como un temporizador

    if (expiration.getTime() - now.getTime() < fiveMin) 
        try {
            const response = await axi.post('/users/refresh/', { refresh: useAuthStore.getState().refresh })
            useAuthStore.getState().setToken(response.data.access, response.data.refresh)
        } catch (err) {
            logout()
        }
        return config
});









