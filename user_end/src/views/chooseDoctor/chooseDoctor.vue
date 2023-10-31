<template>
    <div id="chooseDoctor">
            <van-nav-bar title="在线问诊" left-text="" left-arrow>
            <van-icon name="" slot="right" />
        </van-nav-bar> 
        <div id="box">
                <div class="date_item">
                    <div>6月21号</div>
                    <div>星期一</div>
                </div>    
                <div class="date_item">
                    <div>6月22号</div>
                    <div>星期二</div>
                </div>    
                <div class="date_item">
                    <div>6月23号</div>
                    <div>星期三</div>
                </div>    
                <div class="date_item">
                    <div>6月24号</div>
                    <div>星期四</div>
                </div>    
                <div class="date_item">
                    <div>6月25号</div>
                    <div>星期五</div>
                </div>      
                <div class="date_item">
                    <div>6月26号</div>
                    <div>星期六</div>
                </div>    
                <div class="date_item">
                    <div>6月27号</div>
                    <div>星期日</div>
                </div>    
        </div>      

        <div v-for="i in doctor" :key="i.id">
            <div style="height: 15px;"></div>
            <div class="item">
                <img class="avatar" src="../../assets/image-duping/doctor1.png" alt="">
                <div class="doctorinfo">
                    <div id="doctorinfo_head">
                        <span id="name">{{ i.name }}</span>
                        <span id="career">从业{{ i.workyear }}年</span>
                        <!-- <span class="isonline" v-if="i.isonline">在线</span>
                        <span class="isonline" v-else>离线</span> -->
                        <button>关注</button>
                    </div>                    
                    <div id="keshi">{{i.keshi}} | {{i.zhiwei}}</div>
                </div>
                <div class="info">线上问诊次数{{i.online_times}}综合评分{{i.rate}}关注人数{{i.subscribe_num}}</div>
                <div class="goodat">擅长：{{i.goodat}}</div>
                <div id="fee">
                    <span>问诊费用<span> {{i.fee}} </span>元/次</span>
                    <button id="call">立即问诊</button>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'chooseDoctor',
    data() {
        return {
            doctor: [
                { id: 1, img: "", name: "张婷", workyear: 6, isonline: true, keshi: "骨科", zhiwei: "主任医师", online_times: "1254", rate: "4.8", subscribe_num: "1284", goodat: "治疗宠物骨折多年，有过重度骨折治愈的经验", fee: 6 },
                { id: 2, img: "", name: "谢馨宇", workyear: 5, isonline: false, keshi: "呼吸科", zhiwei: "主任医师", online_times: "1254", rate: "4.8", subscribe_num: "1284", goodat: "治疗宠物骨折多年，有过重度骨折治愈的经验", fee: 4 }
            ]
        }
    }
}

</script>

<style lang="scss" scoped>
@import "./chooseDoctor.scss";
</style>