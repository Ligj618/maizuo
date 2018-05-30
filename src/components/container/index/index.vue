<template>
    <div>
        <Swiper></Swiper>
        <div class="films-container">
            <Films v-for="item in list" :key="item.id" :info="item.info">{{item}}</Films>
        </div>
        <gotop/>
    </div>
    
</template>


<script>
import Films from "@/components/container/index/Films"
import Swiper from "@/components/container/index/Swiper"
import Gotop from "@/components/common/Gotop"
export default {
    data(){
        return {
            list:[
                {id:1,info:{url:'now-playing',type:'hot',title:'热映',count:5}},
                {id:2,info:{url:'coming-soon',type:'coming',title:'即将上映',count:3}},
            ]
        }
    },
    components:{
        Films,Swiper,Gotop
    },

}
</script>

<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
.films-container{
    width: 100%;
    padding: 10/$sc+rem;
    background: #ccc;
}
</style>
