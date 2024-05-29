<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-08 15:48:51
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-27 15:18:19
 * @Description: 
-->
<template>
    <div class="">
        <p>{{ msg }}</p>
        <div>我的名字:{{ name }}</div>
        <button @click="postParams">点击给bus2组件组件传递我的名字</button>
        <hr>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        msg: "用于测试组件之间的通讯---使用全局事件的方式 11",
        name:'张三',
      };
    },
    methods:{
        postParams(){
            // 1.使用全局事件的方式传递数据
            this.$bus.$emit('sendName',this.name);
        }
    }
  };
  </script>
  
  <style>

  </style>