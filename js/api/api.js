const API_URL='https://ajax.test-danit.com/api/v2/cards';

//Авторизация
const logIn = async (email, password) => {
  try{
    return await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if(!response.ok){
          throw new Error("Bad response logIn from server");
        }
        return response.text();
      });
  }catch (err){console.warn(err)}
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
    .then((response) => {
      if(!response.ok){
        throw new Error("Bad response createCard from server");
      }else{
        return response.json();
      }
    });
};

 //Удаление карточки
export const deleteCard = async (token, cardId) => {
  await fetch(`${API_URL}/${cardId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((response) => {
    if(!response.ok){
      throw new Error("Bad response deleteCard from server");
    }else{
      return response.json();
    }
  });
};

 //Получение всех карточек
export const getAllCards = async (token) => {
  try{
    return await fetch(API_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if(!response.ok){
        throw new Error("Bad response getAllCards from server");
      }else{
        return response.json();
      }
    });
  }catch (err){console.warn(err)}
};

 //Получение одной карточки
export const getCard = async (token, cardId) => {
  return await fetch(`${API_URL}/${cardId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((response) => {
    if(!response.ok){
      throw new Error("Bad response getCard from server");
    }else{
      return response.json();
    }
  });
};
