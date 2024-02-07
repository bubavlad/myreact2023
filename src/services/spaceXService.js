import axios from "axios";
import {spaceXUrl} from "../constants/urls";

const spaceXService = axios.create({baseURL:spaceXUrl})

export {
    spaceXService
}