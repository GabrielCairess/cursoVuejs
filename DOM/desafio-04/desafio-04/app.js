new Vue({
	el: '#desafio',
	data: {
		aplicarDestaque: false,
		aplicarEncolher: true,
		classeCSS: 'c1',
		classeCSS2: 'c2',
		classeCSSteste: 'c1',
		cor: 'white',
		aplicarAltura: '',
		ex5: 'red',
		largura: 0,
		corBarra: 'green'
	},
	computed: {
		obterEstilo() {
			return {
				backgroundColor: this.cor,
				height: this.aplicarAltura == 'true' ? '300px' : '',
			};
		},
		obterEstilo2() {
			return {
				backgroundColor: this.ex5,
			};
		},
		obterBarraProgresso() {
			return {
				backgroundColor: this.corBarra,
				width: this.largura + 'px',
			};
		},
	},
	methods: {
		iniciarEfeito() {
			this.aplicarDestaque = this.aplicarDestaque ? false : true;
			this.aplicarEncolher = !this.aplicarDestaque;
		},
		iniciarProgresso() {
			setInterval(() => {
				this.largura += 5;
			}, 500);
		},
	},
});
