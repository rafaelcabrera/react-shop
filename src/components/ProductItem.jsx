// import React, {useState} from 'react'; ya no la necesitamos luego del context
import React, {useContext} from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext'
import addToCartImage from '../assets/icons/bt_add_to_cart.svg'
import useInitialState from '../hooks/useInitialState'

const ProductItem = ({product}) => {

	const {addToCart} = useContext(AppContext)

	const handleClick = item => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick ={()=> handleClick(product)} >
					<img src={addToCartImage} alt="Add to Cart" />
				</figure>
				
			</div>
		</div>
	);
}

export default ProductItem;
