export default {
    name: 'WikiMoreView',
    data() {
        return {
            value: '',
            wikiinfos: [],
            activeNames: ['1'],
            titles:['眼科','绝育']
        }
    },
    mounted() {
        this.ajax({
            method: 'GET',
            url: '/search_wiki',
        }).then(res => {
            this.wikiinfos = res.data.des
        })
    },
    methods: {
        back(){
            this.$router.go(-1)
        },
        details(info){
            this.$router.push({path:'/wiki_breathe',query:{info:info}})
        }
    },
}