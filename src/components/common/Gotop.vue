<template>
    <div v-gd="show">
        <button class="btn-gotop" v-if="show.flag" v-gotop>top</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            show:{
                flag:false
            }
        }
    }
}
</script>

<style lang="scss">
$sc:25;
.btn-gotop{
    width: 40/$sc+rem;
    height: 40/$sc+rem;
    background: #ccc;
    border: 1px solid #ccc;
    border-radius: 25/$sc+rem;
    position: fixed;
    bottom: 20/$sc+rem;
    right: 20/$sc+rem;
}
</style>
