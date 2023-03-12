export default class AuthToken{
    static setTokenToLocalStorage(token) {
        localStorage.setItem("authToken", token);
    }

    static getAuthTokenFromStorage() {
        return localStorage.getItem("authToken");

    }
}