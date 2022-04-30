import axios from "axios"
export const GET_CHARACTERS = "GET_CHARACTERS"

export function getCharacters() {
    // https://rickandmortyapi.com/api/character
    return function(dispatch){
        return axios.get("https://rickandmortyapi.com/api/character")
        .then(response =>{
            dispatch({
                type: GET_CHARACTERS,
                payload: response.data.results
            }) 
        })
        .catch((error)=>{
            console.log(error)
        })
    }   
}



// return function(dispatch){
//     return fetch('https://rickandmortyapi.com/api/character')
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (json){
//         dispatch({
//             type: GET_CHARACTERS,
//             payload: json.results
//         })
//     })
//     .catch((error) =>{
//         console.log(error)
//     })
// }