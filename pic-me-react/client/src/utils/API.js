import axios from "axios";

export default {

    // Gifs
    getRandomGif: (search) => {
        // return axios.get("https://api.giphy.com/v1/gifs/search?q=funny&api_key=dc6zaTOxFJmzC&limit=100")
        return axios.get("https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC&limit=1" )
    },
    getManyGif: (search) => {
        // return axios.get("https://api.giphy.com/v1/gifs/search?q=funny&api_key=dc6zaTOxFJmzC&limit=100")
        return axios.get("https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC&limit=100" )
    },

    // User Image
    saveUserImage: imagedata => {
        return axios.post("/api/photo", imagedata)
    }
};