import { API_URL } from "./config.js";

//Авторизация
const logIn = async (email, password) => {
  return await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.text());
};

export default logIn;

//Сохранение токена в locasStorage
export const setTokenToLocalStorage = (token) => {
    localStorage.setItem("token", token);
};

//Получение токена из locasStorage
export const getTokenFromLocalStorage = () => {
    return localStorage.getItem("token");
  };

 //Создание карточки
export const createCard = async (dataObj, token) => {
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dataObj),
  })
    .then((response) => response.json());
};

 //Удаление карточки
export const deleteCard = async (token, cardId) => {
  await fetch(`${API_URL}/${cardId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json());
};

 //Получение всех карточек
export const getAllCards = async (token) => {
  await fetch(API_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json());
};

 //Получение одной карточки
export const getCard = async (token, cardId) => {
  await fetch(`${API_URL}/${cardId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json());
};
