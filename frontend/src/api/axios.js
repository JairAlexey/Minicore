import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001/api";

const client = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default client;