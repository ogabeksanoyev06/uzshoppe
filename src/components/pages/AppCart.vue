<template>
	<div class="cart">
		<div class="container">
			<div class="cart_title">{{$t("message.pageTitle3")}}</div>
			<div
				v-if="!cart.length"
				class="noData d-flex flex-column align-items-center"
			>
				<img src="@/assets/image/shoppingCart.9c0394b.png" class="img-fluid" />
				<p>Savatchangiz bo'shmi? Muammo yo'q!</p>
				<p class="noText">
					Bizning katalogimizdan keng assortimentidan mahsulot tanlashni
					boshlang.
				</p>
				<router-link :to="{ name: 'shop' }">
					<el-button type="warning">Marhamat</el-button>
				</router-link>
			</div>
			<div class="row" v-else>
				<div class="col-md-8">
					<div class="cart_items w-100">
						<div
							class="cart_item d-flex"
							v-for="item in cart"
							:key="item.product.id"
						>
							<div class="cart_item_image">
								<img :src="item.product.image" alt="" />
							</div>
							<div class="cart_item_info cart_item_info_desk ">
								<span class="info_name">{{ item.product.title }}</span>
								<span class="info_text">{{ item.product.description }}</span>
								<span class="info_price">$ {{ item.product.price }}</span>
							</div>
							<div class="cart_item_quantity cart_item_quantity_desk">
								<el-button-group size="mini">
									<el-button type="primary" size="mini" @click="incrementProduct(item.product)">+</el-button>
									<el-button  size="mini" disabled>{{ item.quantity }}</el-button >
									<el-button type="primary" size="mini" @click="decrementProduct(item.product)">-</el-button>
								</el-button-group>
							</div>
							<div
								class="cart_item_remove"
								@click="removeProduct(item.product)"
							>
								<svg
									width="18"
									height="18"
									viewBox="0 0 18 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M9 0C4.03734 0 0 4.03734 0 9C0 13.9627 4.03734 18 9 18C13.9627 18 18 13.9627 18 9C18 4.03734 13.9627 0 9 0ZM9 16.7143C4.74637 16.7143 1.28568 13.2536 1.28568 9C1.28568 4.74637 4.74637 1.28568 9 1.28568C13.2536 1.28568 16.7143 4.74637 16.7143 9C16.7143 13.2536 13.2536 16.7143 9 16.7143Z"
										fill="#95ABC6"
									/>
									<path
										d="M12.214 5.14294C12.0495 5.14294 11.885 5.2057 11.7595 5.33135L5.33096 11.7599C5.07978 12.011 5.07978 12.4178 5.33096 12.6688C5.582 12.9199 5.9889 12.92 6.23994 12.6688L12.6685 6.24034C12.9196 5.98916 12.9196 5.58239 12.6685 5.33135C12.5429 5.2057 12.3786 5.14294 12.214 5.14294V5.14294Z"
										fill="#95ABC6"
									/>
									<path
										d="M5.78538 5.14289C5.62086 5.14289 5.45648 5.20565 5.33096 5.3313C5.07978 5.58234 5.07978 5.98925 5.33096 6.24028L11.7595 12.6688C12.0106 12.92 12.4174 12.92 12.6685 12.6688C12.9195 12.4178 12.9196 12.0109 12.6685 11.7598L6.23994 5.3313C6.11442 5.20565 5.9499 5.14289 5.78538 5.14289V5.14289Z"
										fill="#95ABC6"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="cart_totals">
						<div class="cart_total_title">Cart totals</div>
						<div
							class="d-flex justify-content-between"
							style="margin-bottom: 15px"
						>
							<div class="subtotal">SUBTOTAL</div>
							<div class="subtotal_price">$ {{ cartTotalPrice }}</div>
						</div>
						<div
							class="d-flex justify-content-between"
							style="margin-bottom: 15px"
						>
							<div class="subtotal">TOTAL</div>
							<div class="subtotal_price">$ {{ cartTotalPrice + 10 }}</div>
						</div>
						<div style="padding: 15px">
							<el-button size="medium" class="w-100">PROCEED TO CHECKOUT</el-button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'myCart',
	components: {},
	data() {
		return {};
	},
	methods: {
		removeProduct(product) {
			this.$store.dispatch('removeProductFromCart', product);
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
	},
	mounted() {},
};
</script>
<style scoped>
.cart_item {
	position: relative;
	margin-bottom: 40px;
	padding: 15px;
	border-radius: 9px 9px 0px 0px;
	border: 1px solid #e5ecf5;
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;
}
.cart_item:hover {
	box-shadow: 0px 8px 36px rgba(70, 93, 122, 0.08);
	background: #fff;
	border: 1px solid transparent;
	border-radius: 10px;
}
.cart_item::before {
	position: absolute;
	content: '';
	bottom: -20px;
	left: 0;
	width: 100%;
	height: 1px;
	background-color: #e5ecf5;
}
.cart_title {
	font-weight: 600;
	font-size: 30px;
	line-height: 36px;
	color: #232c3c;
	margin: 40px 0;
}
.cart_item_image {
	width: 140px;
	height: 140px;
	margin-right: 30px;
}
.cart_item_image img {
	width: 100%;
	height: 100%;
}
.cart_item_info {
	flex: 1;
}
.cart_item_info .info_name {
	font-weight: 400;
	font-size: 18px;
	line-height: 24px;
	margin-bottom: 14px;
	color: #232c3c;
	display: block;
}
.cart_item_info .info_text {
	font-weight: 400;
	font-size: 16px;
	line-height: 27px;
	color: #95abc6;
	margin-bottom: 2px;
	display: block;
}
.cart_item_info .info_price {
	font-weight: 400;
	font-size: 16px;
	line-height: 27px;
	color: #00d06c;
	display: block;
}
.cart_item_quantity {
	margin: 0 25px;
}
.cart_item_remove {
	display: flex;
	cursor: pointer;
}
.cart_totals {
	background: #ffffff;
	box-shadow: 0px 8px 20px rgba(70, 93, 122, 0.08);
	border-radius: 10px;
}
.cart_total_title {
	font-weight: 400;
	font-size: 26px;
	line-height: 25px;
	color: #fff;
	margin-bottom: 40px;
	background: linear-gradient(279.37deg, #008ae4 0%, #a6dcff 158.68%);
	border-radius: 9px 9px 0px 0px;
	padding: 15px;
}
.subtotal {
	font-weight: 400;
	font-size: 16px;
	line-height: 27px;
	color: #000;
	padding-left: 15px;
}
.subtotal_price {
	font-weight: 400;
	font-size: 16px;
	line-height: 27px;
	color: #232c3c;
	padding-right: 15px;
}
.shipping_text {
	font-weight: 400;
	font-size: 16px;
	line-height: 27px;
	color: #707070;
	margin-bottom: 30px;
	max-width: 300px;
}
.noData .noText {
	font-weight: 500;
	font-size: 16px;
	line-height: 18px;
	text-align: center;
	color: #95abc6;
}
.noData p:nth-child(2) {
	font-weight: 700;
	font-size: 30px;
	line-height: 38px;
	display: flex;
	align-items: center;
	color: #232c3c;
	text-align: center;
	margin-top: 20px;
	max-width: 500px;
}
@media (max-width: 400px) {
	.cart_item_image {
		width: 100px;
		height: 100px;
		margin-right: 5px;
	}
	.cart_total_title {
		padding: 10px;
		font-size: 20px;
	}
	.cart_item_info .info_name {
		font-size: 16px;
		line-height: 16px;
		margin-bottom: 10px;
	}
	.cart_item_info .info_text {
		font-size: 14px;
		line-height: 10px;
		margin-bottom: 4px;
	}
	.cart_item_info .info_price {
		font-size: 12px;
		line-height: 12px;
	}
	.cart_item_quantity {
		margin: 0 5px;
	}
	.cart_item {
		padding: 10px;
	}
	.noFavorite p:nth-child(2) {
		font-size: 20px;
		font-weight: 600;
		line-height: 30px;
	}
}

@media (min-width: 769px) {
	.cart_totals {
		position: sticky;
		top: 60px;
	}
}
@media (max-width:1200px){
	.cart_item_info_desk,
	.cart_item_quantity_desk{
		display:none;
	}
	.cart_item_remove{
		flex:1;
		justify-content:flex-end;
	}
}
</style>
