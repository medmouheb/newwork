const initState ={

        search: '',
        categoryId: null,
        priceFrom: null,
        priceTo: null,
        products: null,
    
}
const filterReducer = (state = initState, action) => {
    switch(action.type){
      case 'FILTER_PRODUCT':
      let filter=action.data
        return {
            ...state,  
            ...filter
          }
      break;
      default:
      return {
        ...state,  
      }
    }
    
    }
  export default filterReducer