import axios from "axios";

function getArray(){
    return axios
        .get("https://breakingbadapi.com/api/characters")
        .then(response => {        
            return response.data          
})}

module.exports = {getArray};