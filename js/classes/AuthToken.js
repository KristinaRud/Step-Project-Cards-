export default class AuthToken{
    static setTokenToLocalStorage(token) {
        localStorage.setItem("authToken", token);
    }

    static getAuthTokenFromStorage() {
        const authToken = localStorage.getItem("п");

        if (authToken === null) {
            throw new Error("Auth Token not found")
        } else {
            return authToken;
        }
    }
}