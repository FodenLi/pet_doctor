<template>
    <div class="wiki_breathe">
        <div class="top">
            <van-nav-bar title="文章详情" left-arrow @click-left="back">
                <template #right>
                    <div class="iconfont icon-aixin--xian" @click="collect"></div>
                </template>
            </van-nav-bar>
        </div>
        <div class="title">
            <p>{{ detailsinfo.title }}</p>
        </div>
        <div class="contents">
            <div class="time">
                <p>{{ detailsinfo.release_time }}</p>
            </div>
            <img src="../../assets/search/bigdog.png">
            <div class="details">
                <div class="theme">
                    <p>{{detailsinfo.theme}}</p>
                </div>
                <div class="content">
                    <p>{{detailsinfo.content1}}</p>
                </div>
                <div class="content">
                    <p>{{detailsinfo.content2}}</p>
                </div>
                <div class="content">
                    <p>{{detailsinfo.content3}}</p>
                </div>
                <div class="content">
                    <p>{{detailsinfo.content4}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./WikiBreatheView.js"></script>
<style lang="scss">
@import './WikiBreatheView.scss'
</style>