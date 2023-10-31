<template>
    <div class="chatman"> 
        <div class="top">
            <van-nav-bar title="张婷医生">
            </van-nav-bar>
        </div>
        <div class="body">
            <div class="infor" v-for="(info,index) in infos" :key="index" @click="infor(index)">
                <div class="sculpture"><img :src="info.sculpture" alt=""></div>
                <div class="middle">
                    <div class="name">
                        <div>{{ info.name }}</div>
                    </div>
                    <div class="content">{{info.message}}</div>
                </div>
                <div class="right">
                    <div class="time">{{info.time}}</div>
                </div>
            </div>
        </div>
        <DownNavView></DownNavView>
    </div>
</template>
<style lang="scss" scoped>
@import './ChatMan.scss';
</style>
<script src="./ChatMan.js"></script>