const INITIAL_STATE = {
	cart: [],
	cartTotalItems: 0,
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

	case "SUBMIT_ORDER_SUCCESS":
	return {
		...state,
		cart: [],
		cartTotalItems:0,
	};
	default:
		return state;
	}
}


export default cartReducer;
