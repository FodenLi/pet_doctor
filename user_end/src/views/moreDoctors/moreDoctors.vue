<template>
  <div id="moreDoctors">
    <van-nav-bar title="更多医生" left-text="" left-arrow @click-left="backtrack">
      <van-icon name="" slot="right" />
    </van-nav-bar>

    <div v-for="i in doctors" :key="i.id" @click="detail(i.id)">
      <div style="height: 15px"></div>
      <div class="item">
        <img class="avatar" src="../../assets/image-duping/doctor1.png" alt="" />
        <div class="doctorinfo">
          <div id="doctorinfo_head">
            <span id="name">{{ i.doctorname }}</span>
            <span id="career">从业{{ i.workyears }}年</span>
            <span class="isonline" v-if="i.isonline">在线</span>
            <span class="isonline" v-else>离线</span>
            <button class="default-button" :class="{ sub: i.issub === '已关注' }" @click.stop="toggleButton(i.issub, i.id)">
              {{ i.issub }}
            </button>
          </div>
          <div id="keshi">{{ i.subject }} | {{ i.position }}</div>
        </div>
        <div class="info">
          线上问诊次数{{ i.consultation_number }}综合评分{{ i.score }}关注人数{{
            i.follower_number
          }}
        </div>
        <div class="goodat">擅长：{{ i.direction }}</div>
        <div id="fee">
          <span>问诊费用<span> {{ i.price }} </span>元/次</span>
          <button id="call">立即问诊</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
import Vue from 'vue';
Vue.use(Dialog);
export default {
  name: "moreDoctors",
  data() {
    return {
      doctors: [],
    };
  },

  created() {
    this.ajax({
      method: "GET",
      url: "/onlineInquiry",
    }).then((res) => {
      var doctors = res.data.des;
      this.doctors = doctors;
    });
  },

  methods: {
    backtrack() {
      this.$router.go(-1);
    },
    detail(id) {
      // this.$router.push("/doctorDetail")
      this.$router.push({ path: "/doctorDetail", query: { id: id }});
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
@import "./moreDoctors.scss";
</style>
