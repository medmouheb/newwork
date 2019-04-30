const initState ={

}
const newUserReducer = (state = initState, action) => {
switch(action.type){
  case 'NEW_USER':
  let newuser=action.newuser
    return {  
        ...newuser
      }
  break;
  default:
  return {
    ...state,  
  }
}

}
export default newUserReducer