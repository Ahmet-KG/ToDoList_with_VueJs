const App = {
  data() {
    return {
      inputValue: "",
      notes: ["reading", "shopping"],
    };
  },
  methods: {
    valueHandler(event) {
      this.inputValue = event.target.value;
    },
    addNewNotes() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    deleteNotes(index) {
      this.notes.splice(index, 1);
    },
  },
};

Vue.createApp(App).mount("#app");
