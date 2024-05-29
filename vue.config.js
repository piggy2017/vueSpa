/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-05-07 15:31:15
 * @LastEditors: 孙林
 * @LastEditTime: 2024-05-14 16:48:10
 * @Description: 
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,    // 关闭语法检查

  // 这种配置不能配置多个代理,假如当前服务器有和目标服务器同名的接口,则会出现问题
  // devServer:{   // 开启代理服务器,配置成功了过后需要重启项目
  //   proxy:'http://localhost:3000'  // 最终真实需要请求的地址
  // },

  // 方式2,可配置多个代理
  devServer: {      
    proxy: {
      '/api': {   // 请求的前缀,如果前缀是/api,则走下面的代理
        target: 'http://localhost:8080',   
        pathRewrite: { '^/api': '' },   // 重写路径,将/api替换成空字符串
        ws:true,                        // 支持websocket,默认为true
        changeOrigin: true              // 用于控制请求头的host的值,默认为true
      },
      '/order':{
        target: 'http://localhost:3001',   
        pathRewrite: { '^/order': '' },   // 重写路径,将/order替换成空字符串
      }
    }
  }
  // 我们当前项目启动后的默认地址为:   http://localhost:8080/
  // 假如我们有一个服务器接口:        http://localhost:3000/goods
  // 端口不一致,就会跨域,所以需要配置代理服务器
  // 代理服务器的配置如上的:/api
  // 我们发起请求:需要带上前缀/api:   ajax.get('http://localhost:3000/api/goods').then(res=>{})
  // 
})
