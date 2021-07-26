export default {
  computed: {
    stringComEspacos2() {
      return 'Essa é uma string com espaços';
    },
    fraseComTamanhos() {
      let palavras = 'Pedro é Legal'.split(' ');

      palavras.forEach((element, index) => {
        palavras[index] = element + ' (' + element.length + ') '
      });

      return palavras.join('')
    },
  },
}