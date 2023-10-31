<template>
    <div id="comfirmInfo">
        <van-nav-bar title="挂号记录" left-text="" left-arrow @click-left="back">
            <van-icon name="" slot="right" />
        </van-nav-bar>

        <!-- <div v-for="record in records" :key="id"></div> -->
        <div style="height: 15px;"></div>
        <div id="content">
            <div>
                <span class="head">就诊医院</span>
                <span class="info">{{ hospital }}</span>
            </div>
            <div>
                <span class="head">就诊医生</span>
                <span class="info">{{ doctor }}</span>
            </div>
            <div>
                <span class="head">就诊时间</span>
                <span class="info">{{ day }}</span>
            </div>
            <div>
                <span class="head">挂号费用</span>
                <span class="info">{{ fee }}</span>
            </div>
            <div>
                <span class="head">预估就诊时间</span>
                <span class="info">{{ time }}</span>
            </div>
            <div>
                <span class="info">以医院实际情况为准</span>
            </div>
            <hr>
            <div>
                <span class="head">就诊宠物</span>
                <span class="info">{{ pet }}</span>
            </div>
            <div>
                <span class="head">就诊卡号</span>
                <span class="info">{{ cardNum }}</span>
            </div>

        </div>
    </div>
</template>

<script>
import { Dialog } from 'vant';
import Vue from 'vue';
Vue.use(Dialog);
export default {
    name: 'registrationRecords',
    data() {
        return {
            
            hospital: "成都市武侯区第一宠物医院",
            doctor: "张婷",
            day: "2021-06-22全天",
            fee: "¥6",
            time: "2021-06-22",
            pet: "小柴",
            cardNum: "455621",
            show: false,
            
        }
        
    },
    methods:{
        back(){
            this.$router.push({'name':'home'})
         }
    }

}
</script>

<style lang="scss" scoped>
@import "./registrationRecords.scss"
</style>