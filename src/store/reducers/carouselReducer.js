import {images} from '../../testdata'
const initState ={
    images:[...images],
}
const carouselReducer = (state = initState, action) => {
     return {
       ...state,  
     }
    }
  export default carouselReducer