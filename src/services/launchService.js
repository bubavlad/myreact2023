import {spaceXService} from "./spaceXService";
import {url} from "../constants/urls";

const launchService = {
    getAll:() => spaceXService.get(url.launches)
}

export {
    launchService
}