import axios from "axios";

const api = axios.create({
    baseURL: "https://api-todo-dh.herokuapp.com/todo",
    // headers: {
    //     Authorization: "Bearer 1123019283019238"
    // }
});

export default api;