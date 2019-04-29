import {ZoomIMG} from '../testdata'
const initState ={
    ZoomIMG:{...ZoomIMG}
}
const ZoomIMGReducer = (state = initState, action) => {
     return {
       ...state,  
     }
    }
  export default ZoomIMGReducer