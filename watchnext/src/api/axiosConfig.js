import axios from "axios";

export default axios.create({
    baseURL: "https://ee34-76-91-203-116.ngrok-free.app",
    headers: {
       "ngrok-skip-browser-warning": "true"
    }
});


