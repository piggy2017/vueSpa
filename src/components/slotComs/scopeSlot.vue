<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-15 16:34:52
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-15 16:43:57
 * @Description: 
-->
<template>
    <div>
      <pre>测试vue的作用域插槽slot</pre>
      <slot :msg="msg">这儿是默认的内容</slot>
    </div>
  </template>
  
  <script>
  export default {
      data(){
          return{
              msg:'作用域插槽,通过作用域插槽给使用者传递的数据 哈哈哈哈',
          }
      }
  }
  </script>
  <style scoped>
 
  </style>>