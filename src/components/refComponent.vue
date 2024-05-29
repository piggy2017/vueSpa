<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-08 14:42:37
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-08 15:07:37
 * @Description: 
-->
<template>
  <div class="school">
    <hr>
    <pre>
      ref的使用
      1.在html标签上使用ref属性,可以获取dom元素
      2.在组件标签中使用ref属性,可以获取组件的实例对象
    </pre>
    <h2 ref="schoolName">学校名称:{{ name }}</h2>
    <h2 ref="addr">学校地址:{{ address }}</h2>
    <button @click="getDom">点我通过ref获取dom</button>
    <hr>
  </div>
</template>

<script>
export default {
  // name: 'RefComponent',
    data(){
        return{
            name:'清华大学',
            address:'北京市海淀区'
        }
    },
    methods:{
      getDom(){
        console.log(this.$refs);
        console.log(this.$refs.addr);
      }
    }
}
</script>

<style>
  .school{
    color: red;
  }
</style>