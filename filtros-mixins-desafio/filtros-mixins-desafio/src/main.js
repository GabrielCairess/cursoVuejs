import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false

Vue.filter('informarEspacos', function (valor) {
	let palavras = valor.split(' ');

	palavras.forEach((element, index) => {
		palavras[index] = element + ' (' + element.length + ') '
	});

	return palavras.join('')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
