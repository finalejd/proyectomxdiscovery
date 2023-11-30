import { Product } from "../Interfaces";
import { authAxios, axi } from "./useAxios";

//funcion para crear una nueva resena
export const create_review = async (
  description: string,
  rating: number,
  productId: number
) => {
  await authAxios.post(`/products/review/${productId}/`, {
    description,
    rating,
  });
};

//permite mostrar y seleccionar una categoria de la tienda
export const cate_api = async (cateogry: string) => {
  const response = await authAxios.get(`/products/cate/${cateogry}/`);
  return response.data;
};

//mediante el buscador, se genera una consulta para buscar un producto en especifico
export const search_prod = async (query: string) => {
  const response = await authAxios.get(`/products/search/?query=${query}`);
  return response.data;
};

//obtiene la el nombre en general de los prodcutos
export const get_solo = async (slug: string) => {
  const response = await authAxios.get(`/products/get/${slug}/`);
  return response.data;
};

//esta funcion permite obtener la informacion completa de un producto en especifico
export const get_solo_prod = async (id: number) => {
  const response = await authAxios.get(`/products/get/admin/${id}/`);
  return response.data;
};

//Funcion que permite modificar la informacion de un producto, como nombre, descripcion, etc.
export const edit_product = async (data: Product) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("count_in_stock", data.count_in_stock.toString());
  formData.append("category", data.category);
  formData.append("price", data.price.toString());
  if (data.image) {
    formData.append("image", data.image);
  }
  await authAxios.put(`/products/edit/${data.id}/`, formData);
};

//permite eliminar un producto en especifico
export const delete_product = async (id: number) => {
  await authAxios.delete(`/products/delete/${id}/`);
};

//mismos parametros que la funcion editar, pero aqui se publica la informacion, se agrega un nuevo producto
export const post_product = async (data: Product) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("count_in_stock", data.count_in_stock.toString());
  formData.append("category", data.category);
  formData.append("price", data.price.toString());
  if (data.image) {
    formData.append("image", data.image);
  }
  await authAxios.post("/products/post/", formData);
};

export const get_products = async ({ pageParam = 1 }) => {
  const response = await axi.get(`/products/?page=${pageParam}&pages=9`);
  return response.data;
};
