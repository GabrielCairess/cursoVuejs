<template>
  <div>
    <Rotulo nome="nome" @input="alterarNome" :value="nomeCompleto.nome">
      <input type="text" />
    </Rotulo>
    <Rotulo
      nome="Sobrenome"
      @input="alterarSobrenome"
      :value="nomeCompleto.sobrenome"
    >
      <input type="text" />
    </Rotulo>
  </div>
</template>

<script>
import Rotulo from "./Rotulo.vue";

export default {
  components: {
    Rotulo,
  },
  props: {
    nomeCompleto: {
      type: Object,
      required: true,
    },
  },
  methods: {
    alterarNome(event) {
      this.$emit("input", {
        nome: event.target.value,
        sobrenome: this.nomeCompleto.sobrenome,
      });
    },
    alterarSobrenome(event) {
      this.$emit("input", {
        nome: this.nomeCompleto.nome,
        sobrenome: event.target.value,
      });
    },
  },
};
</script>

<style>
</style>