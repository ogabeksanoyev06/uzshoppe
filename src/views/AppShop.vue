<template>
	<div class="shop">
		<div class="container">
			<div class="views_title">{{$t("message.pageTitle2")}}</div>
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
