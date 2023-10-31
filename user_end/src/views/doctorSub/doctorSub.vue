<template>
    <div id="doctorSub">
            <van-nav-bar title="关注医生" left-text="" left-arrow @click-left="backtrack">
            <van-icon name="" slot="right" />
        </van-nav-bar>       
        <div v-if='isNull'>暂无关注</div>

        <div v-for="i in doctors" :key="i.id" @click="detail(i.id)">
            <div style="height: 15px;"></div>
            <div class="item">
                <img class="avatar" src="../../assets/image-duping/doctor1.png" alt="">
                <div class="doctorinfo">
                    <div id="doctorinfo_head">
                        <span id="name">{{ i.doctorname }}</span>
                        <span id="career">从业{{ i.workyears }}年</span>
                        <span class="isonline" v-if="i.isonline">在线</span>
                        <span class="isonline" v-else>离线</span>
                     
                    </div>                    
                    <div id="keshi">{{i.subject}} | {{i.position}}</div>
                </div>
                <div class="info">线上问诊次数{{i.consultation_number}}综合评分{{i.score}}关注人数{{i.follower_number}}</div>
                <div class="goodat">擅长：{{i.direction}}</div>
                <div id="fee">
                    <span>问诊费用<span> {{i.price}} </span>元/次</span>
                
                </div>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'doctorSub',
    data() {
        return {
            doctors: [
                // { id: 1, img: "", name: "张婷", workyear: 6, isonline: true, keshi: "骨科", zhiwei: "主任医师", online_times: "1254", rate: "4.8", subscribe_num: "1284", goodat: "治疗宠物骨折多年，有过重度骨折治愈的经验", fee: 6 },
                // { id: 2, img: "", name: "谢馨宇", workyear: 5, isonline: false, keshi: "呼吸科", zhiwei: "主任医师", online_times: "1254", rate: "4.8", subscribe_num: "1284", goodat: "治疗宠物骨折多年，有过重度骨折治愈的经验", fee: 4 }
            ],
            isNull:false
        }
    },
    created() {
    this.ajax({
      method: "GET",
      url: "/doctorSub",
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
    methods:{
        backtrack(){
            this.$router.go(-1);
        },
        detail(id){
            this.$router.push("/doctorDetail")
            this.$router.push({ path: "/doctorDetail", query: { id: id } });
        }
    }
}

</script>

<style lang="scss" scoped>
@import "./doctorSub.scss";
</style>