<template>
	<div class="product_list">
		<AppLoading v-if="loadingStatus" />
		<div class="container" v-else>
			<div class="row">
				<div class="col-md-3">
					<div class="sticky d-flex flex-column">
						<el-input
							type="text"
							size="large"
							placeholder="Search Product"
							clearable
							class="mb-3"
						/>
						<el-select v-model="value" >
							<el-option
								v-for="item in shopBy"
								:key="item.value"
								:label="item.label"
								:value="item.label"
								size="medium"
							>
							</el-option>
						</el-select>
					</div>
				</div>
				<div class="col-md-9">
					<div
						class="d-flex justify-content-center justify-content-md-start flex-wrap"
					>
						<app-product-card
							v-for="product in filteredProduct"
							:key="product.id"
							:product="product"
						>
						</app-product-card>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import AppProductCard from '@/components/pages/AppProductCard.vue';
import AppLoading from '@/components/layouts/auth/AppLoading.vue';
export default {
	name: 'AppProductList',
	components: { AppProductCard, AppLoading },
	data() {
		return {
			shopBy: [
				{ label: 'all products', value: 'v0' },
				{ label: 'electronics', value: 'v1' },
				{ label: 'jewelery', value: 'v2' },
				{ label: "men's clothing", value: 'v3' },
				{ label: "women's clothing", value: 'v4' },
			],
			categories: [],
			value: 'all products',
		};
	},
	props: {},
	methods: {},
	computed: {
	
		filteredProduct() {
			let category = this.value;
			if (category === 'all products') {
				return this.$store.state.products;
			} else {
				return this.$store.state.products.filter(function (product) {
					return product.category === category;
				});
			}
		},

		loadingStatus() {
			return this.$store.getters.loadingStatus;
		},
	},
	mounted() {
		this.$store.dispatch('getProducts');
	},
};
</script>
<style scoped>
.sticky {
	position: sticky;
	top: 60px;
	background-color: #fff;
	z-index: 999;
}
</style>
