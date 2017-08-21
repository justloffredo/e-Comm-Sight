// import PRODUCTS from "json/products.json";
import API from "utility/api";

export function getAll() {
	return (dispatch) => {
		dispatch({ type: "LOADING_PRODUCTS" });
		API.get("/products").then((res) => {
			console.log(" getAll() action/function   res.data: ", res.data);
			if (res.data) {
				dispatch({
					type: "GET_ALL_PRODUCTS",
					products: res.data.products,
				});
			}
			else {
				dispatch({
					type: "PRODUCTS_CANT_LOAD",
					error: res.error,
				});
			}
		}).catch((error) => {
			dispatch({
				type: "PRODUCTS_CANT_LOAD",
				error: "Something failed",
			});
		});
	};
}


export function getOne(productId) {
	return (dispatch) => {
		dispatch({ type: "LOADING_SELECTED_PRODUCT" });
		API.get(`/products/${productId}`).then((res) => {
				console.log("getOne(product) action/function  res.data: ", res.data.product);
			if (res.data) {
				dispatch({
					type: "SELECTED_PRODUCT_LOAD_SUCCESS",
				 	product: res.data.product,
				});
			}
			else {
				dispatch({
					type: "SELECTED_PRODUCT_CANT_LOAD",
					error: "Can not find that product!",
				});
			}
		})

			.catch((err) => {
				dispatch({
					type: "SELECTED_PRODUCT_CANT_LOAD",
					error: "Something went absolutely wrong. Please refresh",
				});
			});
	};
}
