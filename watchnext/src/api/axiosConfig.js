import axios from "axios";

export default axios.create({
    baseURL: "https://c56c-2603-8001-a000-3054-b892-9c42-2fe0-fd7c.ngrok-free.app",
    headers: {
       "ngrok-skip-browser-warning": "true"
    }
});


