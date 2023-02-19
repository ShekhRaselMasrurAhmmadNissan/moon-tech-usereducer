import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { actionTypes } from '../States/ProductState/ActionTypes';
import {
	productInitialState,
	productReducer,
} from '../States/ProductState/ProductReducer';

const PRODUCT_CONTEXT = createContext();
const ProductProvider = ({ children }) => {
	const [productsState, productDispatch] = useReducer(
		productReducer,
		productInitialState
	);

	console.log(productsState);

	useEffect(() => {
		productDispatch({ type: actionTypes.FETCHING_START });
		fetch('http://localhost:5000/products')
			.then((res) => res.json())
			.then((data) =>
				productDispatch({
					type: actionTypes.FETCHING_SUCCESS,
					payload: data.data,
				})
			)
			.catch(() => productDispatch({ type: actionTypes.FETCHING_ERROR }));
	}, []);

	const value = { productsState, productDispatch };

	return (
		<PRODUCT_CONTEXT.Provider value={value}>
			{children}
		</PRODUCT_CONTEXT.Provider>
	);
};

export const useProducts = () => {
	const context = useContext(PRODUCT_CONTEXT);
	return context;
};

export default ProductProvider;
