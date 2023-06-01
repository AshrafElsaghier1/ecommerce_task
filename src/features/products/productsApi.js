import axios from "axios";

const baseURL = 'https://iti-ecommerce-data.onrender.com/data';

export const fetchProducts = () => {

  return axios.get(baseURL);


}
export const fetchProduct = (id) => {

  return axios.get(`${baseURL}/${id}`);


}
