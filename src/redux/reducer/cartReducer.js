const initialState = {
    cartProducts: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return ({
                cartProducts: [...state.cartProducts, action.product]
            })
        default:
            return state
    }
}

export { cartReducer }