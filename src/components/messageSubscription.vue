<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-10 15:11:09
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-10 15:12:19
 * @Description: 
-->

<template>
    <div class="">
      <p>{{ msg }}</p>
      <p>bus2组件中的:{{ name }}</p>
      <hr />
    </div>
  </template>
    
    <script>
  export default {
    data() {
      return {
        msg: "消息订阅与发布的方式实现组件之间的通讯--",
        name: "李四",
      };
    },
  
  };
  </script>
    
    <style>
  </style>