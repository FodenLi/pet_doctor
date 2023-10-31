<template>
  <div>
    <!-- 头部背景 -->
    <div class="headers">
      <div class="setting iconfont icon-shezhi"></div>
    </div>
    <div class="box">
      <!-- 头像 -->
      <div class="sculpture">
        <div class="info">
          <div class="head-sculpture">
            <img src="../../assets/img/head.png" alt="" />
          </div>
          <div>
            <span @click="login">登录</span> |
            <span>注册</span>
          </div>
          <!-- <div class="icon iconfont icon-xiugai"></div> -->
        </div>
      </div>
      <!-- 常用信息 -->
      <div class="useInfo">
        <div class="infoTitle"><span>常用信息</span></div>
        <div class="userOption">
          <ul>
            <li>
              <span class="iconfont icons icon-chongwu"></span
              ><span class="txt">我的宠物</span>
            </li>
            <li>
              <span class="iconfont icons icon-menzhenguahao"></span
              ><span class="txt">挂号记录</span>
            </li>
            <li>
              <span class="iconfont icons icon-jilu"></span
              ><span class="txt">处方记录</span>
            </li>
            <li>
              <span class="iconfont icons icon-jilu1"></span
              ><span class="txt">病例记录</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 用户选项 -->
    <div class="userSelect">
      <div class="userItem" v-for="(item, index) in asu" :key="index">
        <div class="leftIcon iconfont" :class="item.leftIcon"></div>
        <div class="modelTxt">{{ item.modelTxt }}</div>
        <div class="rightIcon iconfont" :class="item.rightIcon"></div>
      </div>
    </div>
    <!-- 底部导航 -->
    <van-tabbar v-model="active" active-color="orange">
      <van-tabbar-item icon="home-o" @click="home">首页</van-tabbar-item>
      <van-tabbar-item icon="chat-o" @click="home">消息</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<style lang="scss" scoped>
@import "./nologin.scss";
</style>
<script src="./nologin.js"></script>