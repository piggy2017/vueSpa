<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-10 14:33:45
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-10 15:09:22
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
      msg: "用于测试组件之间的通讯---使用全局事件的方式 22",
      name: "李四",
    };
  },

  mounted() {
    // 2.使用全局事件的方式接收数据  方式1
    this.$bus.$on("sendName",this.sendName);
    // 方式2
    // this.$bus.$on("sendName", (name) => {
    //   console.log("我接受到了bus1组件传递过来的数据:" + name);
    //   this.name = name;
    // });
  },
  methods:{
    sendName(_name){
      console.log("我接受到了bus1组件传递过来的数据:" + _name);
      this.name = _name;
    }
  },
  beforeDestroy() {
    // 3.组件销毁时,解绑事件
    this.$bus.$off("sendName");

    // 4.解绑所有事件
    //this.$bus.$off()
  },
};
</script>
  
  <style>
</style>