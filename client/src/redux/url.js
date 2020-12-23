/**
 * This file contains all the url endpoints of the backend api 
 * that the website needs to call. 
 */

export const LOGIN_URL = (process.env.NODE_ENV === "development")? "http://localhost:5000/api/auth/login" : "" ;