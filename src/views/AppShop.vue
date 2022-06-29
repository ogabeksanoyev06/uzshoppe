<template>
	<div class="shop">
		<div class="container">
			<div class="views_title">Shop The Latest</div>
			<AppProductList />
		</div>
	</div>
</template>

<script>
import AppProductList from '@/components/pages/AppProductList.vue';
export default {
	name: 'AppShop',
	components: {
		AppProductList,
	},
	data() {
		return {
			
		};
	},
	methods: {},
};
</script>

<style lang="scss" scoped>

</style>
