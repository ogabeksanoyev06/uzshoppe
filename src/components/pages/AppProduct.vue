<template>
	<div class="product" v-if="product">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-5 d-flex justify-content-center">
					<div class="product_carusel_img w-100">
						<el-carousel :interval="5000" arrow="always" style="max-width: 100%">
							<el-carousel-item v-for="item in 4" :key="item">
								<img :src="product.image" alt="">
							</el-carousel-item>
						</el-carousel>
					</div>
				</div>
				<div class="col-md-6 offset-md-1">
					<div class="product_info">
						<div class="product_item_title" style="margin-bottom: 13px">
							{{ product.title }}
						</div>
						<div class="product_item_price" style="margin-bottom: 30px">
							{{ product.price }}
						</div>
						<div class="d-flex" style="margin-bottom: 20px">
							<el-rate disabled disabled-void-color="#ff9900" />
							<span class="ms-2 review">1 customer review</span>
						</div>
						<div class="product_description" style="margin-bottom: 38px">
							<p class="review">
								{{ product.description }}
							</p>
						</div>
						<div class="product_buttons" style="margin-bottom: 50px">
							<el-button
								size="medium"
								class="w-75"
								@click="addToCart"
							>
								ADD TO CART
							</el-button>
						</div>
						<div class="product_icons" style="margin-bottom: 25px">
							<ul class="d-flex align-items-center p-0">
								<li>
									<router-link to="/">
										<svg
											width="20"
											height="18"
											viewBox="0 0 20 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M9.88013 2.01405C11.0249 0.77861 12.6287 0.0520888 14.3262 0C17.3273 0 19.7603 2.39588 19.7603 5.35135C19.7603 8.85038 15.8104 12.6852 13.4415 14.9851C13.2282 15.1921 13.0278 15.3868 12.8442 15.5676L10.5915 17.7859C10.4527 17.9228 10.2643 17.9998 10.0678 18H9.6924C9.49594 17.9998 9.30759 17.9228 9.16876 17.7859L6.91609 15.5676C6.73248 15.3868 6.53202 15.1921 6.31874 14.9851C3.94983 12.6852 0 8.85038 0 5.35135C0 2.39588 2.43292 0 5.43407 0C7.13157 0.0520888 8.73538 0.77861 9.88013 2.01405ZM9.88027 15.7328L12.0539 13.6215C14.0596 11.6756 17.7844 8.03664 17.7844 5.35123C17.7844 4.44299 17.416 3.57235 16.7611 2.93287C16.1061 2.29339 15.2189 1.93805 14.2967 1.94583C12.7606 2.08626 11.3741 2.91055 10.5324 4.18367C10.4381 4.30499 10.2923 4.37677 10.1372 4.37826H9.69255C9.46171 4.37765 9.24364 4.27385 9.09974 4.0961C8.27139 2.8699 6.92358 2.07925 5.43421 1.94583C3.52439 1.94583 1.97617 3.47048 1.97617 5.35123C1.97617 8.03664 5.70098 11.6756 7.70664 13.6215L9.88027 15.7328Z"
												fill="#DD202C"
											/>
										</svg>
									</router-link>
								</li>
								<li class="mx-4 ms-1">
									<svg
										width="1"
										height="20"
										viewBox="0 0 1 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<line
											x1="0.5"
											y1="2.18557e-08"
											x2="0.499999"
											y2="19.4965"
											stroke="#D8D8D8"
										/>
									</svg>
								</li>
								<li>
									<svg
										width="22"
										height="18"
										viewBox="0 0 22 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M19.125 0.947266H2.125C0.951395 0.947266 0 1.84859 0 2.96043V15.0394C0 16.1512 0.951395 17.0526 2.125 17.0526H19.125C20.2986 17.0526 21.25 16.1512 21.25 15.0394V2.96043C21.25 1.84859 20.2986 0.947266 19.125 0.947266ZM19.125 2.96045V5.87953L11.3156 11.0634C10.9003 11.3365 10.3497 11.3365 9.93437 11.0634L2.125 5.87953V2.96045H19.125ZM2.125 7.99332V15.0394H19.125V7.99332L12.3781 12.4626C11.3252 13.1598 9.92476 13.1598 8.87187 12.4626L2.125 7.99332Z"
											fill="#707070"
										/>
									</svg>
								</li>
								<li>
									<svg
										width="10"
										height="18"
										viewBox="0 0 10 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M9.5 2.84211H6.5C5.94772 2.84211 5.5 3.26626 5.5 3.78948V6.63159H9.5C9.61374 6.62919 9.7216 6.67932 9.78923 6.766C9.85685 6.85267 9.87578 6.96507 9.84 7.06738L9.1 9.15159C9.03181 9.34288 8.84312 9.47219 8.63 9.47369H5.5V16.579C5.5 16.8406 5.27614 17.0526 5 17.0526H2.5C2.22386 17.0526 2 16.8406 2 16.579V9.47369H0.5C0.223858 9.47369 0 9.26162 0 9.00001V7.10527C0 6.84366 0.223858 6.63159 0.5 6.63159H2V3.78948C2 1.69661 3.79086 0 6 0H9.5C9.77614 0 10 0.212076 10 0.473685V2.36842C10 2.63003 9.77614 2.84211 9.5 2.84211Z"
											fill="#707070"
										/>
									</svg>
								</li>
								<li>
									<svg
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M13 0.947266H5C2.23858 0.947266 0 3.06802 0 5.68411V13.2631C0 15.8792 2.23858 17.9999 5 17.9999H13C15.7614 17.9999 18 15.8792 18 13.2631V5.68411C18 3.06802 15.7614 0.947266 13 0.947266ZM16.25 13.2631C16.2445 14.9614 14.7926 16.3369 13 16.3421H5C3.20735 16.3369 1.75549 14.9614 1.75 13.2631V5.68413C1.75549 3.98583 3.20735 2.61037 5 2.60517H13C14.7926 2.61037 16.2445 3.98583 16.25 5.68413V13.2631ZM13.75 5.92094C14.3023 5.92094 14.75 5.49679 14.75 4.97358C14.75 4.45038 14.3023 4.02623 13.75 4.02623C13.1977 4.02623 12.75 4.45038 12.75 4.97358C12.75 5.49679 13.1977 5.92094 13.75 5.92094ZM8.99999 5.21051C6.51472 5.21051 4.5 7.11918 4.5 9.47365C4.5 11.8281 6.51472 13.7368 8.99999 13.7368C11.4853 13.7368 13.5 11.8281 13.5 9.47365C13.5027 8.34223 13.0294 7.25641 12.1849 6.45637C11.3404 5.65633 10.1943 5.20799 8.99999 5.21051ZM6.25 9.47361C6.25 10.9125 7.48122 12.0789 9 12.0789C10.5188 12.0789 11.75 10.9125 11.75 9.47361C11.75 8.03477 10.5188 6.86835 9 6.86835C7.48122 6.86835 6.25 8.03477 6.25 9.47361Z"
											fill="#707070"
										/>
									</svg>
								</li>
								<li>
									<svg
										width="20"
										height="18"
										viewBox="0 0 20 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M19.9708 3.28138C19.4547 3.9335 18.8309 4.50235 18.1235 4.96596C18.1235 5.13632 18.1235 5.30667 18.1235 5.48648C18.1292 8.58004 16.8249 11.5464 14.5029 13.7205C12.181 15.8945 9.03567 17.0945 5.77211 17.0514C3.88538 17.0574 2.02281 16.6493 0.330301 15.859C0.239042 15.8212 0.18018 15.7357 0.180527 15.6413V15.5372C0.180527 15.4013 0.296758 15.2911 0.440136 15.2911C2.29475 15.2332 4.0832 14.624 5.55244 13.5498C3.87376 13.5177 2.36338 12.5756 1.66829 11.127C1.63318 11.0479 1.64411 10.9571 1.69713 10.8875C1.75016 10.818 1.83761 10.7796 1.9279 10.7863C2.43809 10.8349 2.95337 10.7899 3.44561 10.6538C1.59249 10.2894 0.200074 8.8319 0.000797149 7.04803C-0.00628542 6.96246 0.0341943 6.87957 0.107613 6.82931C0.181031 6.77906 0.276775 6.76869 0.360256 6.80197C0.857554 7.00986 1.39439 7.11935 1.93788 7.12375C0.314106 6.11407 -0.387258 4.19364 0.230452 2.44855C0.294214 2.27898 0.447402 2.15371 0.633723 2.11878C0.820043 2.08385 1.01201 2.14441 1.13908 2.2782C3.33027 4.48754 6.34099 5.80407 9.53645 5.95022C9.4546 5.6408 9.41434 5.32281 9.41663 5.00382C9.44652 3.33119 10.5389 1.84117 12.1825 1.23134C13.826 0.621516 15.6953 1.01257 16.9153 2.22142C17.747 2.07133 18.551 1.80669 19.3018 1.43591C19.3568 1.40338 19.4265 1.40338 19.4815 1.43591C19.5158 1.48803 19.5158 1.55413 19.4815 1.60626C19.1178 2.39518 18.5035 3.05687 17.7241 3.49905C18.4066 3.42407 19.0771 3.27155 19.7211 3.04478C19.7754 3.00981 19.8466 3.00981 19.9009 3.04478C19.9463 3.06447 19.9802 3.10212 19.9937 3.14771C20.0072 3.1933 19.9988 3.2422 19.9708 3.28138Z"
											fill="#707070"
										/>
									</svg>
								</li>
							</ul>
						</div>
						<div class="product_item_title" style="margin-bottom: 6px">
							SKU: <span class="review">12</span>
						</div>
						<div class="product_item_price">
							Categories:
							<span class="review">{{ product.category }}</span>
						</div>
					</div>
				</div>
			</div>
			<!-- tabs -->
			<div class="tabs_content">
				<el-tabs v-model="activeName">
					<el-tab-pane label="Description" name="first">
						<p>{{ product.description }}</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
							ratione, ad voluptatem quo, adipisci sequi beatae voluptate animi
							consectetur expedita tempora. Atque, doloribus autem accusantium
							asperiores minus mollitia enim fugit.
						</p>
					</el-tab-pane>
					<el-tab-pane label="Aditional information" name="second">
						<ul class="Aditional">
							<li>Weight: <span>0.3 kg</span></li>
							<li>Dimentions: <span>15 x 10 x 1 cm</span></li>
							<li>Colours: <span>Black, Browns, White</span></li>
							<li>Material: <span>Metal</span></li>
						</ul>
					</el-tab-pane>
					<el-tab-pane label="Reviews" tab="third">
						<div class="Reviews">
							<div class="row">
								<div class="col-md-6">
									<div class="review_items mb">
										<div class="mb">
											<span class="review_title">
												{{reviewComments.length}} Reviews for lira earings
											</span>
										</div>
										<div
											class="review_item"
											v-for="(reviewComment, i) in reviewComments"
											:key="i"
										>
											<div class="d-flex align-items-center">
												<span class="name" @click="removeRivewComment(i)">
													{{ reviewComment.name }}
												</span>
												<span class="day"> 21.06.2020 </span>
											</div>
											<div class="rate">
												<el-rate disabled disabled-void-color="#ff9900"   />
											</div>
											<div class="review_item_text">
												{{ reviewComment.review }}
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="review_form">
										<span class="review_title"> Add a Review </span>
										<div class="review_item_text" style="margin-bottom: 35px">
											Your email address will not be published. Required fields
											are marked *
										</div>
										<form @submit.prevent>
											<el-input
												v-model="review.review"
												type="textarea"
												placeholder="Your Review*"
												clearable
												class="mb-3"
											/>
											<el-input
												v-model="review.name"
												type="text"
												placeholder="Enter your name*"
												clearable
												class="mb-3"
											/>
											<el-input
												v-model="review.email"
												type="email"
												placeholder="Enter your Email*"
												clearable
												class="mb-3"
											/>
											<div class="d-flex">
												<el-checkbox
													style="margin-right: 12px; margin-bottom: 25px"
												>
													Save my name, email, and website in this browser for
													the next time I comment
												</el-checkbox>
											</div>
											<el-button @click="reviewCommentNew" type="primary"
												>Submit</el-button
											>
										</form>
									</div>
								</div>
							</div>
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
			<!-- Similar Items -->
			<div class="Similar mt-5">
				<div class="d-flex justify-content-between flex-wrap">
					<div
						class="product-item"
						v-for="(product, i) in productsCategory"
						:key="i"
					>
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
						<div class="product_item_title">
							{{ titleSlice(product.title) }}
						</div>
						<div class="product_item_price">$ {{ product.price }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'AppProduct',
	data() {
		return {
			product: null,
			loading: true,
			review: {
				name: '',
				email: '',
				rating: '',
				review: '',
			},
			activeName: 'first',
			reviewComments: [],
		};
	},
	components: {   },
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
		reviewCommentNew() {
			const comment = {
				name: this.review.name,
				email: this.review.email,
				rating: this.review.rating,
				review: this.review.review,
			};
			if (comment.name && comment.email && comment.review) {
				this.reviewComments.push(comment);
				localStorage.setItem(
					'reviewComments',
					JSON.stringify(this.reviewComments)
				);
				this.review.name = '';
				this.review.email = '';
				this.review.rating = '';
				this.review.review = '';
			}
		},
		removeRivewComment(index) {
			this.reviewComments.splice(index, 1);
			localStorage.setItem(
				'reviewComments',
				JSON.stringify(this.reviewComments)
			);
		},
		incrementProduct(product) {
			this.$store.dispatch('incrementProduct', product);
		},
		decrementProduct(product) {
			this.$store.dispatch('decrementProduct', product);
		},
		getProduct() {
    this.$route.params.id
    axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`).then(res=>{
      if(res.data){
        this.product = res.data
        this.$store.dispatch('getProductsCategory',this.product.category)
      }
    }).catch(error => {
      console.log(error);
    })
    },
	},
	computed: {
		productsCategory() {
			return this.$store.state.productsCategory;
		},
	},
	mounted() {
		this.getProduct();
		const data = localStorage.getItem('reviewComments');
		data
			? (this.reviewComments = JSON.parse(data))
			: (this.reviewComments = []);
	},
};
</script>
<style lang="scss" scoped>
.product {
	margin-top: 50px;
	padding: 0.75rem 1rem;
}
// carusel
.el-carousel__item{
	display:flex;
	justify-content: center;
	align-items:center;
}
.el-carousel__item img {
	max-width:300px;
	width:100%;
	height: 100%;
}
.review {
	font-weight: 400;
	font-size: 16px;
	line-height: 27px;
	color: #707070;
}
.product_buttons {
	display: flex;
	align-items: center;
}
.product_icons ul li {
	margin-right: 15px;
	cursor: pointer;
}
.tabs_content {
	margin-top: 50px;
}
.product-item {
	width: 250px;
	max-height: 360px;
	height: 100%;
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
.Aditional {
	padding-left: 0;
}
.Aditional li {
	font-size: 18px;
	font-weight: 400;
	line-height: 25px;
	color: #000;
	margin-bottom: 10px;
}
.Aditional li span {
	color: #707070;
	font-size: 16px;
}
.review_title {
	font-size: 20px;
	font-weight: 400;
	line-height: 25px;
	color: #000;
	margin-bottom: 10px;
}
.review_item {
	position: relative;
	margin-bottom: 40px;
}
.mb {
	margin-bottom: 50px;
}
.review_item::after {
	position: absolute;
	content: '';
	width: 100%;
	height: 1px;
	background-color: #707070;
	bottom: -30px;
	left: 0;
	z-index: 1;
}
.review_item .name {
	font-weight: 400;
	font-size: 20px;
	line-height: 22px;
	color: #000;
	margin-right: 16px;
}
.review_item .day {
	font-weight: 400;
	font-size: 14px;
	line-height: 22px;
	color: #707070;
}
.rate {
	margin-top: 5px;
}
.review_item_text {
	font-weight: 400;
	font-size: 16px;
	line-height: 27px;
	color: #707070;
	margin-top: 15px;
}
.review_form .n-input {
	margin-bottom: 20px;
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
@media (max-width: 768px) {
	.carousel-img {
		height: 250px;
		display: flex;
		align-items: center;
	}
}
</style>
