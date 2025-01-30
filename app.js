const { createApp, ref } = Vue

createApp({
  data() {
    return {
      nome: 'Luiz',
      idade: '16',
      pesquisa: '',
      eModoEscuro: false
    }
  },
  methods: {
    mudarModo() {
      this.eModoEscuro = !this.eModoEscuro;

      const modoAtual = document.getElementById("modoAtual");
      modoAtual.href = this.eModoEscuro ? "modoEscuro.css" : "modoClaro.css";
    }
  }
}).mount('#app')