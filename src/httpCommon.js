import axios from "axios";

export const api = axios.create({
  baseURL: `http://localhost:8080`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export const url = axios.create({
  baseURL : `https://www.corpseed.com`,
  headers:{
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  }
})