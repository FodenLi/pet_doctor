<template>
    <div class="breathe">
        <div class="top">
            <van-nav-bar title="呼吸系统" left-arrow @click-left="back">
            </van-nav-bar>
            <van-search v-model="value"  placeholder="搜索" />
        </div>


        <div class="result_wiki" v-for="(info,index) in wikiinfos" :key="index" @click="details(info)">
            <div class="wiki_left">
                <div class="title">
                    <p>{{info.title}}</p>
                </div>
                <div class="wiki_content">
                    <p>宠物常见的呼吸系统疾病有哮喘......</p>
                </div>
                <div class="looknum">
                    <img src="../../assets/search/small_eye.png">
                    <span>1432</span>
                </div>
            </div>
            <div class="wiki_right">
                <img src="../../assets/search/dog.png">
            </div>
        </div>
    </div>



</template>

<script src="./BreatheView.js"></script>

<style lang="scss">
    @import './BreatheView.scss'
</style>