import axios from "axios";

export default {

    getRandom: (search) => {
        // return axios.get("https://api.giphy.com/v1/gifs/search?q=funny&api_key=dc6zaTOxFJmzC&limit=100")
        return axios.get("https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC&limit=1" )
    },
    getMany: (search) => {
        // return axios.get("https://api.giphy.com/v1/gifs/search?q=funny&api_key=dc6zaTOxFJmzC&limit=100")
        return axios.get("https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC&limit=100" )
    },
};