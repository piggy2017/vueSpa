<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-10 15:15:02
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-15 16:15:40
 * @Description: 
-->
<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-10 15:15:02
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-14 11:01:29
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
import PubSub from "pubsub-js";
export default {
  data() {
    return {
      msg: "消息订阅与发布的方式实现组件之间的通讯--",
      name: "李四",
    };
  },
  mounted() {
    // 订阅消息
    this.pubId = PubSub.subscribe("sendName", (msg, data) => {
      //  msg: sendName, data: 李四
      console.log("smgsubTwo组件中接收到smgsubOne传递的消息:", msg, data); // smgsubTwo组件中接收到smgsubOne传递的消息: sendName 李四
      this.name = data;
    });
  },
  beforeDestroy() {
    // 取消订阅
    PubSub.unsubscribe(this.pubId);
  },
};
</script>
    
    <style>
</style>