export default {
  name: 'SearchView',
  data() {
    return {
      value: '',
      isshow: false,
      searchinfos: []
    };
  },
  methods: {
    back() {
      this.$router.push({ 'name': 'home' })
    },
    search() {
      if (this.value === '医生') {
        this.ajax({
          method: 'GET',
          url: '/search_doctor',
        }).then(res => {
          this.searchinfos = res.data.des
        })
      } else if (this.value === '百科') {
        this.ajax({
          method: 'GET',
          url: '/search_wiki',
        }).then(res => {
          this.searchinfos = res.data.des
        })
      } else if (this.value === '问诊') {
        this.ajax({
          method: 'GET',
          url: '/search_share',
        }).then(res => {
          this.searchinfos = res.data.des
        })
      }
    },
    searchinfo() {
      if (this.value != '') {
        this.isshow = true
      } else {
        this.isshow = false
      }
    },
    cancel() {
      this.value = ''
      this.isshow = false
    },
    wikidetails(info) {
      this.$router.push({ path: '/wiki_breathe', query: { info: info } })
    },
    sharedetails() {
      this.$router.push({ name: 'consultation' })
    },
    docdetails(){
      this.$router.push({ name: 'doctorDetail' })
    }
  },
};