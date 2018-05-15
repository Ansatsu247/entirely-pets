import React, { Component } from 'react';
import Product from './Product.js';

export default function Products(props) {

	return (
		<div className="container">
			<div className="row" id="products">
				{
					props.products.map(function(product) {
						return <Product
										name={product.name}
										url={product.url}
										price={product.price}
										category={product.category}/>;
					})
				}
			</div>
		</div>
	);

}
