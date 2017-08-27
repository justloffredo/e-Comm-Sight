const INITIAL_STATE = {
	cart: [],
	cartTotalItems: 0,
	cartIds: [],

};
function cartReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
	case "ADD_TO_CART":
		return {
			cart: [...state.cart,
				action.product,
			],
			cartTotalItems: state.cartTotalItems + 1,
		};
// Error Cases
	case "CANT_ADD_TO_CART":
		return {
			...state,
			error: action.error,
	};
	default:
		return state;
	}
}


export default cartReducer;
