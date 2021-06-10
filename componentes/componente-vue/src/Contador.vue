<template>
  <div class="contador">
    <span>{{ contadorr }}</span>
    <button @click="adicionar">+</button>
    <button @click="subtrair">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contadorr: 0
    };
  },
  methods: {
    adicionar() {
      this.contadorr++;
    },
    subtrair() {
      this.contadorr--;
    },
  },
}
</script>

<style scoped>
  .contador span {
    border-bottom: 1px solid #CCC;
    height: 30px;
    padding: 5px 25px;
  }

  .contador button {
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background-color: coral;
    outline: none;
    margin-left: 10px;
    color: #fff;
  }
</style>