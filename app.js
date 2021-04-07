const App = {
  data() {
    return {
      inputValue: "",
      notes: ["yapilacaklar1", "yapilacaklar2"],
    };
  },
  methods: {
    valueHandler(event) {
      this.inputValue = event.target.value;
    },
    addNewNotes() {
      this.notes.push(this.inputValue);
      this.inputValue = "";
    },
  },
};

Vue.createApp(App).mount("#app");
