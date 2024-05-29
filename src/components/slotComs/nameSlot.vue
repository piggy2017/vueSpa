<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-15 16:25:01
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-15 16:27:12
 * @Description: 
-->
<template>
    <div>
      <pre>测试vue的具名插槽slot</pre>
        <slot name="title"></slot>
        <slot name="body"></slot>
    </div>
  </template>
  
  <script>
  export default {
      data(){
          return{
              msg:'默认的插槽内容',
          }
      }
  }
  </script>
  <style scoped>
 
  </style>>