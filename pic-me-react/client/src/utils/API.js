
// Retrieving data from giphy api with axios
// Will change to React.js
// const axios = require("axios");

// axios
// .get("https://api.giphy.com/v1/gifs/search?q=funny&api_key=dc6zaTOxFJmzC&limit=100")
// .then(function(res) {
//     console.log(res.data);
// })

import axios from "axios";

export default {
    getRandomGif: () => {
        return axios.get("https://api.giphy.com/v1/gifs/search?q=funny&api_key=dc6zaTOxFJmzC&limit=1")
    }
};