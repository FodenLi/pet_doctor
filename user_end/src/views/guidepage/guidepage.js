
export default {
  data() {
    return {
      timer: "",
    };
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    login(){
      this.$router.push({"name":"nologin"})

    }
  },
};
