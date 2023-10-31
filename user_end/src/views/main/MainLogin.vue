<template>
  <div>
    <!-- 头部背景 -->
    <div class="headers">
      <div class="setting iconfont icon-shezhi" @click="setting"></div>
    </div>
    <div class="box">
      <!-- 头像 -->
      <div class="sculpture">
        <div class="info">
          <img src="../../assets/image/sculpture.png" alt="" />
          <div>{{ info }}</div>
          <!-- <div class="icon iconfont icon-xiugai" @click="toPersonInfo"></div> -->
        </div>
      </div>
      <!-- 常用信息 -->
      <div class="useInfo">
        <div class="infoTitle"><span>常用信息</span></div>
        <div class="userOption">
          <ul>
            <li @click="mypet">
              <span class="iconfont icons icon-chongwu"></span
              ><span class="txt">我的宠物</span>
            </li>
            <li @click="register">
              <span class="iconfont icons icon-menzhenguahao"></span
              ><span class="txt">挂号记录</span>
            </li>
            <li @click="recipel">
              <span class="iconfont icons icon-jilu"></span
              ><span class="txt">处方记录</span>
            </li>
            <li @click="cases">
              <span class="iconfont icons icon-jilu1"></span
              ><span class="txt">病例记录</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 用户选项 -->
    <div class="userSelect">
      <div
        class="userItem"
        v-for="(item, index) in asu"
        :key="index"
        @click="collect(item.modelTxt)"
      >
        <div class="leftIcon iconfont" :class="item.leftIcon"></div>
        <div class="modelTxt">{{ item.modelTxt }}</div>
        <div class="rightIcon iconfont" :class="item.rightIcon"></div>
      </div>
    </div>
    <!-- 底部导航 -->
    <DownNavView></DownNavView>
  </div>
</template>

<script src="./MainLogin.js"></script>

<style scoped>
@import "./MainLogin.css";
</style>