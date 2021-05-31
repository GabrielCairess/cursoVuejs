new Vue({
  el: '#app',
  data: {
    running: false,
    playerLife: 0,
    monsterLife: 10,
  },
  computed: {
    hasResult() {
      return this.playerLife == 0 || this.monsterLife == 0;
    },
    isRunning() {
      return this.running;
    }
  },
  methods: {
    updateStatusRunning() {
      this.running = !this.running;
    }
  },
  watch: {

  },
});