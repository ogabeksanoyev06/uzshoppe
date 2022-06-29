<template>
	<div class="loading">
		<div class="spinner-border text-success" role="status"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.loading {
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0px;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: hsla(0, 0%, 100%, 0.9);
	opacity: 0.8;
	z-index: 99999;
}
</style>
