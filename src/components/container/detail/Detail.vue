<template>
    <div class="detail">
        <div class="image">
            <img :src="film.cover.origin">
        </div>
        <div class="desc">
            <h3>影片简介</h3>
            <p>片名：{{film.name}}</p>
            <p>导演：{{film.director}}</p>
            <p>主演：<span v-for="(item,index) in film.actors" :key="index">{{item.name}}&nbsp;</span></p>
            <p>地区语言：{{film.language}}</p>
            <p>类型：{{film.category}}</p>
            <p>上映时间：{{date}}</p>
            <p>{{film.synopsis}}</p>
            <button>立即购票</button>
        </div>
    </div>
</template>

<script>
export default {
    props:["id"],
    data(){
        return {
            film:{
                cover:{}
            },
            date:''
            
        }
    },
    created(){
        this.$http.get("/mz/v4/api/film/"+this.id,{
            __t:Date.now(),
        }).then((res)=>{
            this.film = res.data.data.film;
            this.$bus.emit("filename",this.film.name);
            // console.log(this.film);
            let date =new Date(this.film.premiereAt);
            this.date = date.getMonth()+1+'月'+date.getDate()+'日';
            // console.log(this.date);
        });
        
    },
    methods:{
        getTime(){
            console.log(this.film.premiereAt);

        }
    }
}
</script>
<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
.detail{
    position: fixed;
    top: 50/$sc+rem;
}
.image{
    width: 100%;
    img{
        width: 100%;
        height: 100%;
    }
}
.desc{
    text-align: left;
    padding: 10/$sc+rem;
    h3{
        line-height: 40/$sc+rem;
    }
    button{
        text-align: center;
        width: 100/$sc+rem;
        height: 30/$sc+rem;
        background: orange;
        color: white;
        border: none;
        position: fixed;
        left: 35%;
        bottom: 10/$sc+rem;
        border-radius:15/$sc+rem 
    }
}
</style>
