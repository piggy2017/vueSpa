<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-14 14:00:35
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-14 14:35:30
 * @Description: 
-->
<template>
  <div>
    <pre>测试vue的过渡效果</pre>
    <pre>
        元素进入的样式:
            1.v-enter: 进入的起点
            2.v-enter-active: 进入过程中
            3.v-enter-to: 进入的终点
        元素离开的样式:
            1.v-leave: 离开的起点
            2.v-leave-active: 离开过程中
            3.v-leave-to: 离开的终点
        备注:如果有多个元素需要过度,则需要使用<transition-group></transition-group>,且里面的每一个元素都要指定key值
    </pre>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <pre>appear 让动画默认执行</pre>
    <transition appear>
        <h1 v-show='isShow'>不设置name,v-enter-active</h1>
    </transition>
    <transition appear name="hello">
        <h1 v-show='isShow'>不设置name,name-enter-active</h1>
    </transition>
    <p>下面的示例不用动画,而用过度效果</p>
    <transition appear name="hi">
        <h2 v-show='isShow'>过度效果</h2>
    </transition>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isShow:true
        }
    }
}
</script>

<style scoped>
h1{
    background-color: orange;
}
h2{
    background-color: olive;
    transition: all 1s linear;
}
.v-enter-active{
    animation:myAni 1s;
}
.v-leave-active{
    animation:myAni 1s reverse;
}
@keyframes myAni {
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0);
    }
}
.hello-enter-active{
    animation:myAni 2s;
}
.hello-leave-active{
    animation:myAni 2s reverse;
}


/* 过度动画的进入的起点 */
.hi-enter{
    transform: translateX(-100%);
}
/* 过度动画的进入的终点 */
.hi-enter-to{
    transform: translateX(0);
}
/* 离开的起点 */
.hi-leave{
    transform: translateX(0);
}
/* 离开的终点 */
.hi-leave-to{
    transform: translateX(-100%);
}
</style>>
