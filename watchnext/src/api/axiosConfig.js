import axios from "axios";

export default axios.create({
    baseURL: "https://f28d-2603-8001-a000-3054-8cee-75ef-3428-7e34.ngrok-free.app",
    headers: {
       "ngrok-skip-browser-warning": "true"
    }
});


