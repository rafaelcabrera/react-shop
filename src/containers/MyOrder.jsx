import React , {useContext} from 'react';
import AppContext from '../context/AppContext'
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';
import flechita from '../assets/icons/flechita.svg'

const MyOrder = () => {
	const {state} = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
			const sum = state.cart.reduce(reducer, 0);
			return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product,index) =>
				<OrderItem product={product}
							indexValue={index}
						   key={index}/> //le asigno un nombre especifico para que no se repita el key	
					)}
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
