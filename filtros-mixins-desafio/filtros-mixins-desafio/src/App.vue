<template>
  <div id="app">
    <h1>Filtros & Mixins (Desafio)</h1>
    <!-- Exercício 1 -->
    <!-- Construir um filtro local que troca espaços por vírgula -->
    <div>
      <h1>Exercício 1</h1>
      <p>{{ stringComEspaco | colocarVirgulas }}</p>
    </div>

    <!-- Exercício 2 -->
    <!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
    <!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
    <div>
      <h1>Exercício 2</h1>
      <p>{{ frase | informarEspacos }}</p>
    </div>

    <!-- Exercício 3 -->
    <!-- Implementar os exercicios 1 e 2 com propriedade computada -->
    <!-- <div>
    </div> -->

    <!-- Exercício 4 -->
    <h1>Exercício 4</h1>
    <p>{{ stringComEspacos2 | colocarVirgulas }}</p>
    <hr />
    <p>{{ fraseComTamanhos }}</p>
    <hr />
    <!-- Compartilhe a propriedade computada via mixin -->
  </div>
</template>

<script>
import MixinEx4 from "./MixinEx4";

export default {
  mixins: [MixinEx4],
  data() {
    return {
      stringComEspaco: "uma string com espacos",
      frase: "Pedro é Legal",
    };
  },
  filters: {
    colocarVirgulas(valor) {
      return valor.replace(/\s/g, ",");
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
