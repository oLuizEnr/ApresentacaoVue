const { createApp, ref } = Vue

createApp({
  data() {
    return {
      eModoEscuro: false,
      mensagem: "",
      itens: [
        "Item 1", "Item 2", "Item 3", "Teste", "Outro Item", "a", "b", "c", "d", "e", "f", "gustavo"
      ]
    }
  },
  methods: {
    mudarModo() {
      this.eModoEscuro = !this.eModoEscuro;

      const modoAtual = document.getElementById("modoAtual");
      modoAtual.href = this.eModoEscuro ? "modoEscuro.css" : "modoClaro.css";
    }
  },
  computed: {
    itensFiltrados() {
      return this.itens.filter(
        item => item.toLowerCase().includes(this.mensagem.toLowerCase())
      );
    }
  }
}).mount('#app')