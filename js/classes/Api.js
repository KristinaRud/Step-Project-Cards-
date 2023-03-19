import { API_URL } from "../constants.js";

export let token;
export const setToken = (newToken) => {
    token = newToken;
    localStorage.setItem('authToken', token);
};

export default class Api {
    //Авторизация
    static logIn = async (email, password) => {
        return await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Bad response logIn from server");
                }
                return response.text();
            });
    };


    //Создание карточки
    static createCard = async (dataObj) => {
       return await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
            body: JSON.stringify(dataObj),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Bad response createCard from server");
                } else {
                    return response.json();
                }
            });
    };

    //Удаление карточки
    static deleteCard = async (cardId) => {
        return await fetch(`${API_URL}/${cardId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Bad response deleteCard from server");
                } else {
                    return response;
                }
            });
    };

    //Получение всех карточек
    static getAllCards = async () => {
        try {
            return await fetch(API_URL, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Bad response getAllCards from server");
                    } else {
                        return response.json();
                    }
                });
        } catch (err) { console.warn(err) }
    };

    //Получение одной карточки
    static getCard = async (cardId) => {
        return await fetch(`${API_URL}/${cardId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Bad response getCard from server");
                } else {
                    return response.json();
                }
            });
    };
    //Редактирование
    static editCard= async (cardId, dataObj) => {
        return await fetch(`${API_URL}/${cardId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(dataObj),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Bad response getCard from server");
                } else {
                    return response.json();
                }
            });
    };

}

