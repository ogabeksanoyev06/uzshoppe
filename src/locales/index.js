import Vue from 'vue';
import VueI18n from 'vue-i18n';
import uz from './uz-UZ';
import ru from './ru-RU';
import uzb from './uzb-Uzb';
Vue.use(VueI18n);
const messages = {
	ru: ru,
	uz: uz,
	uzb: uzb,
};

export default new VueI18n({
	locale: localStorage.getItem('lang'),
	messages,
});
