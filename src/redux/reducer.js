import { GET_ALL_VINO, GET_VINO_BY_ID, GET_VINO_BY_NAME } from "./actions";

const initialState = {
    allVinos: [],
    vinoDetail: {},
    vinoCreated: [],
    vinosFiltered: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        case GET_ALL_VINO:
            return{
                ...state,
                allVinos: action.payload,
            };

        case GET_VINO_BY_NAME:
            return{
                ...state,
                vinosFiltered: action.payload !== [] ? action.payload : alert('Perro no encontrado')
            };

        case GET_VINO_BY_ID:
            return{
                ...state,
                vinoDetail: action.payload,
            }

        default:
            return state;
    }
}

export default rootReducer;