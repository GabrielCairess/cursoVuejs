<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <form class="painel" v-if="!submetido">
        <div class="cabecalho">Formulário</div>
        <NomeCompleto
          :nomeCompleto="usuario.nomeCompleto"
          v-model="usuario.nomeCompleto"
        />
        <Rotulo nome="Email">
          <input type="text" v-model="usuario.email" />
        </Rotulo>
        <Rotulo nome="Senha">
          <input type="password" v-model="usuario.senha" />
        </Rotulo>
        <Rotulo nome="Armazenar Dados ?">
          <select name="escolha" v-model="escolha">
            <option
              v-for="escolha in escolhas"
              :key="escolha.codigo"
              :value="escolha.codigo"
            >
              {{ escolha.nome }}
            </option>
          </select>
        </Rotulo>
        <hr />
        <button @click.prevent="enviar">Enviar</button>
      </form>
      <div class="painel" v-else>
        <div class="cabecalho">Resultado</div>
        <Rotulo nome="Nome">
          <span>{{ usuario.nomeCompleto.nome }}</span>
        </Rotulo>
        <Rotulo nome="SorenoNome">
          <span>{{ usuario.nomeCompleto.sobrenome }}</span>
        </Rotulo>
        <Rotulo nome="Email">
          <span>{{ usuario.email }}</span>
        </Rotulo>
        <Rotulo nome="Senha">
          <span>{{ usuario.senha }}</span>
        </Rotulo>
        <Rotulo nome="Escolha">
          <span>{{ escolha }}</span>
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import NomeCompleto from "./components/NomeCompleto.vue";

export default {
  name: "app",
  components: { Rotulo, NomeCompleto },
  data() {
    return {
      usuario: {
        nomeCompleto: {
          nome: "",
          sobrenome: "",
        },
        email: "",
        senha: "",
      },
      escolha: 1,
      escolhas: [
        { codigo: 1, nome: "Sim" },
        { codigo: 2, nome: "Não" },
      ],
      submetido: false,
    };
  },
  methods: {
    enviar() {
      this.submetido = true;
    },
  },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
