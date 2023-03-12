export default class AuthToken{
    static setTokenToLocalStorage(token) {
        localStorage.setItem("authToken", token);
    }

    static getAuthTokenFromStorage() {
        const authToken = localStorage.getItem("authToken");

        if (authToken === null) {
            throw new Error("Auth Token not found")
        } else {
            return authToken;
        }
    }
}