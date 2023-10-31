<template>
    <div id="comfirmInfo">
        <van-nav-bar title="确认信息" left-text="" left-arrow @click-left="back">
            <van-icon name="" slot="right" />
        </van-nav-bar>
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
                <span class="info">未就诊</span>
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
        <span class="myfooter" @click="comfirmPayment">
            确认缴费
        </span>
    </div>
</template>

<script>
import { Dialog } from 'vant';
import Vue from 'vue';
Vue.use(Dialog);
export default {
    name: 'comfireInfo',
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
            type: ''
        }
    },
    created() {
        this.type = this.$route.query.type
    },
    methods: {
        comfirmPayment() {
            if (this.type === 'order') {
                Dialog.alert({
                    message: '挂号成功！'
                }).then(() => {
                    this.$router.push("/registrationRecords")
                });
            } else if (this.type === 'online') {
                Dialog.alert({
                    message: '缴费成功！'
                }).then(() => {
                    this.$router.push("/chatman")
                });
            }

        },
        back() {
            this.$router.go(-1)
        }
    }

}
</script>

<style lang="scss" scoped>
@import "./comfireInfo.scss"
</style>