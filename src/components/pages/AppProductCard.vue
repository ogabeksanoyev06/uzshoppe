<template>
	<div class="d-flex" v-if="product">
		<div class="product-item">
			<router-link :to="{ name: 'product', params: { id: product.id } }">
				<div class="product_item_img">
					<img :src="product.image" />
				</div>
			</router-link>
			<div class="fBtn d-flex justify-content-between">
				<button class="add_cart_btn" @click="addToCart">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M21 16H7C6.73478 16 6.48043 15.8946 6.29289 15.7071C6.10536 15.5196 6 15.2652 6 15C6 14.7348 6.10536 14.4804 6.29289 14.2929C6.48043 14.1054 6.73478 14 7 14H17.44C18.1087 14 18.7582 13.7767 19.2854 13.3654C19.8126 12.9542 20.1873 12.3786 20.35 11.73L22 5.24C22.0375 5.09241 22.0407 4.93821 22.0095 4.78917C21.9783 4.64013 21.9135 4.50018 21.82 4.38C21.7227 4.25673 21.5978 4.1581 21.4554 4.09208C21.3129 4.02606 21.1569 3.99452 21 4H6.76C6.55369 3.41645 6.17193 2.911 5.66707 2.55294C5.1622 2.19488 4.55894 2.00174 3.94 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3C2 3.26522 2.10536 3.51957 2.29289 3.70711C2.48043 3.89464 2.73478 4 3 4H3.94C4.16843 3.99334 4.39226 4.06513 4.57421 4.20341C4.75615 4.34169 4.88525 4.53812 4.94 4.76L5 5.24L6.73 12C5.93435 12.0358 5.18551 12.3862 4.64822 12.9741C4.11093 13.5621 3.8292 14.3394 3.865 15.135C3.9008 15.9306 4.25121 16.6795 4.83914 17.2168C5.42707 17.7541 6.20435 18.0358 7 18H7.18C7.01554 18.4531 6.96269 18.9392 7.02593 19.4171C7.08917 19.895 7.26665 20.3506 7.54332 20.7454C7.81999 21.1401 8.18772 21.4624 8.61535 21.6849C9.04299 21.9074 9.51795 22.0235 10 22.0235C10.4821 22.0235 10.957 21.9074 11.3846 21.6849C11.8123 21.4624 12.18 21.1401 12.4567 20.7454C12.7334 20.3506 12.9108 19.895 12.9741 19.4171C13.0373 18.9392 12.9845 18.4531 12.82 18H15.18C15.0155 18.4531 14.9627 18.9392 15.0259 19.4171C15.0892 19.895 15.2666 20.3506 15.5433 20.7454C15.82 21.1401 16.1877 21.4624 16.6154 21.6849C17.043 21.9074 17.5179 22.0235 18 22.0235C18.4821 22.0235 18.957 21.9074 19.3846 21.6849C19.8123 21.4624 20.18 21.1401 20.4567 20.7454C20.7334 20.3506 20.9108 19.895 20.9741 19.4171C21.0373 18.9392 20.9845 18.4531 20.82 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM19.72 6L18.41 11.24C18.3552 11.4619 18.2262 11.6583 18.0442 11.7966C17.8623 11.9349 17.6384 12.0067 17.41 12H8.78L7.28 6H19.72ZM10 20C9.80222 20 9.60888 19.9414 9.44443 19.8315C9.27998 19.7216 9.15181 19.5654 9.07612 19.3827C9.00043 19.2 8.98063 18.9989 9.01921 18.8049C9.0578 18.6109 9.15304 18.4327 9.29289 18.2929C9.43275 18.153 9.61093 18.0578 9.80491 18.0192C9.99889 17.9806 10.2 18.0004 10.3827 18.0761C10.5654 18.1518 10.7216 18.28 10.8315 18.4444C10.9414 18.6089 11 18.8022 11 19C11 19.2652 10.8946 19.5196 10.7071 19.7071C10.5196 19.8946 10.2652 20 10 20ZM18 20C17.8022 20 17.6089 19.9414 17.4444 19.8315C17.28 19.7216 17.1518 19.5654 17.0761 19.3827C17.0004 19.2 16.9806 18.9989 17.0192 18.8049C17.0578 18.6109 17.153 18.4327 17.2929 18.2929C17.4327 18.153 17.6109 18.0578 17.8049 18.0192C17.9989 17.9806 18.2 18.0004 18.3827 18.0761C18.5654 18.1518 18.7216 18.28 18.8315 18.4444C18.9414 18.6089 19 18.8022 19 19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5196 19.8946 18.2652 20 18 20Z"
							fill="#95ABC6"
						/>
					</svg>
				</button>
				<button class="favorite_btn" @click="addToFavorites">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20.4578 4.59133C19.9691 4.08683 19.3889 3.68663 18.7503 3.41358C18.1117 3.14054 17.4272 3 16.7359 3C16.0446 3 15.3601 3.14054 14.7215 3.41358C14.0829 3.68663 13.5026 4.08683 13.0139 4.59133L11.9997 5.63785L10.9855 4.59133C9.99842 3.57276 8.6596 3.00053 7.26361 3.00053C5.86761 3.00053 4.52879 3.57276 3.54168 4.59133C2.55456 5.6099 2 6.99139 2 8.43187C2 9.87235 2.55456 11.2538 3.54168 12.2724L4.55588 13.3189L11.9997 21L19.4436 13.3189L20.4578 12.2724C20.9467 11.7681 21.3346 11.1694 21.5992 10.5105C21.8638 9.85148 22 9.14517 22 8.43187C22 7.71857 21.8638 7.01225 21.5992 6.35328C21.3346 5.69431 20.9467 5.09559 20.4578 4.59133Z"
							fill="#fff"
							stroke="#FF5454"
							stroke-width="2.1"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
			<div class="product_item_title">{{ titleSlice(product.title) }}</div>
			<div class="product_item_price">$ {{ product.price }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AppProductCard',
	data() {
		return {};
	},
	props: {
		product: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	methods: {
		addToCart() {
			this.$store.dispatch('addProductToCart', {
				product: this.product,
				quantity: 1,
			});
		},
		addToFavorites() {
			this.$store.dispatch('myFavoritesCart', {
				product: this.product,
				quantity: 1,
			});
		},
		titleSlice(text) {
			if (text.length > 25) {
				return text.slice(0, 35) + '...';
			} else {
				return text;
			}
		},
	},
	computed: {},
	mounted() {},
};
</script>

<style lang="scss" scoped>
.product-item {
	width: 250px;
	height: 360px;
	border: 1px solid #e5ecf5;
	border-radius: 10px;
	padding: 15px;
	margin-right: 10px;
	margin-bottom: 10px;
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;
	overflow: hidden;
}
.product-item:hover {
	border: 1px solid transparent;
	box-shadow: 0px 8px 36px rgba(70, 93, 122, 0.08);
}
.product_item_img {
	width: 100%;
	height: 200px;
	margin-bottom: 12px;
}
.product_item_img img {
	width: 100%;
	height: 100%;
}
.product_item_title {
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
	color: #232c3c;
	margin-top: 12px;
}
.btn-add-cart {
	position: absolute;
	bottom: 0;
	right: 0;
	width: 100%;
	transform: translateY(100%);
	transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.product-item:hover .btn-add-cart {
	transform: translateY(0);
}
.fBtn button {
	outline: none;
	border: none;
	width: 80px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	text-align: center;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
	border-radius: 5px;
	transition: box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.fBtn button:hover {
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.08);
}
</style>
