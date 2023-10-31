<template>
    <div class="chat">
        <div class="top">
            <van-nav-bar title="谢馨予医生" left-arrow @click-left="back">
            </van-nav-bar>
        </div>
        <div class="middle" v-for="item,index in items" :key="index">
            <div class="infortwo"  >
                <div class="message-two">
                    <div class="text">{{ item }}</div>
                </div>
                <div class="triangle-right"></div>
                <div class="head-sculpture-two">
                    <img src="../../assets/image/sculpture.png" alt="">
                </div>
            </div>
            <div class="inforone">
                <div class="head-sculpture-one">
                    <img src="../../assets/img/touxiang2.png" alt="">
                </div>
                <div class="triangle-left"></div>
                <div class="message-one">
                    <div class="text">{{item}}</div>
                </div>
            </div>
        </div>
        <div class="foot">
            <div class="footer">
                <div class="voice"><img src="../../assets/img/语音.png" alt=""></div>
                <div class="inp"><input type="text" v-model="infor"></div>
                <div class="expression"><img src="../../assets/img/表情.png" alt=""></div>
                <div class="add"><img src="../../assets/img/添加.png" alt=""></div>
                <div class="send"><button @click="send">发送</button></div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import './XieXinyu.scss'
</style>
<script src="./XieXinyu.js">