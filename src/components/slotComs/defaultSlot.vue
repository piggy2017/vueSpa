<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-14 14:00:35
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-20 10:16:04
 * @Description: 
-->
<template>
  <div>
    <pre>测试vue的默认的插槽slot</pre>
    <!-- 默认插槽的使用方式 -->
    <slot>默认数据,当插槽没有内容的时候显示我</slot>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      msg: "默认的插槽内容",
    };
  },
};
</script>
  <style scoped>
</style>>
  