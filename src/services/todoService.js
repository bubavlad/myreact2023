import {urls} from "../constants/urls";
import {apiService} from "./apiService";

const todoService = {
    getAll:() => apiService.get(urls.todos)
}

export {
    todoService
}