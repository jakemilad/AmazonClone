import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-clone-bc18b.cloudfunctions.net/api"
})

export default instance;

// local host
//http://127.0.0.1:5001/clone-bc18b/us-central1/api

// deployed backend w cloud functions
//https://us-central1-clone-bc18b.cloudfunctions.net/api