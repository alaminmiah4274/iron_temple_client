import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://iron-temple-swart.vercel.app/api/v1",
});

export default apiClient;
