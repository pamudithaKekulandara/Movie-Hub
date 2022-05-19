import * as actionTypes from '../constants/cartConstants'
import axios from 'axios';

export const addToCart = ( id, qty ) => async (dispatch) => {
  const { data } = await axios.get(`/movie/${id}`)
  
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      movie: data._id,
      name: data.name,
      
    }
  })
}