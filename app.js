Vue.createApp({
  data() {
    return {
      inputClass: "",
      vb: true,
      bgcolor: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.inputClass === "user1",
        user2: this.inputClass === "user2",
        visible: this.vb,
        hidden: !this.vb,
      };
    },
  },
  methods: {
    toggle() {
      this.vb = !this.vb;
    },
  },
}).mount("#assignment");
