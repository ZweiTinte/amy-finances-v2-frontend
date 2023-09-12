import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const AUTH_TOKEN = "auth_token";

export function getUser(token = AUTH_TOKEN): any {
  const user = Cookies.get(token);
  return user ? jwtDecode(user) : {};
}

export function getJWT(token = AUTH_TOKEN): string {
  const user = Cookies.get(token);
  return user ? user : "";
}

export function isLoggedIn(): boolean {
  const jwt = getJWT();
  if (jwt) {
    const user = jwtDecode(jwt);
    return !!(user as any).exp;
  }
  return false;
}

export function logout(token = AUTH_TOKEN): void {
  Cookies.remove(token);
}

export function login(token: string, tokenName = AUTH_TOKEN): void {
  Cookies.set(tokenName, token, { sameSite: "None", secure: true, expires: 1 });
}
