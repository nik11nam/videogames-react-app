import axios from "axios";

/**
 * https://api.rawg.io/docs/
 */
const apiClient = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '5860febe715745bbb82886b2e583e757'
    }
});

export default apiClient;