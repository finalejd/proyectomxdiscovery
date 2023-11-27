import { Order } from "../Interfaces"; // importa desde interfaces los datos que se mostraran
import { authAxios } from "./useAxios"; //permite realizar operaciones para datos autentificados

//Realiza una peticion de busqueda segun los datos que se muestran en el menu de orden
export const search_order = async (query: string) => {
    const response = await authAxios.get(`/orders/search/?query=${query}`)
    return response.data;
};

// permite editar una orden segun su numero de orden (solo administrador)
export const edit_order = async (id: number) => {
   await authAxios.put(`/orders/deliver/${id}/`)
};

// obtiene las ordenes en general
export const get_orders = async () => {
    const response = await authAxios.get(`/orders/`)
    return response.data
};

//permite selecciona una orden segun su numero de orden
export const solo_order = async (id: number) => {
    const response = await authAxios.get(`/orders/solo/${id}/`)
    return response.data
};

//permite a un usuario mostrar sus ordenes
export const my_orders = async () => {
   const response = await authAxios.get('orders/my/orders/') 
   return response.data
};

//crea una orden cuando el usuario selecciona "guardar al carrito"
export const create_order = async (data: Order) => {
    await authAxios.post('/orders/create/', data)
};
