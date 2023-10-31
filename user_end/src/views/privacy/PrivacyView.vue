<template>
  <div>
    <!-- 导航 -->
    <van-nav-bar title="隐私政策" left-arrow @click-left="edit"> </van-nav-bar>
    <div class="titls">{{ titls }}</div>
    <div class="contant">{{ msg }}</div>
    <div class="contant">{{ msg1 }}</div>
    <div class="contant">{{ msg2 }}</div>
    <div class="contant">{{ msg3 }}</div>
    <div class="contant">{{ msg4 }}</div>
    <div class="contant">{{ msg5 }}</div>
  </div>
</template>

<script src="./Privacy.js"></script>

<style>
@import "./Privacy.scss";
</style>