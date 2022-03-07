import axios from "axios";
import ApiKeys from "./nodist/ApiKeys";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: ApiKeys.YOUTUBE_API_KEY
    }
});