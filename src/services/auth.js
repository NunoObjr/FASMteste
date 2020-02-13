export const TOKEN_KEY = "@airbnb-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY);
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
}
console.log(TOKEN_KEY)
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}