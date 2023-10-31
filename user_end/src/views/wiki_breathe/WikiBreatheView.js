export default {
    name: 'WikiBreatheView',
    data() {
        return {
            detailsinfo: []
        }
    },
    methods: {
        back() {
            this.$router.go(-1)
        },
        collect(){
            console.log('ok')
        }
    },
    created() {
        this.detailsinfo = this.$route.query.info
    },
    watch: {
        $route() {
          location.reload();
        },
      },
}