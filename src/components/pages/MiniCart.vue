<template>
	<div class="mini_cart">
		<div class="shopping_bag">
			<div
				@click="closed_cart()"
				style="cursor: pointer; transform: rotate(180deg)"
			>
				<svg
					width="10"
					height="16"
					viewBox="0 0 10 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8.93468 14.463C9.01039 14.5381 9.05298 14.6403 9.05298 14.747C9.05298 14.8536 9.01039 14.9558 8.93468 15.0309L8.08681 15.8788C8.01423 15.9561 7.9129 16 7.80685 16C7.7008 16 7.59947 15.9561 7.52689 15.8788L0.176008 8.52792C0.0634705 8.41552 0.000175199 8.26303 3.50226e-05 8.10398L3.50407e-05 7.89602C0.000175245 7.73696 0.0634706 7.58448 0.176008 7.47208L7.52689 0.121197C7.59947 0.043866 7.7008 -1.18212e-07 7.80685 -1.0894e-07C7.9129 -9.96687e-08 8.01423 0.0438661 8.08681 0.121197L8.93468 0.969068C9.01039 1.04416 9.05298 1.14639 9.05298 1.25303C9.05298 1.35966 9.01039 1.46189 8.93468 1.53698L2.47166 8L8.93468 14.463Z"
						fill="black"
					/>
				</svg>
			</div>
			<div class="shopping_bag_title">Shopping Bag</div>
			<div></div>
		</div>
		<div class="mini_cart_items">
			<span class="p-1 text-success mb-2"
				>{{ this.$store.state.cart.length }} items</span
			>
			<div class="mini_cart_item" v-for="item in cart" :key="item.product.id">
				<div class="mini_cart_item_img">
					<img :src="item.product.image" alt="" />
				</div>
				<div class="mini_cart_item_content">
					<div>
						<div class="title">{{ item.product.title }}</div>
						<div class="text">Black / Medium</div>
						<div class="price">{{ item.product.price }}</div>
					</div>
					<div class="qty">
						<el-button-group size="mini">
							<el-button
								type="primary"
								size="mini"
								@click="incrementProduct(item.product)">
								+
								</el-button>
							<el-button size="mini" disabled>{{ item.quantity }}</el-button>
							<el-button type="primary" size="mini" @click="decrementProduct(item.product)">
							-
							</el-button>
						</el-button-group>
					</div>
				</div>
				<div class="mini_cart_item_close" @click="removeProduct(item.product)">
					<svg
						width="8"
						height="8"
						viewBox="0 0 8 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 1.09172L6.90828 7M1 6.90828L6.90828 1"
							stroke="black"
							stroke-width="1.5"
						/>
					</svg>
				</div>
			</div>
			<div class="subtotal">
				<div class="d-flex align-items-center justify-content-between mb-3">
					<span class="subtotal-title"
						>Subtotal ({{ cartSubtotalItems }} items)</span
					>
					<span class="subtotal_price">$ {{ cartTotalPrice }}</span>
				</div>
				<router-link :to="{ name: 'my-cart' }">
					<el-button class="w-100 mb-3">VIEW CART</el-button>
				</router-link>
				<el-button class="w-100" type="danger" @click="clearCartItems">
					Delete Bag
				</el-button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'miniCart',
	data() {
		return {};
	},
	props: {
		closed_cart: {
			type: Function,
		},
	},
	methods: {
		removeProduct(product) {
			this.$store.dispatch('removeProductFromCart', product);
		},
		clearCartItems() {
			this.$store.dispatch('clearCartItems');
		},
		incrementProduct(product) {
			this.$store.dispatch('incrementProduct', product);
		},
		decrementProduct(product) {
			this.$store.dispatch('decrementProduct', product);
		},
	},
	computed: {
		cart() {
			return this.$store.state.cart;
		},
		cartTotalPrice() {
			return this.$store.getters.cartTotalPrice;
		},
		cartSubtotalItems() {
			return this.$store.getters.cartSubtotalItems;
		},
	},
	created() {},
};
</script>

<style lang="scss" scoped>
.mini_cart {
	position: fixed;
	top: 0;
	right: 0;
	width: 300px;
	height: 100vh;
	background-color: white;
	z-index: 9999;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	transform: translateX(100%);
	transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	padding: 16px;
	padding-bottom: 0px !important;
	overflow-y: auto;
}
.mini_cart.mini_cart_active {
	transform: translateX(0);
}
.shopping_bag {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.shopping_bag_title {
	font-size: 16px;
	line-height: 20px;
	font-weight: bold;
	color: #18a058;
}
.mini_cart_items {
	margin-top: 27px;
}
.mini_cart_item_img {
	width: 90px;
	height: 90px;
}
.mini_cart_item {
	display: flex;
	justify-content: space-between;
	margin-bottom: 24px;
}
.mini_cart_item_img img {
	width: 100%;
	height: 100%;
}
.mini_cart_item_content {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 1;
	margin-left: 8px;
}
.mini_cart_item_content .title {
	font-weight: 700;
	font-size: 14px;
	line-height: 20px;
	color: #232c3c;
}
.mini_cart_item_content .text {
	font-weight: 500;
	font-size: 12px;
	line-height: 20px;
	color: #95abc6;
}
.mini_cart_item_content .price {
	font-weight: 500;
	font-size: 12px;
	line-height: 20px;
	color: #000;
}
.mini_cart_item_close {
	cursor: pointer;
	display: inline-flex;
}
.qty {
	display: flex;
	align-items: center;
}
.qty span {
	font-weight: 500;
	font-size: 12px;
	line-height: 20px;
	color: #707070;
}
.subtotal {
	position: sticky;
	left: 0;
	bottom: 0;
	width: 100%;
	background-color: white;
	padding: 28px 16px;
	z-index: 100;
}
</style>
