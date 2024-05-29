<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-20 10:17:49
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-21 10:44:50
 * @Description: 
-->
<template>
  <div>
    <hr />
    <pre>
        组件中读取vuex中的数据:{{ $store.state.count }}
        组件中修改vuex中的数据:
            $store.dispatch('actions中的方法名',参数) 或
            $store.commit('mutations中的方法名',参数)
        备注:如果没有网络请求或其他的业务逻辑,组件中可以越过actions,即不写dispatch,直接commit.
            actions中的方法可以异步操作,mutations中的方法是同步操作.
    </pre>
    <pre>
        1.mapState:将vuex中的state映射到组件的computed计算属性中;
        2.mapGetters:将vuex中的getters映射到组件的computed计算属性中;
        3.mapActions:将vuex中的actions映射到组件的methods方法中;
        4.mapMutations:将vuex中的mutations映射到组件的methods方法中;
        备注:mapActions和mapMutations使用时,如需传递参数,在模板绑定事件时传递好参数,否则参数是事件对象.
    </pre>
    <select v-model="type">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>

    <button @click="increment">点击加</button>
    <button @click="encrement">点击减</button>
    <button @click="incrementWait">延迟0.5秒加</button>

    <p>
      当前count:{{ $store.state.count }},通过 mapState 获取到的值:{{ count }}
    </p>
    <p>{{ $store.getters.showBigNum }}</p>
    <p>通过 mapGetters 获取到的值:{{ showBigNum }}</p>
    <h3>我在 {{ $store.state.school }} ,学习 {{ $store.state.subject }}</h3>
    <h3>通过 mapState 获取到的:我在 {{ school }} ,学习 {{ subject }}</h3>
    <hr />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      type: 1,
      //count: 1,
    };
  },
  mounted() {
    console.log("count mounted", this);
  },
  methods: {
    increment() {
      //this.$store.dispatch('add',this.type);
      this.$store.commit("ADD", this.type);
    },
    encrement() {
      // this.$store.dispatch('reduce');
      this.$store.commit("REDUCE");
    },
    ...mapMutations(["increment", "decrement"]),

    incrementWait() {
      this.$store.dispatch("addWait");
    },
  },
  computed: {
    ...mapState(["count", "school", "subject"]),
    ...mapGetters(["showBigNum"]),
  },
};
</script>

<style>
</style>