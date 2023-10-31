<template>
  <div id="doctorDetail">
    <van-nav-bar title="医生详情" left-text="" left-arrow @click-left="back">
      <van-icon name="" slot="right" />
    </van-nav-bar>

    <div id="center">
      <div class="item" v-for="doctor in doctors" :key="doctor.id">
        <img class="avatar" src="../../assets/image-duping/doctor1.png" alt="" />
        <div class="doctorinfo">
          <div id="doctorinfo_head">
            <span id="name">{{ doctor.doctorname }}</span>
            <span id="career">从业{{ doctor.workyears }}年</span>
            <button class="default-button" :class="{ sub: doctor.issub === '已关注' }"
              @click.stop="toggleButton(doctor.issub, doctor.id)">
              {{ doctor.issub }}
            </button>

          </div>
          <div id="keshi">
            {{ doctor.subject }} | {{ doctor.position }}
          </div>
        </div>
        <div class="info">
          <span>线上问诊次数{{ doctor.sonsultation_number }}</span>
          <span>综合评分{{ doctor.score }}</span>
          <span>关注人数{{ doctor.follower_number }}</span>
        </div>
        <div class="goodat">
          <div id="goodat_title">擅长方向：</div>
          <div id="goodat_content">{{ doctor.direction }}</div>
        </div>
        <div class="intro">
          <div id="intro_title">个人简介：</div>
          <div id="intro_content">{{ doctor.selfintruduce }}</div>
        </div>
      </div>
    </div>

    <span class="myfooter" @click="comfirmPay"> 立即问诊 </span>
  </div>
</template>

<script>
import { Dialog } from 'vant';
import Vue from 'vue';
Vue.use(Dialog);
export default {
  name: "doctorDetail",
  data() {
    return {
      doctors: [],
      type:''
    };
  },
  watch: {
    $route() {
      location.reload();
    },
  },
  created() {
    this.ajax({
      method: "GET",
      url: "/doctorDetail",
      params: {
        id: this.$route.query.id
      }
    }).then((res) => {
      this.doctors = res.data.des;
    });
    this.type=this.$route.query.type
  },
  methods: {
    comfirmPay() {
      this.$router.push({path:"comfireInfo",query:{type:this.type}});
    },
    back() {
      this.$router.go(-1);
    },
    toggleButton(issub, id) {
      issub === '已关注' ? issub = '关注' : issub = '已关注';
      this.ajax({
        method: 'GET',
        url: '/updatedoctor-mobile',
        params: {
          issub: issub,
          id: id
        }
      }).then(res => {
        if (issub === '已关注' && res.data.des === '关注成功') {
          Dialog.alert({
            message: '关注成功'
          }).then(() => {
            location.reload()
          });
        } else if (issub === '关注' && res.data.des === '关注成功') {
          Dialog.alert({
            message: '已取消关注'
          }).then(() => {
            location.reload()
          });
        }
      })
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./doctorDetail.scss";
</style>
