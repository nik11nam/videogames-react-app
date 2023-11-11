import axios from "axios";

/**
 * https://api.rawg.io/docs/
 */
const apiClient = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'xxxxx'
    }
});

export default apiClient;