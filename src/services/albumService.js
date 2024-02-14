import {urls} from "../constants/urls";
import {apiService} from "./apiService";

const albumService = {
    getAll:() => apiService.get(urls.albums)
}

export {
    albumService
}