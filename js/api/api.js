
//Авторизация
const logIn = async (email, password) => {
  return await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if(!response.ok){
        throw new Error("Bad response from server");
      }
      return response.text();
    });
};

export default logIn;

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
  return await fetch(API_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json());
};

 //Получение одной карточки
export const getCard = async (token, cardId) => {
  return await fetch(`${API_URL}/${cardId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json());
};
