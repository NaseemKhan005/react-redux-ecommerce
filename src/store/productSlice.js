import { createSlice } from "@reduxjs/toolkit";

export const STATUES = Object.freeze({
	LOADING: "loading",
	SUCCESS: "success",
	ERROR: "error",
});

const productSlice = createSlice({
	name: "product",
	initialState: {
		data: [],
		status: STATUES.SUCCESS,
	},
	reducers: {
		getProducts(state, action) {
			state.data = action.payload;
		},
		setStaus(state, action) {
			state.status = action.payload;
		},
	},
});

export const { getProducts, setStaus } = productSlice.actions;
export default productSlice.reducer;

// THUNKS
export function fetchProducts(slug) {
	return async function fetchProductsThunk(dispatch, getState) {
		dispatch(setStaus(STATUES.LOADING));
		try {
			const res = await fetch(slug);
			const data = await res.json();

			dispatch(getProducts(data));
			dispatch(setStaus(STATUES.SUCCESS));
		} catch (error) {
			console.log(error);
			dispatch(setStaus(STATUES.ERROR));
		}
	};
}
