<!--
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-08 15:35:02
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-08 15:46:44
 * @Description: 
-->
<template>
    <div class="mixin">
        <hr>
        <pre>
            mixin:混入,可以将多个组件中的相同的代码提取出来,放到一个mixin中,然后在需要的组件中引入即可;
            使用方式:
                第一步定义混合,例如:
                    export default {
                        data(){
                            return {
                                msg: '测试mixin'
                            }
                        },
                        methods:{
                            showName(){
                                alert(this.name);
                            }
                        }
                    }
                第二步使用混入,例如:
                    全局混入:Vue.mixin(xxx)
                    局部混入:export default {
                        mixins:['xxx']
                    }
        </pre>
        <h3>{{ msg }}</h3>
        <h3 @click="showName">点击弹窗展示name:{{ name }}</h3>
        <h3>全局的混入X:{{ x }},全局的混入Y:{{ y }}</h3>
        <hr>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg: '测试mixin',
            name:"张三"
        }
    },
    methods:{
        showName(){
            alert(this.name);
        }
    }
}
</script>

<style>
.mixin{
    color: green;
}
</style>