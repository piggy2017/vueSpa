<template>
  <div>
    <pre>测试vue的插槽slot</pre>
    <p style="color:red;">插槽的作用:让父组件可以向子组件指定的位置插入html结构,也是一种组件之间的通信方式,适用于 父组件===》子组件</p>
    <p style="color:red;">插槽的分类:默认插槽、具名插槽、作用域插槽</p>
    <DefaultSlot>
        <p>这儿是通过slot默认插入的内容</p>
    </DefaultSlot>
    <NameSlot>
        <!-- 三种写法都可以 当插入的内容大于等于两个推荐使用template -->
        <template v-slot:title>
            <p>这儿是通过具名插槽插入的内容--title</p>
            <p>subtitle</p>
        </template>
        <template slot='body'>
            <p>这儿是通过具名插槽插入的内容--body</p>
            <p>subbody</p>
        </template>
        <!-- <p slot="title">这儿是通过具名插槽插入的内容--title</p>
        <p slot="body">这儿是通过具名插槽插入的内容--body</p> -->
    </NameSlot>
    <ScopeSlot>
        <template scope="slotProps">
            <p>这儿是通过作用域插槽插入的内容</p>
            <p style="color:red;">{{slotProps.msg}}</p>
        </template>
    </ScopeSlot>
  </div>
</template>
  
  <script>
import DefaultSlot from "./slotComs/defaultSlot.vue";
import NameSlot from "./slotComs/nameSlot.vue";
import ScopeSlot from "./slotComs/scopeSlot.vue";
export default {
  data() {
    return {
      msg: "默认的插槽内容",
    };
  },
  components:{
    DefaultSlot,
    NameSlot,
    ScopeSlot
  }
};
</script>
  
  <style scoped>
</style>>