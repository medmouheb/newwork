const initState={
    products:[]
}
const WishListReducer = (state = initState, action) => {
    if(action.type==="ADD_TO_WISHLIST" && state.products.indexOf(action.product)==-1){
        let tab=state.products
        tab.push(action.product)
        return({products:tab})
    }
    else{
        return{...state}
    }
}
export default WishListReducer