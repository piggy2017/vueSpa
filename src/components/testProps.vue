<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-08 15:08:10
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-08 16:06:16
 * @Description: 
-->
<template>
  <div class="test_props">
    <hr />
    <pre>
        props是只读的,vue底层会监测你对props的修改,如果进行了修改就会发出警告;
        若业务需要进行修改,请复制props的值到data中,然后再去修改data中的值;
    </pre>
    <h1>{{ msg }}</h1>
    <h3>姓名:{{ name }},性别:{{ sex }},年龄:{{ age }}</h3>
    <h3>修改后的age:{{ myAge }}</h3>
    <button @click="myAge++">尝试修改传入的age</button>
    <hr />
  </div>
</template>

<script>
export default {
  // props:['name','sex','age'],  // 简单声明接受
  props: {
    name: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      default: "未知",
    },
    age: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      msg: "测试props",
      myAge:this.age
    };
  },
  watch: {
    name(newValue, oldValue) {
      console.log("name:", newValue, oldValue);
    },
  },
};
</script>

<style>
.test_props {
  color: blue;
}
</style>