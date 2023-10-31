export default {
  data() {
    return {
      label: ['个人信息', '账号安全', '意见反馈', '隐私政策'],
    }
  },
  methods: {
    edit() {
      this.$router.push('/me')
    },
    routess(item) {
      // console.log(item)
      switch (item) {
        case '个人信息':
          this.$router.push('/setInfo')
          break
        case '账号安全':
          this.$router.push('/secure')
          break
        case '意见反馈':
          this.$router.push('/feed')
          break
        case '隐私政策':
          this.$router.push('/privacy')
          break
      }
    },
  },
}
