<template>
  <div id="addpet">
    <van-nav-bar title="添加宠物" left-text="" left-arrow @click-left="backtrack">
      <van-icon name="" slot="right" />
    </van-nav-bar>
    <div style="height: 15px"></div>
    <div id="center">
      <div id="pet_img">
        <img src="../../assets/image-duping/宠物头像.png" />
      </div>

      <div class="row">
        <label style="color: red">*</label>
        <label>昵称</label>
        <input
          class="text"
          type="text"
          placeholder="请输入宠物的昵称"
          v-model="neckName"
        />
      </div>
      <hr />
      <div class="row">
        <label style="color: red">*</label>
        <label for="">性别</label>
        <div class="radio">
          <input
            type="radio"
            id="gg"
            name="sex"
            value="GG"
            v-model="petsex"
            placeholder="请输"
          />
          <label for="gg">GG</label>
          <input type="radio" id="mm" name="sex" value="MM" v-model="petsex" />
          <label for="mm">MM</label>
        </div>
      </div>
      <hr />
      <div class="row">
        <label style="color: red">*</label>
        <label>品种</label>
        <input
          class="text"
          type="text"
          placeholder="请输入宠物的品种"
          v-model="species"
        />
      </div>
      <hr />
      <div class="row">
        <label style="color: red">*</label>
        <label>年龄</label>
        <input class="text" type="text" placeholder="请输入宠物的年龄" v-model="age" />
      </div>
      <hr />
      <div class="row">
        <label>体重</label>
        <input class="text" type="text" placeholder="请输入宠物的体重" v-model="weight" />
      </div>
      <hr />
      <div class="row">
        <label for="">绝育情况</label>
        <div class="radio">
          <input type="radio" id="ed" name="ed" value="已绝育" v-model="isJueyu" />
          <label for="ed">已绝育</label>
          <input type="radio" id="ing" name="ing" value="未绝育" v-model="isJueyu" />
          <label for="ing">未绝育</label>
        </div>
      </div>
      <hr />
      <div class="row">
        <div>备注</div>
        <textarea
          placeholder="主任未对宠物进行其他备注"
          cols="37"
          rows="5"
          v-model="remark"
        ></textarea>
      </div>
    </div>
    <div class="myfooter" @click="addpet">添加</div>
    <!-- <input class="myfooter" type="submit" value="添加" > -->
  </div>
</template>

<script>
import { Dialog } from "vant";
import Vue from "vue";
Vue.use(Dialog);
export default {
  name: "AddPet",
  data() {
    return {
      neckName: "",
      petsex: "",
      species: "",
      age: "",
      cardNumber: "455621",
      weight: "",
      isJueyu: "",
      remark: "",
    };
  },
  methods: {
    backtrack() {
      this.$router.go(-1);
    },
    addpet() {
      var neckName = this.neckName;
      var petsex = this.petsex;
      var species = this.species;
      var age = this.age;
      var weight = this.weight;
      var isJueyu = this.isJueyu;
      var remark = this.remark;
      // console.log(neckName,petsex)
      this.ajax({
        method: "GET",
        url: "/addpet",
        params: {
          neckName: neckName,
          petsex: petsex,
          species: species,
          age: age,
          weight: weight,
          isJueyu: isJueyu,
          remark: remark,
        },
      }).then((res) => {
        console.log(res.data.des);
      });
      Dialog.alert({
        message: "添加成功！",
      }).then(() => {
        this.$router.go(-1);
      });
    },
    // addpet(){

    //      const info = {
    //             neckName:this.neckName,
    //             petsex:this.petsex,
    //             species:this.species,
    //             age:this.age,
    //             cardNumber:this.cardNumber,
    //             weight:this.weight,
    //             isJueyu:this.isJueyu,
    //             remark:this.remark,
    //         }

    //         console.log(info);

    //         this.ajax({
    //         method:"GET",
    //         url:"/addpet",
    //         data:{
    //             neckName:this.neckName,
    //             petsex:this.petsex,
    //             species:this.species,
    //             age:this.age,
    //             cardNumber:this.cardNumber,
    //             weight:this.weight,
    //             isJueyu:this.isJueyu,
    //             remark:this.remark,
    //         }
    //     }).then(res=>{
    //         console.log(res.data)
    //     }

    // }
  },
};
</script>

<style lang="scss" scoped>
@import "./AddPet.scss";
</style>
