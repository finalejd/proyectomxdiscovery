import { User } from "../Interfaces";
import { authAxios, axi } from "./useAxios";


//Funcion para obtener la informacion de un usuario 
export const get_solo_user = async (id: number) => {
    const response = await authAxios.get(`/users/get/solo/${id}/`) 
    return response.data
};

//funcion que permite editar la informacion de un usuario (administrador)
export const edit_user = async (data: User) => {
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("last_name", data.last_name)
    formData.append("email", data.email)
    if (data.avatar) {
        formData.append("avatar", data.avatar)
    }
    await authAxios.put(`/users/edit/${data.email}/`, formData)
};

//permite realizar la busqueda de un usuario mediante su numero de usuario (administrador)
export const search_users = async (query: string) => {
   const response = await authAxios.get(`/users/search/?query=${query}`) 
   return response.data
};

//funcion que permite eliminar a un usuario (administrador)
export const delete_user = async (id: number) => {
    await authAxios.delete(`/users/delete/${id}/`) 
};

//obtiene los usuarios en el menu de usuarios
export const get_users = async () => {
   const response = await authAxios.get("/users/get/") 
   return response.data
};

//permite obtener la informacion de un usuario cuando este se encuentra en el menu de registro
export const registerRequest = async (email: string, name: string, last_name: string, password: string) => {
    await axi.post("/users/register/", {email, name, last_name, password})
};


//permite obtener los parametros de email y contrasena cuando el usuario esta en Inicio de sesion
export const loginRequest = async (email: string, password: string) => {
    const response = await axi.post("/users/login/", {email, password})
    return response;
};
