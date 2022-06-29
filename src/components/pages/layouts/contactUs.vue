<template>
	<div class="contact_us">
		<div class="container">
			<div class="contact_title text-center">Contact Us</div>
			<div class="contact_text mx-auto">
				Say Hello send us your thoughts about our products or share your ideas
				with our Team!
			</div>
			<form
				class="w-100 d-flex flex-column justify-content-center align-items-center"
			>
				<div class="row w-100">
					<div class="col-md-6 mb-2 mb-md-3">
						<el-input type="text" placeholder="First name*" v-model="input" clearable/>
					</div>
					<div class="col-md-6 mb-2 mb-md-3">
						<el-input type="text" placeholder="Last name*" v-model="input" clearable/>
					</div>
					<div class="col-md-6 mb-2 mb-md-3">
						<el-input type="email" placeholder="Email*" v-model="input" clearable/>
					</div>
					<div class="col-12 mb-2 mb-md-3">
						<el-input type="textarea" placeholder="Message*" v-model="input" clearable/>
					</div>
				</div>
				<div class="send_btn">
					<el-button clas="w-100" type="primary" @click="sendMessage">Send</el-button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'contactUs',
	data() {
		return {
			input:''
		};
	},
};
</script>

<style lang="scss" scoped>
.contact_us {
	height: 100vh;
}
.contact_title {
	font-weight: 500;
	font-size: 33px;
	line-height: 43px;
	color: #06964a;
	margin-bottom: 25px;
}
.contact_text {
	font-weight: 400;
	font-size: 20px;
	line-height: 26px;
	text-align: center;
	max-width: 500px;
	color: #18a058;
	margin-bottom: 40px;
}
.send_btn {
	max-width: 400px;
	width: 100%;
	margin-top: 28px;
	display: flex;
	justify-content: center;
	text-align: center;
}
.send_btn .n-button {
	width: 100%;
	text-align: center;
}
</style>
