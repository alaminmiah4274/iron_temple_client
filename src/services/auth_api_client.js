import axios from "axios";

const authApiClient = axios.create({
	baseURL: "https://iron-temple-swart.vercel.app/api/v1/",
});

export default authApiClient;

// authApiClient.interceptors.request.use((config) => {

// });
