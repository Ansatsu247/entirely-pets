import React, { Component } from 'react';
import '../css/product.css';

export default function Product(props) {

	const url = `${props.url}`;

	return (
		<div className="col-md-3">
			<div className="product">
				<div className="thumbnail-container">
					<img src={url} alt={props.title}/>
				</div>
				<div className="product-title">{props.name}</div>
				<div className="product-price">{props.price}</div>
			</div>
		</div>
	);

}
