<template>
    <div class="myheader">
        <tabbar :flag="flag" :toggle="toggle" ></tabbar>
        <Mynav  :flag="flag" :toggle="toggle" ></Mynav>
    </div>
</template>
<script>
import Tabbar from "@/components/container/header/Tabbar";
import Mynav from "@/components/container/header/Mynav";
export default {
    data(){
    return {
      flag:false,
    }
  },
  methods:{
    toggle(){
      this.flag = !this.flag;
    }
  },
    components:{
        Mynav,Tabbar
    }
}
</script>
<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
.myheader{
    position: fixed;
    top: 0;
    width: 100%;
    // height: 100%;
    z-index: 5;
}
</style>
