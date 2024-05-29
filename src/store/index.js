/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-20 10:37:18
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-21 10:13:28
 * @Description: 
 */
// 
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// actions---用于响应组件中的动作,在actions中不能直接修改state中的数据
const actions = {
    add(context, n) {
        console.log("actions中的add方法被调用了", context, n)
        context.commit('ADD', n)
    },
    reduce(context) {
        context.commit('REDUCE')
    },
    addWait(context) {
        // 异步操作
        setTimeout(() => {
            // 拿到异步操作的结果后,提交mutations
            context.commit('ADD', 10)
        }, 1000);
    }
}

// mutations---用于操作数据
const mutations = {
    ADD(state, n) {
        console.log("mutations中的ADD方法被调用了", state, n)
        state.count += n;
    },
    REDUCE(state) {
        state.count--
    }
}

// state---用于存储数据
const state = {
    count: 10,
    school: '尚硅谷',
    subject: '前端'
}

// getters---用于对store中的数据进行加工处理形成新的数据
const getters = {
    showBigNum(state) {
        return '当前最新的数量放大10倍是【' + state.count * 10 + '】'
    }
}

const store = new Vuex.Store({   // 创建一个store对象
    actions,
    mutations,
    state,
    getters
})

// 导出store对象
export default store;