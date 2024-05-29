<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-10 15:14:54
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-10 15:25:23
 * @Description: 
-->
<template>
  <div class="">
    <p>{{ msg }}</p>
    <p>需要安装pubsub-js来进行实现</p>
    
    <button @click="postParams">点击给smgsubTwo组件组件传递我的名字</button>
    <hr />
  </div>
</template>
    
<script>
import PubSub from 'pubsub-js';
export default {
  data() {
    return {
      msg: "消息订阅与发布的方式实现组件之间的通讯--",
      name: "李四",
    };
  },
  methods:{
    postParams(){
      // 发布消息
      PubSub.publish("sendName",this.name);
    }
  }
};
</script>
    
<style>
</style>