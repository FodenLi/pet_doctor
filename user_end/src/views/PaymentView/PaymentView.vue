<template>
   <div id="PaymentView">
      <van-nav-bar title="付款" left-text="" left-arrow @click-left="back">
        <van-icon name="" slot="right" />
      </van-nav-bar>

      <div id="top_text">请选择支付方式</div>
      <div id="ali_pay">
         <img src="../../assets/image-duping/ali_pay.png">
         <div id="ali_top">支付宝支付</div>
         <br>
         <div id="ali_bottom">推荐有支付宝账户的用户使用</div>
         <div id="add" v-on:click="changeImage">
            <img v-if="iscomfire" src="../../assets/image-duping/comfire_add.png" alt="图片">
            <img v-else src="../../assets/image-duping/not_comfire_add.png" alt="图片">
        </div>
      </div>

      <div style="height: 5px;"></div>

      <div id="we_pay">
         <img src="../../assets/image-duping/we_pay.png">
         <div id="ali_top">微信支付</div>
         <br>
         <div id="ali_bottom">推荐有微信账户的用户使用</div>
         <div id="add1" v-on:click="changeImage1">
            <img v-if="iscomfire1" src="../../assets/image-duping/comfire_add.png" alt="图片">
            <img v-else src="../../assets/image-duping/not_comfire_add.png" alt="图片">
        </div>
      </div>
      <div id="foot">
          <div id="title">付款详情</div>
          <div class="foot_row">
            <span class="foot_left">订单详情</span>
            <span class="foot_right">挂号缴费</span>
          </div>
          <hr>
          <div class="foot_row">
            <span class="foot_left">支付宝账户</span>
            <span class="foot_right">138******22</span>
          </div>
          <hr>
          <div class="foot_row">
            <span class="foot_left">付款方式</span>
            <span class="foot_right">余额宝</span>
          </div>
          <hr>
          <div class="foot_row">
            <span class="foot_left">需付费</span>
            <span class="foot_right">6元</span>
          </div>
          <span class="myfooter" @click="comfirmPay">
            确认付款
        </span>
      </div>
   </div>
</template>

<script>
 export default{
    name:"PaymentView",
    data(){
        return{
         iscomfire:false,
         iscomfire1:false
        }
    },
    methods: {
      //点击使用支付宝支付
        changeImage() {
          if(!this.iscomfire){  
            this.iscomfire=!this.iscomfire;          
          if(this.iscomfire1){
              this.iscomfire1=!this.iscomfire1;                   
          }
        }          
        },
      //点击使用微信支付
        changeImage1() {
          if(!this.iscomfire1){   
            this.iscomfire1=!this.iscomfire1;        
          if(this.iscomfire){
              this.iscomfire=!this.iscomfire;            
            }
             }            
        },
        comfirmPay(){
          this.$router.push("/comfireInfo");
        },
        back(){
            this.$router.go(-1)
         }
    },
 }
</script>

<style lang="scss" scoped>
  @import "./PaymentView.scss";
</style>