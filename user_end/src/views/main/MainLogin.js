import DownNavView from '@/components/downnav/DownNavView.vue'
export default {
  name: 'MainLogin',
  components: {
    DownNavView,
  },
  data() {
    return {
      active: 2,
      asu: [
        {
          leftIcon: 'icon-079aiqing',
          modelTxt: '关注医生',
          rightIcon: 'icon-arrow-right',
        },
        {
          leftIcon: 'icon-shoucangxiao',
          modelTxt: '百科收藏',
          rightIcon: 'icon-arrow-right',
        },
        {
          leftIcon: 'icon-shu',
          modelTxt: '帮助中心',
          rightIcon: 'icon-arrow-right',
        },
      ],
      info: {},
    }
  },
  mounted() {
    const info = localStorage.getItem('tel')
    this.info = info
  },
  methods: {
    setting() {
      this.$router.push('/setting')
    },
    mypet() {
      this.$router.push('/my_Pets')
    },
    toPersonInfo() {
      this.$router.push('/personInfo')
    },
    register() {
      this.$router.push('/register')
    },
    cases() {
      this.$router.push('/case')
    },
    recipel() {
      this.$router.push('/recipel')
    },
    collect(txt) {
      if (txt === '百科收藏') {
        this.$router.push('/collect')
      } else if (txt === '关注医生') {
        this.$router.push('/doctorSub')
      }
    },
  },
}
