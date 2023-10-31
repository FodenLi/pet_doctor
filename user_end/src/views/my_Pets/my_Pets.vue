<template>
    <div id="order">
        <van-nav-bar title="我的宠物" left-text="" left-arrow @click-left="backtrack">
            <van-icon name="" slot="right" />
        </van-nav-bar>
        <div id="center">
            <div v-if="isnull">当前没有宠物信息,请添加</div>
            <div v-else id="toptext"></div>
            <div v-for="(pet,index) in pets" :key="pet.id" class="item"  @click="petdetail(pet.id)" >
                <img id="avatar" src="../../assets/image-duping/小柴.png" alt="">
                <div class="detail">
                    <div class="nickname">
                        {{ pet.nickName }}
                    </div>
                    <div>
                        <span>性别：{{ pet.sex }}</span>
                        <span class="span_right">种类：{{ pet.species }}</span>
                    </div>
                    <div>
                        <span>年龄：{{ pet.age }}</span>
                        <span class="span_right">就诊卡号：{{ pet.cardNumber }}</span>
                    </div>
                </div>
                <!-- <div id="add" v-on:click.stop="changeImage(index)" >
                    <img v-if="iscomfire" src="../../assets/image-duping/comfire_add.png" alt="图片">
                    <img v-else src="../../assets/image-duping/not_comfire_add.png" alt="图片">
                </div> -->
            </div>
            <div id="addpet">
                <img src="../../assets/image-duping/添加宠物.png" alt="图片" @click="addpet">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my_Pets',
    data() {
        return {
            iscomfire: true,
            pets:[],
            isnull:false            
        }
    },

    mounted() {
        console.log('ok')
            this.ajax({
                method:'GET',
                url:'/order',
            }).then(res => {
               
                if(res.data.des==='无任何用户数据！'){
                    this.isnull=true
                    console.log('ok')
                }else{
                    this.pets = res.data.des
                    console.log(this.pets)
                }  
            })
            
        },
    watch: {
        $route() {
            location.reload();
        },
    },
    methods: {
        changeImage(index) {
            console.log(index);
            
            this.iscomfire=!this.iscomfire; 
        },
        addpet(){
            this.$router.push("/addpet")
        },
        backtrack(){
            this.$router.go(-1);
        },
        petdetail(id){
            // this.$router.push("/PetDetail")
            console.log(id)
            this.$router.push({ path: '/PetDetail', query: { id: id } })
            
        },
        next(){            
            this.$router.push("/onlineInquiry")
        },      
    },
    

}
</script>

<style lang="scss" scoped>
@import "./my_Pets.scss"
</style>