import axios from 'axios';
export const GET_ALL_VINO = "GET_ALL_VINO";
export const GET_VINO_BY_NAME = "GET_VINO_BY_NAME";
export const GET_VINO_BY_ID = "GET_VINO_BY_ID";
export const ADD_CART = "ADD_CART";

export const getAllVinos = () => {
  return async function(dispatch){
    try{
      let json = axios.get(`/vinos`)
      return dispatch({
        type: GET_ALL_VINO,
        payload: (await json).data
      })
    }catch(error){
    console.log(error);
    alert(error);
    }
  } 
}

export const getVinoByName = (name) =>{
    return async function(dispatch){
        try {
            var json = axios.get(`/vinos?name=${name}`)
            return dispatch({
                type: GET_VINO_BY_NAME,
                // payload: json.data
                payload: (await json).data
            })
        } catch (error) {
            console.log(error)
            alert("Country Not Found")
        }
    }
}

export const getVinoById = (id) =>{
    return async function (dispatch) {
        try {
            var json = axios.get(`/wines/${id}`)
            return dispatch({
                type: GET_VINO_BY_ID,
                payload: (await json).data
            })
        } catch (error) {
            console.log(error)
            alert("Country Not Found")
        }
    }
}


export const createNewVino = (payload) => {
    return async function (dispatch) {
      try {
        var response = await axios.post(`/create`, payload);
        console.log(response);
        return response
      } catch (e) {
        alert(e)
      }        
    }
  };

  // export const addToCart = (vinoID) => {
  //   return { type: ADD_CART, payload: vinoID };
  // };

  export const addToCart = (vinoID) =>{
    console.log('vinoID:',vinoID);
    return { type: ADD_CART, payload: vinoID };
  }
