import React from 'react';
import ProductCard from '../Components/ProductCard';
import { useProducts } from '../Context/ProductProvider';

const Cart = () => {
	const {
		productsState: { cart, loading, error },
	} = useProducts();

	let content;
	if (loading) {
		content = (
			<p className="text-green-500 font-medium text-xl">Loading...</p>
		);
	}

	if (error) {
		content = (
			<p className="text-red-500 font-medium text-xl">
				Something is wrong...
			</p>
		);
	}

	if (!loading && !error && !cart.length) {
		content = (
			<p className="text-emerald-500 font-medium text-xl">
				Nothing to show. The product List is empty.
			</p>
		);
	}

	if (!loading && !error && cart.length) {
		content = cart.map((product) => (
			<ProductCard key={product.model} product={product} />
		));
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
			{content}
		</div>
	);
};

export default Cart;
