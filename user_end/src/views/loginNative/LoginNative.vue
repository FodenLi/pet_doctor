<template>
    <div class="loginNative">
        <div class="head">
            <div class="return" @click="ret"><img src="../../assets/img/return.png" alt=""></div>
        </div>
        <div class="neck">
            <div class="logo"><img src="../../assets/img/logo.png" alt=""></div>
        </div>
        <div class="tel">
            {{ tel }}
        </div>
        <div class="others" @click="others">
            其他方式登录
        </div>
        <div class="box">
            <div class="login" @click="login">
                本机号码一键登录
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import './LoginNative.scss';
</style>
<script src="./LoginNative.js"></script>