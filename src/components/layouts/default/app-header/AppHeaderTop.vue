<template>
	<div class="top_header">
		<div class="container">
			<div class="d-flex align-items-center justify-content-between">
				<div class="help">
					<ul>
						<li><router-link to="/">Yordam</router-link></li>
						<li><a>Bizga qo'shiling</a></li>
						<li><a href="tel:+998930819140">+998930819140</a></li>
					</ul>
				</div>
				<div class="language">
					<ul>
						<li
							v-for="(item, i) in items"
							:key="i"
							@click="isActive(i)"
							:class="{ active: i === activeItem }"
						>
							<a href="#">
								<span>{{ item.name }}</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'topHeader',
	data() {
		return {
			items: [
				{ name: 'Ўзбекча', id: 0 },
				{ name: 'O`zbekcha', id: 1 },
				{ name: 'Русский', id: 2 },
			],
			activeItem: null,
		};
	},
	methods: {
		isActive(i) {
			this.activeItem = i;
		},
	},
};
</script>
<style scoped>
.top_header {
	background: rgba(65,76,160,.05);
	padding: 10px 0;
}
.help ul {
	padding-left: 0;
	list-style: none;
	display: flex;
}
.help ul li {
	margin-right: 20px;
	cursor: pointer;
}
.help ul li a:hover {
	color: #232c3c;
}
.help ul li a {
	font-size: 14px;
	font-weight: 400;
	color: rgba(26, 25, 28, 0.49);
}
.language ul {
	padding-left: 0;
	list-style: none;
	display: flex;
}
.language ul li {
	margin-left: 20px;
	display: inline-block;
}
.language ul li a {
	font-size: 14px;
	font-weight: 400;
	color: rgba(26, 25, 28, 0.49);
}
.language ul li a:hover {
	color: #232c3c;
}
.language ul li.active a {
	color: #232c3c !important;
}
</style>
