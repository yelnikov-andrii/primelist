import axios from "axios"

export const getProducts = () => {
  return axios.get('https://apipizzas.onrender.com/sushi')
    .then(res => {
      return res.data;
    })
}