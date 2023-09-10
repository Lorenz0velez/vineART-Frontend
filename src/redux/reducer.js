import { ADD_CART, GET_ALL_VINO, GET_VINO_BY_ID, GET_VINO_BY_NAME } from "./actions";

const initialState = {
    allVinos: [],
    vinoDetail: {},
    vinoCreated: [],
    vinosFiltered: [],
    cart: []
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

//---------------------------------------------------------------------
//---------------------------------------------------------------------
    case ADD_CART: {
    const newItem = {
    id: action.payload.id,
    name: action.payload.name,
    bodega: action.payload.bodega,
    imagen: action.payload.imagen,
    descripcion: action.payload.descripcion,
    categoria: action.payload.categoria,
    varietal: action.payload.varietal,
    composicion_varietal: action.payload.composicion_varietal,
    quantity: action.payload.quantity,
    añejamiento: action.payload.añejamiento,
    region: action.payload.region,
    contenido: action.payload.contenido,
    se_vende_por: action.payload.se_vende_por,
    temperatura_de_servicio: action.payload.temperatura_de_servicio,
    linea_del_vino: action.payload.linea_del_vino,
    precio_por_caja: action.payload.precio_por_caja,
};

   const newCart1 = [...state.cart, newItem];

        return {
          ...state,
          cart: newCart1, // Filtramos el elemento antiguo y agregamos el nuevo
        };
      }

//-------------------------------------------------------------------------

        default:
            return state;
    }
}

export default rootReducer;


// const newItem = {
//     id: action.payload.id,
//     name: action.payload.name,
//     bodega: action.payload.bodega,
//     imagen: action.payload.imagen,
//     descripcion: action.payload.descripcion,
//     categoria: action.payload.categoria,
//     varietal: action.payload.varietal,
//     composicion_varietal: action.payload.composicion_varietal,
//     quantity: action.payload.quantity,
//     añejamiento: action.payload.añejamiento,
//     region: action.payload.region,
//     contenido: action.payload.contenido,
//     se_vende_por: action.payload.se_vende_por,
//     temperatura_de_servicio: action.payload.temperatura_de_servicio,
//     linea_del_vino: action.payload.linea_del_vino,
//     precio_por_caja: action.payload.precio_por_caja,
// };