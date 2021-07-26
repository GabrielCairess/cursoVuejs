<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr />
    <p>{{ usuarioLogado }}</p>
    <p>{{ cpf | cpf | inverter }}</p>
    <input type="text" :value="cpfDoAluno | cpf" />
    <hr />
    <Fruta />
    <hr />
    <div>
      <ul>
        <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
        <input type="text" v-model="fruta" @keydown.enter="add" />
      </ul>
    </div>
  </div>
</template>

<script>
import FrutasMixin from "./frutasMixin";
import usuarioMixin from "./usuarioMixin";
import Fruta from "./Frutas.vue";

export default {
  components: {
    Fruta,
  },
  mixins: [FrutasMixin, usuarioMixin],
  filters: {
    cpf(valor) {
      const arr = valor.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join("");
    },
  },
  data() {
    return {
      cpf: "36587456985",
      cpfDoAluno: "25874185269",
    };
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

input {
  font-size: 2.5rem;
}
</style>
