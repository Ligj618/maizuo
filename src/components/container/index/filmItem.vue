<template>
    <div class="filmItem" @click="detail(film.id)">
       <div v-if="type==='hot'">
           <div class="image"><img :src="film.cover.origin" ></div>
            <div class="bottom">
                <div>
                    <p>{{film.name}}</p>
                    <p>{{film.cinemaCount}}家影院上映&nbsp;&nbsp;&nbsp;&nbsp;{{film.watchCount}}人购票 </p>
                </div>
                <div>
                    <span>评分：{{film.grade}}</span>
                </div>
            </div>
       </div>
       <div v-else type='coming'>
            <div class="image"><img :src="film.cover.origin" ></div>
            <div class="coming">
                <p>{{film.name}}</p>
                <span>{{film.premiereAt}}上映</span>
            </div>
       </div>
    </div>
</template>

<script>
export default {
    props:["type","film"],
    methods:{
        detail(id){
            this.$router.push({"name":'Detail',params:{id}});
        }
    }
}
</script>

<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
.filmItem{
    width: 100%;
    border: 1px solid #ccc;
    z-index: 10;
    background: white;
    margin-top: 10/$sc+rem;
    .image{
        width: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 10/$sc+rem;
        margin-right: 10/$sc+rem;
       p{
            font-size: 14px;
            text-align: left;
       }
        span{
            color:red;
            font-size: 16px;
        }
    }
    .coming{
        display: flex;
        justify-content: space-between;
        margin-left: 10/$sc+rem;
        margin-right: 10/$sc+rem;
        span{
            color: orange;
            font-size: 16px;
        }
    }
}

</style>
