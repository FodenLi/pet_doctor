export default {
    name:'loginNative',
    data() {
        return {
            tel:''
        };
    },
    mounted() {
        this.tel=localStorage.getItem("tel")
    },
    methods: {
        ret(){
            this.$router.push({"name":"nologin"})
        },
        login(){
            this.$router.push({"name":"home"})
        },
        others(){
            this.$router.push({"name":"loginphone"})
        }
    },
}