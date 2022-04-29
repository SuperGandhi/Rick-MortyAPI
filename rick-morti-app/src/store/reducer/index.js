import {GET_CHARACTERS} from "../actions"


const initialState ={
    characters: []
}



// reducer es un función que su única funcionalidad es modificar el estado
function reducer ( state= initialState, action){
    switch(action.type){
        case GET_CHARACTERS:
            return {
                ...state,
                characters: action.payload
            }
        default:
            return state
    }
}

export default reducer