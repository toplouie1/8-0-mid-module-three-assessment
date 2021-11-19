import "./App.css";
import data from "./data/productData.js";
import { Component } from "react";

class App extends Component {
	constructor() {
		super();
		this.state = {
			productList: data,
			name: "",
			price: "",

			subTotal: "$00.00",
			tax: "$00.00",
			total: "$00.00",

			creditCard: "",
			zipCode: "",
		};
	}

	buyNow = (e) => {
		e.preventDefault();
		if (this.creditCard === 16 && this.zipCode === 5) {
			alert("Purchase complete");
		} else if (this.zipCode !== 5) {
			alert("Zip code is not valid");
		} else if (this.creditCard !== 16) {
			alert("Credit card number is not valid");
		}
	};

	// adding the value for the credit card
	creditCardCheck = (e) => {
		console.log(this.state.creditCard);
		this.setState({
			creditCard: e.target.value,
		});
	};

	// adding the value for the zip code
	zipCheck = (e) => {
		this.setState({
			zipCode: e.target.value,
		});
	};

	// adding li and the cart items
	addToCart = (e) => {
		this.setState({
			name: e.target.value,
			price: e.target.value,
		});
		let splitted = this.state.name.name.split(",");
		console.log(splitted);
	};

	render() {
		//we will show each product
		let productList = this.state.productList.map((product) => {
			const formatPrice = (price) => `$${price.toFixed(2)}`;
			const formPrice = formatPrice(product.price);

			return (
				<div>
					<div>{product.name}</div>
					<div>Price: {formPrice}</div>
					<button value={product.id} onClick={this.addToCart}>
						Add To Cart
					</button>
					<img src={product.img} alt="each product" />
					<div>{product.description}</div>
				</div>
			);
		});

		let cartList = () => {
			return (
				<div>
					<ul>
						<li>
							{this.state.name}
							{this.state.price}
						</li>
					</ul>
				</div>
			);
		};

		return (
			<div class="container">
				<div className="products"> {productList}</div>
				{/* list cart  */}

				<div className="cart">
					<div>Cart</div>
					{cartList}
					<div>Subtotal: {this.state.subTotal}</div>
					<div>Tax: {this.state.tax}</div>
					<div>Total: {this.state.total}</div>
				</div>

				{/* check out form  */}

				<form onSubmit={this.buyNow} id="checkout">
					Checkout
					<label htmlFor="name">First Name</label>
					<input type="text" id="name" />
					<label htmlFor="lastName">Last Name</label>
					<input type="text" id="lastName" />
					<label htmlFor="email">Email</label>
					<input type="text" id="email" />
					<label htmlFor="creditCard">Credit Card</label>
					<input type="text" id="creditCard" onInput={this.creditCardCheck} />
					<label htmlFor="zip">Zip Code</label>
					<input type="text" id="zip" onInput={this.zipCheck} />
					<button type="submit">Buy Now</button>
				</form>
			</div>
		);
	}
}

export default App;
