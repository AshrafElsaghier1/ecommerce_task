import axios from "axios";

const baseURL = 'https://e-commerce-api-y4mu.onrender.com/data';

export const fetchProducts = () => {

  return axios.get(baseURL);


}
export const fetchProduct = (id) => {

  return axios.get(`${baseURL}/${id}`);


}