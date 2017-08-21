const INITIAL_STATE = {
	products: [],
	activeProduct: null,
	error: null,
	isLOADING: false,
};


function productsReduced(state = INITIAL_STATE, action) {
	switch (action.type) {

	case "LOADING_PRODUCTS":
		return {
			...state,
			isLOADING: true,
			products: [],
		};

	case "GET_ALL_PRODUCTS":
		return {
			...state,
			isLOADING: false,
			products: action.products,
		};

	case "LOADING_PRODUCTS":
		return {
			...state,
			isLOADING: true,
			products: [],
		};

	case "LOADING_SELECTED_PRODUCT":
		return {
			...state,
			isLOADING: true,
			activeProduct: null,
		};

	case "SELECTED_PRODUCT_LOAD_SUCCESS":
		return {
			...state,
			activeProduct: action.product,
			isLOADING: false,
		};



	// Error Cases

	case "PRODUCTS_CANT_LOAD":
		return {
			...state,
			isLOADING: false,
			error: action.error,
		};
	case "SELECTED_PRODUCT_CANT_LOAD":
		return {
			...state,
			isLOADING: false,
			error: action.error,
		};

	default:
		return state;
	}
}


export default productsReduced;
