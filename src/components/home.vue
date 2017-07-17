<template>
    <div>
        <p>{{msg}}</p>
        <i class="iconfont icon-zuowei"></i>
        <button id="d1">click</button>
    </div>
</template>
<script>
    //import $ from 'jQuery';//会报错
    console.log($,"输出成功");//可以显示

    export default {
        name:"home",
        data(){
            return {
                msg:"这是home组件"
            }
        }
    }

    $("#d1").on("click",function(){//调用不成功
        console.log(11);
    });
</script>
<style lang="">
    
</style>