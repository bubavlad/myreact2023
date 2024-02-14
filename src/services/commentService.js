import {urls} from "../constants/urls";
import {apiService} from "./apiService";

const commentService = {
    getAll:() => apiService.get(urls.comments)
}

export {
    commentService
}