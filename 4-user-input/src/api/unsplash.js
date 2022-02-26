import axios from "axios";
import ApiKeys from "../nodist/ApiKeys";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID " + ApiKeys.UNSPLASH_API_KEY
    }
});