import axios from "axios";
import { Buffer } from 'buffer';

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {

 
  //const username_cr = Buffer.from(username, 'ascii');
  const username_cr = window.btoa(username)
  const email_cr = window.btoa(email)
  const password_cr = window.btoa(password)
  
  
  return axios.post(API_URL + "signup", {
    username_cr,
    email_cr,
    password_cr,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};