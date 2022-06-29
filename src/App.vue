<template>
	<div id="app">
		<AppHeader />
		<router-view />
		<AppFooter />
	</div>
</template>

<script>
import AppHeader from '@/components/layouts/default/app-header/AppHeader.vue';
import AppFooter from '@/components/layouts/default/app-footer/AppFooter.vue';
export default {
	name: 'app',
	components: {
		AppHeader,
		AppFooter,
	},
};
</script>
