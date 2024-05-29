<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-07 15:31:15
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-20 10:23:45
 * @Description: 
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <hr />
    <h1>测试 ref 的使用</h1>
    <h1 ref="sName">学生姓名:{{ studentName }}</h1>
    <h1 ref="sAge">学生年龄:{{ age }}</h1>
    <button @click="showDom">点击输入ref</button>
    <RefComponent ref="refTest"></RefComponent>
    <br />
    <TestProps name="张三" sex="男" :age="20"></TestProps>
    <TestProps name="李四" sex="未知" :age="15"></TestProps>
    <br />
    <MixinComponent></MixinComponent>
    <br />
    <PluginComponentVue></PluginComponentVue>
    <br>
    <p>下面的两个组件通过事件bug的方式实现组件之间的通讯</p>
    <BusOne></BusOne>
    <BusTwo></BusTwo>
    <br>
    <p>下面的两个组件 通过pubsub-js库来实现组件通讯</p>
    <SmgsubOne></SmgsubOne>
    <SmgsubTwo></SmgsubTwo>
    <br>
    <TranstionComponent></TranstionComponent>
    <br>
    <hr>
    <SlotComponent></SlotComponent>
    <hr>
    <Count></Count>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import RefComponent from "./components/refComponent.vue";
import TestProps from "./components/testProps.vue";
import MixinComponent from "./components/mixinComponent.vue";
import PluginComponentVue from "./components/pluginComponent.vue";

import BusOne from "./components/busOne.vue";
import BusTwo from "./components/busTwo.vue";

import SmgsubOne from "./components/smgsubOne.vue";
import SmgsubTwo from "./components/smgsubTwo.vue";

import TranstionComponent from "./components/transtionComponent.vue";

import SlotComponent from "./components/slotComponent.vue";

// 测试vuex功能
import Count from "./components/vuex/count.vue";
export default {
  name: "App",
  data() {
    return {
      studentName: "张三",
      age: 20,
    };
  },
  components: {
    HelloWorld,
    RefComponent,
    TestProps,
    MixinComponent,
    PluginComponentVue,
    BusOne,
    BusTwo,
    SmgsubOne,SmgsubTwo,TranstionComponent,SlotComponent,
    Count
  },
  methods: {
    showDom() {
      console.log(this.$refs);
      console.log(this.$refs.sName); // 输出:<h1>学生姓名:张三</h1>
      console.log(this.$refs.refTest); // 输出的是VueComponent,也就是组件的实例对象
      setTimeout(() => {
        this.$refs.refTest.getDom(); // 调用子组件中的方法
      }, 1000);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
