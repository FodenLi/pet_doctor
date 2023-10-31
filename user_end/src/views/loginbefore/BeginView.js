export default {
    data() {
      return {
        timer: ''
      }
    },
    mounted() {
      this.timer = setTimeout(() => {
        // 定时器触发的操作
        this.$router.push('/guide')
      }, 3000)  // 设置定时器的间隔时间，此处为3秒
    },
    beforeDestroy() {
      clearInterval(this.timer)
    }
  }