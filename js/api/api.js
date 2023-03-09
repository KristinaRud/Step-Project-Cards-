const logIn = async (email, password) => {
  return await fetch("https://ajax.test-danit.com/api/v2/cards/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.text());
};
export default logIn;

export const setTokenToLocalStorage = (token) => {
    localStorage.setItem("token", token);
};

export const getTokenFromLocalStorage = () => {
    return localStorage.getItem("token");
  };

export const createCard = async (dataObj, token) => {
  await fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dataObj),
  })
    .then((response) => response.json());
};

export const deleteCard = async (token, cardId) => {
  await fetch(`https://ajax.test-danit.com/api/v2/cards/${cardId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json());
};

export const getAllCards = async (token) => {
  await fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json());
};

export const getCard = async (token, cardId) => {
  await fetch(`https://ajax.test-danit.com/api/v2/cards/${cardId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json());
};
