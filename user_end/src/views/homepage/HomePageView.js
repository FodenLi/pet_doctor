import DownNavView from '@/components/downnav/DownNavView.vue';
export default {
    name:'HomePageView',
    components:{
      DownNavView
    },
    data() {
      return {
        images_top:[
          require('../../assets/homepage/carouse1.png'),
          require('../../assets/homepage/carouse1.png'),
          require('../../assets/homepage/carouse1.png'),
          require('../../assets/homepage/carouse1.png'),
          require('../../assets/homepage/carouse1.png'),
          require('../../assets/homepage/carouse1.png'),
        ],
        images:[
          {img:require('../../assets/homepage/breathe.png'),info:'呼吸系统',name:'breathe'},
          {img:require('../../assets/homepage/digestion.png'),info:'消化系统'},
          {img:require('../../assets/homepage/skin.png'),info:'皮肤病'},
          {img:require('../../assets/homepage/bone.png'),info:'骨科'},
          {img:require('../../assets/homepage/urology.png'),info:'泌尿系统'},
          {img:require('../../assets/homepage/reproduction.png'),info:'生殖系统'},
          {img:require('../../assets/homepage/dentistry.png'),info:'牙科'},
          {img:require('../../assets/homepage/nerve.png'),info:'神经系统'},
          {img:require('../../assets/homepage/novice.png'),info:'新手养宠'},
          {img:require('../../assets/homepage/more.png'),info:'更多',name:'wiki_more'},
        ],
        doctors:[],
        start: 0, // 触摸起始点
        distance: 0 // 滑动距离
      };
    },
    created() {
      this.ajax({
        method: "GET",
        url: "/doctorHome",
      }).then((res) => {
          if(res.data.des==="无任何用户数据！") {
              this.isNull=true
          }
          else{
             var doctors = res.data.des;
             this.doctors = doctors; 
          }
        
      });
    },
    methods: {
      search(){
        this.$router.push({'name':'search'})
      },
      details(index){
        var name=this.images[index].name;
        this.$router.push({'name':name})
      },
      petDetail(id){
          this.$router.push({ path: "/doctorDetail", query: { id: id }});
      },
      reservation(){
        this.$router.push({path:'order',query:{type:'order'}})
      },
      online(){
        this.$router.push({path:'onlineInquiry',query:{type:'online'}})
      },
      share(){
        this.$router.push({name:'consultation'})
      },
      touchStart(e) {
        if(e)
        this.start = e.touches[0].clientX;
      },
      touchMove(e) {
        this.distance = e.touches[0].clientX - this.start;
      },
      touchEnd() {
        if(this.distance<-92){
          this.distance=-92
        }else if(this.distance>92){
          this.distance=0
        }
      },
      goMoreDoctors(){
        this.$router.push({name:'moreDoctors'})
      }
    },
    watch: {
      $route() {
        location.reload();
      },
    },
  };