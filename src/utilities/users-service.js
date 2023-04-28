// Login function is defined herein at bottom
// We will use a src/utilities/users-service.js module to organize functions used to sign-up, log in, log out, etc.

// Import all named exports attached to a usersAPI object. This syntax can be helpful documenting where the methods come from
import * as usersAPI from './users-api';

// GET Token function
export function getToken() {
  // getItem returns null if there's no string
  const token = localStorage.getItem('token');
  // If there's no token
  if (!token) return null;

  // Obtain the payload of the token
  const payload = JSON.parse(atob(token.split('.')[1]));
  console.log(payload);

  // Check if token is expired. A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Because token has expired - remove it from localStorage
    localStorage.removeItem('token');
    return null;
  }
  // Token is valid
  return token;
}

// Get User function; this is used inside App.js so call this function inside App.js
export function getUser() {
  // Call the getToken
  const token = getToken();
  // If there's a token (truthy value), ie, it's valid, return the payload (user data), else return null
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}
// SignUp
export async function signUp(userData) {
  // SignUp users comes in here.
  // Delegate the network request code to the users-api.js API module which will ultimately return a JSON Web Token (JWT)
  // console.log('[From SignUp function]', userData); // <-- IMPORTANT to console to be sure it's working
  const token = await usersAPI.signUp(userData);
  // Save token to localStorage; ie, persist the "token"
  localStorage.setItem('token', token);

  // getUser returning (not the token)
  return getUser();
}

// logOut
export function logOut() {
  localStorage.removeItem('token');
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials);
  localStorage.setItem('token', token);
  return getUser();
}
// orderHistoryPage handleCheckToken comes here; token is checked for
export async function checkToken() {
  return usersAPI.checkToken().then((dateStr) => new Date(dateStr));
}
