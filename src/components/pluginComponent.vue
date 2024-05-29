<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-08 15:48:51
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-10 14:47:52
 * @Description: 
-->
<template>
    <div class="plugin_wrap">
      <hr />
      <pre>
        插件:plugin,可以将一些公共的方法,过滤器,指令等封装到一个插件中,然后在Vue中使用;
        本质:包含install方法的一个对象,install方法会在Vue.use()时自动调用;,install的第一个参数是Vue构造器,第二个参数是使用插件时所传递的参数;
        使用方式:
          第一步:定义插件,例如:
            export default {
              install(Vue,options){
                // 1.添加全局过滤器
                Vue.filter(...)
                // 2.添加全局混入
                Vue.mixin(...)
                // 3.添加全局指令
                Vue.directive(...)
                // 4.添加全局实例方法
                Vue.prototype.$myMethod = function(){
                  alert('测试插件中的方法');
                }
              }
            }
          第二步:使用插件,例如:
            import plugin from './plugin.js';
            Vue.use(plugin);
      </pre>
      <h2>{{ msg }}</h2>
      <h2>使用插件中的过滤器来截取字符串:{{ msg | mySlice }}</h2>
      <h3>姓名:{{ name }}</h3>
      <h3>全局的混入X:{{ x }},全局的混入Y:{{ y }}</h3>
      <button @click="show">点击测试插件中全局混入的方法</button>
      <button @click="hello">点击测试插件中给Vue的原型上添加的方法</button>
      <hr />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        msg: "测试使用插件中的过滤器来截取msg",
        name:'张三',
      };
    },
  };
  </script>
  
  <style>
  .plugin_wrap{
    color: blueviolet;
  }
  </style>