import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		products: [],
		cart: [],
		myFavorites: [],
		productsCategory: [],
		loadingStatus: true,
	},
	getters: {
		cartTimeCount(state) {
			return state.cart.length;
		},
		productsCategory(state) {
			return state.productsCategory;
		},
		cartTotalPrice(state) {
			let total = 0;
			state.cart.forEach(item => {
				total += item.product.price * item.quantity;
			});
			return total;
		},
		cartSubtotalItems(state) {
			let subtotalItems = 0;
			state.cart.forEach(item => {
				subtotalItems += item.quantity;
			});
			return subtotalItems;
		},
		loadingStatus(state) {
			return state.loadingStatus;
		},
	},
	mutations: {
		SET_PRODUCTS: (state, products) => {
			state.products = products;
		},
		SET_PRODUCTS_CATEGORY: (state, products) => {
			state.productsCategory = products;
		},
		LOADING_STATUS: (state, newLoading) => {
			state.loadingStatus = newLoading;
		},
		INCREMENT_PRODUCT: (state, product) => {
			state.cart.forEach(item => {
				if (item.product.id === product.id) {
					item.quantity++;
				}
			});
		},
		DECREMENT_PRODUCT: (state, product) => {
			state.cart.forEach(item => {
				if (item.product.id === product.id) {
					item.quantity--;
					if (item.quantity === 0) {
						state.cart.splice(state.cart.indexOf(item), 1);
					}
				}
			});
		},
		REMOVE_FROM_CART: (state, product) => {
			state.cart = state.cart.filter(item => {
				return item.product.id !== product.id;
			});
		},
		REMOVE_FAVORITE: (state, product) => {
			state.myFavorites = state.myFavorites.filter(item => {
				return item.product.id !== product.id;
			});
		},
		CLEAR_CART_ITEMS: state => {
			state.cart = [];
		},
		ADD_TO_CART: (state, { product, quantity }) => {
			let productInCart = state.cart.find(item => {
				return item.product.id === product.id;
			});
			if (productInCart) {
				productInCart.quantity += quantity;
			} else {
				state.cart.push({
					product,
					quantity,
				});
			}
		},
		ADD_FAVORITES_CART: (state, { product, quantity }) => {
			let productInCart = state.myFavorites.find(item => {
				return item.product.id === product.id;
			});
			if (!productInCart) {
				state.myFavorites.push({
					product,
					quantity,
				});
			}
		},
	},
	actions: {
		async getProducts({ commit }) {
			commit('LOADING_STATUS', true);
			try {
				await axios.get('https://fakestoreapi.com/products').then(response => {
					if (!response.error && response.data) {
						commit('SET_PRODUCTS', response.data);
						commit('LOADING_STATUS', false);
					}
				});
			} catch (error) {
				console.log(error);
			}
		},
		async getProductsCategory({ commit }, category) {
			commit('LOADING_STATUS', true);
			try {
				await axios
					.get(
						`https://fakestoreapi.com/products/category/${category}`
					)
					.then(response => {
						if (!response.error && response.data) {
							commit('SET_PRODUCTS_CATEGORY', response.data);
							commit('LOADING_STATUS', false);
						}
					});
			} catch (error) {
				console.log(error);
			}
		},
		addProductToCart({ commit }, { product, quantity }) {
			commit('ADD_TO_CART', { product, quantity });
		},
		myFavoritesCart({ commit }, { product, quantity }) {
			commit('ADD_FAVORITES_CART', { product, quantity });
		},
		incrementProduct({ commit }, product) {
			commit('INCREMENT_PRODUCT', product);
		},
		decrementProduct({ commit }, product) {
			commit('DECREMENT_PRODUCT', product);
		},
		removeProductFromCart({ commit }, product) {
			commit('REMOVE_FROM_CART', product);
		},
		removeFavorite({ commit }, product) {
			commit('REMOVE_FAVORITE', product);
		},
		clearCartItems({ commit }) {
			commit('CLEAR_CART_ITEMS');
		},
	},
	modules: {},
	plugins: [createPersistedState()],
});
