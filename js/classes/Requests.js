import {API_URL} from "../constants.js";
import AuthToken from "./AuthToken.js";

export default class Requests {

    static async sendLogin(email, password) {
        return await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => {
                console.log(response);
                if(!response.ok){
                    throw new Error("Такого користувача не існує");
                } else {
                    AuthToken.setTokenToLocalStorage(response.text());
                }
            });
    }
}