/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-08 15:51:54
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-08 16:08:45
 * @Description: 
 */
export default{
    install(Vue){
        console.log("@@@install",Vue);

        // 定义全局的过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4);
        })

        // 定义全局指令
        Vue.directive('fBind', {
            bind(el, binding, vnode) {console.log(el, binding, vnode)},
            inserted(el, binding, vnode) {console.log(el, binding, vnode)},
            update(el, binding, vnode, oldVnode) {console.log(el, binding, vnode,oldVnode)},
            componentUpdated(el, binding, vnode) {console.log(el, binding, vnode)},
            unbind(el, binding, vnode) {console.log(el, binding, vnode)},
        });
        
        // 定义全局的混入
        Vue.mixin({
            data(){
                return {
                    x:100,
                    y:200,
                }
            },
            created(){
                console.log('我是全局的混入');
            },
            methods:{
                show(){
                    alert('我是全局混入的方法');
                }
            }
        });

        // 给Vue的原型上添加一个方法
        Vue.prototype.hello = ()=>{
            alert('你好啊,Vue');
        }
    }
}