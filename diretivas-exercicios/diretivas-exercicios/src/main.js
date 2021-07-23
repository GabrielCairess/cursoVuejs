import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el, binding, vnode) {
		// el.style.backgroundColor = 'lightgray'
		let atraso = 0
		if (binding.modifiers['atrasar']) {
			atraso = 3000
		}

		setTimeout(() => {
			el.style.backgroundColor = binding.arg === 'fundo' ? binding.value : 'blue'
		}, atraso);
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
