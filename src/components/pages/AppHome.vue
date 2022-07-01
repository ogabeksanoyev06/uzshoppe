<template>
	<div class="home">
		<div class="container">
			<el-input
				type="text"
				class="searchP d-none"
				placeholder="Search product"
				clearable
			/>
			<!-- reklama -->
			<div class="mt-3">
				<!-- <n-carousel :space-between="10" draggable autoplay>
					<img class="carousel-img" src="@/assets/image/Img01.png" />
					<img class="carousel-img" src="@/assets/image/Img02.png" />
					<img class="carousel-img" src="@/assets/image/Img01.png" />
				</n-carousel> -->
			</div>
			<!-- malumot shoppe -->
			<div class="mt-5">
				<div class="shoppe_as">
					<div class="shoppe_us_items row">
						<div
							class="shoppe-us_item mb-3 col-12 col-md-4 d-flex flex-column align-items-center"
							v-for="item in shoppeUs"
							:key="item.id"
						>
							<img :src="require('@/assets/image/' + item.img)" alt="" />
							<h5 class="fw-bolder">{{ $t(item.title) }}</h5>
							<p>
								{{ item.text }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AppHome',
	components: {},
	data() {
		return {
			shoppeUs: [
				{
					id: 0,
					title: 'Boy assortiment',
					text: 'In terms of the abundance of assortment, our online store is in no way inferior to large supermarkets.',
					img: '4.png',
				},
				{
					id: 1,
					title: 'Time saving',
					text: 'You can, without leaving your office, choose the necessary goods from our online store for your home and office.',
					img: '5.png',
				},
				{
					id: 2,
					title: 'Stock',
					text: 'We constantly hold promotions and seasonal sales. The corresponding discounts are marked on the website with special stickers.',
					img: '6.png',
				},
				{
					id: 3,
					title: 'Affordable prices',
					text: 'Only for you - cheaper than in supermarkets and shops! Eliminating the cost of renting a room allows us to reduce the price, so the products in our online store are cheaper than in a standard supermarket.',
					img: '7.png',
				},
				{
					id: 4,
					title: 'Quality control',
					text: 'Direct contracts and deliveries from leading manufacturers, thanks to which you receive only high-quality food delivered to your home and office.',
					img: '8.png',
				},
				{
					id: 5,
					title: 'Fast shipping',
					text: 'When buying goods up to 200,000 soums, delivery is carried out for 9,000 soums within the city of Tashkent. The minimum order amount is 100,000 soums. Your chosen products will be delivered directly to your door.',
					img: '9.png',
				},
				{
					id: 6,
					title: 'Payment Methods',
					text: 'You can pay for your purchases not only in cash, but also with a plastic card, transfer and through the Payme system. All couriers of the Shoppe online store have a terminal for paying with cards.',
					img: '10.png',
				},
				{
					id: 7,
					title: 'Conveniently',
					text: 'For your convenience, our online store has developed an improved order processing and product delivery system. Just add the product to the shopping cart on the site, or place an order by phone and order delivery.',
					img: '11.png',
				},
				{
					id: 8,
					title: 'Catalog',
					text: 'Convenient catalog, where it is easy to choose and pleasant to buy!',
					img: '12.png',
				},
			],
		};
	},
	methods: {},
	mounted() {},
	created() {},
};
</script>

<style lang="scss" scoped>
.carousel-img {
	width: 100%;
	border-radius: 10px;
	object-fit: cover;
	object-position: right;
	height: 500px;
}
.shoppe-us_item img {
	height: 70px;
}
.shoppe-us_item h5 {
	font-size: 20px;
	font-weight: 700;
	color: rgb(31, 34, 37);
	margin: 10px 0;
	text-align: center;
}
.shoppe-us_item p {
	font-size: 14px;
	color: rgb(51, 54, 57);
	text-align: center;
}

@media (max-width: 426px) {
	.carousel-img {
		height: 240px;
	}
	.searchP {
		display: block !important;
	}
}
</style>
