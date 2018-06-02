<template>
    <div class="films">
        <film-item v-for="(film,index) in films" :key="index" :type="info.type" :film="film" ></film-item>
        <button class="btn">更多{{info.title}}电影</button>
    </div>
</template>

<script>
import filmItem from "@/components/container/index/filmItem"
export default {
    props:["info"],
    data(){
        return {
            films:[]
        }
    },
   components:{
       filmItem,
   },
    created(){
        this.$http.get("/mz/v4/api/film/"+this.info.url,{
            params:{
                __t:Date.now(),
                page:1,
                count:this.info.count
                }
        }).then((res)=>{
            // console.log(res);
            this.films = res.data.data.films;
        });
    }
}
</script>

<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
    .btn{
        width: 150/$sc+rem;
        height:40/$sc+rem;
        border-radius: 20/$sc+rem;
        border: none;
        margin-top: 40/$sc+rem;
        margin-bottom: 40/$sc+rem;
        color: white;

    }
</style>
