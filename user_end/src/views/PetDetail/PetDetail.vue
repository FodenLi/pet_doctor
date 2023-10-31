<template>
  <div id="petDetail">
    <van-nav-bar title="宠物详情" left-text="" left-arrow @click-left="back">
      <van-icon name="edit" slot="" />
    </van-nav-bar>
    <div style="height: 15px"></div>

    <div id="mycenter">
      <div id="avater">
        <img id="touxiang" src="../../assets/image-duping/小柴.png" />
      </div>
      <div>
        <div class="juzhong" v-if="pet[0]">{{ pet[0].nickName }}</div>
        <div>
          <div class="leirongzuo" v-if="pet[0]">性别：{{ pet[0].sex }}</div>
          <div class="leirongyou" v-if="pet[0]">种类：{{ pet[0].species }}</div>
        </div>
        <div>
          <div class="leirongzuo" v-if="pet[0]">年龄：{{ pet[0].age }}岁</div>
          <div class="leirongyou" v-if="pet[0]">就诊卡号：{{ pet[0].cardNumber }}</div>
        </div>
        <div>
          <div class="leirongzuo" v-if="pet[0]">体重：{{ pet[0].weight }}</div>
          <div class="leirongyou" v-if="pet[0]">绝育情况：{{ pet[0].isJueyu }}</div>
        </div>
        <div class="leirongzuo">备注</div>
        <textarea placeholder="主任未对宠物进行其他备注" disabled></textarea>
        <!-- <input type="text" placeholder="主任未对宠物进行其他备注" disabled> -->
      </div>
    </div>
    <span class="myfooter" @click="del"> 删除 </span>
  </div>
</template>

<script>
import { Dialog } from "vant";
import Vue from "vue";
Vue.use(Dialog);
export default {
  name: "PetDetail",
  data() {
    return {
      // neckName: '小柴',
      // sex: 'GG',
      // species: '柴犬',
      // age: 5,
      // weight: '未设置',
      // isJueyu: '未设置',
      // remark: '宠物介绍',
      // cardNumber: '455621',
      pet: [],
    };
  },
  mounted() {
    var id = this.$route.query.id;
    console.log("宠物详情" + id);
    this.ajax({
      method: "GET",
      url: "/petDetail",
      params: {
        id: id,
      },
    }).then((res) => {
      if (res.data.des === "无任何用户数据！") {
        this.isnull = true;
        console.log("ok");
      } else {
        this.pet = res.data.des;
        console.log(this.pet);
      }
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    del() {
      var id = this.$route.query.id;
      this.ajax({
        method: "GET",
        url: "/delpet",
        params: {
          id: id,
        },
      });
      Dialog.alert({
        message: "删除成功！",
      }).then(() => {
        this.$router.go(-1);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./PetDetail.scss";
</style>
