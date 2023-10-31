<template>
  <div>
    <!-- 导航 -->
    <van-nav-bar title="设置" left-arrow @click-left="edit"> </van-nav-bar>
    <van-field
      v-for="(item, index) in label"
      :key="index"
      is-link
      :label="item"
      @click="routess(item)"
    />
    <van-field label="小医生版本" />
    <span class="version">v1.0.0</span>
  </div>
</template>

<script src="./SettingView.js"></script>
<style lang="scss" scoped>
@import "./SettingView.scss";
</style>