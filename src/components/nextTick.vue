<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-10 15:30:57
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-10 15:36:54
 * @Description: 
-->

<template>
    <div class="">
      <p>{{ msg }}</p>
      <pre>
        this.$nextTick(),在下一次DOM更新结束后执行指定的回调.
        什么时候使用:当改变数据后,要基于更新后的新DOM进行某些操作时,要在nextTick所指定的回调函数中去执行.
      </pre>
      <hr />
    </div>
</template>
      
<script>
  export default {
    data() {
      return {
        msg: "this.$nextTick()方法的使用",
      };
    },
    mounted() {
    },
  };
</script>
      
<style>
</style>