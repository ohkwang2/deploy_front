import axios from "axios";

const liveServerAddress = "https://cocopam.store";
const localServerAddress = "http://localhost:8080";

export const instance = axios.create({
    baseURL: localServerAddress
});