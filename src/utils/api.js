import axios from "axios";

const url = "https://6443962a466f7c2b4b565f5b.mockapi.io/";

const getResponseData = (res, about) => {
  return res.ok ? res.json() : Promise.reject(`${about}: ${res.status}`);
};

/* export const getItems = (url) => {
  return fetch(url)
    .then(res => getResponseData(res, 'Данные о кроссах не загрузились'))
} */

export const getItems = () => {
  return axios.get("https://6443962a466f7c2b4b565f5b.mockapi.io/sneakers");
};

export const getToBasket = () => {
  return axios.get("https://6443962a466f7c2b4b565f5b.mockapi.io/basket")
}

export const addToBasket = (obj) => {
  return axios.post("https://6443962a466f7c2b4b565f5b.mockapi.io/basket", obj);
};

export const deleteFromBasket = (id) => {
  return axios.delete(`https://6443962a466f7c2b4b565f5b.mockapi.io/basket/${id}`)
}

export const addToFavorite = (obj) => {
  return axios.post("https://6443fd7590738aa7c07c6764.mockapi.io/favorites", obj);
}

export const getFromFavorite = () => {
  return axios.get('https://6443fd7590738aa7c07c6764.mockapi.io/favorites')
}

export const deleteFromFavorite = (id) => {
  return axios.delete(`https://6443fd7590738aa7c07c6764.mockapi.io/favorites/${id}`)
}
