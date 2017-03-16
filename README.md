# vuex_shopcart

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# VUEX
## 首先先新建一个文件夹，取名store; 在main,js中引入store ,这样根组件下的子组件都可以通过this.$store访问到 ，在store文件夹里新建一个index.js，这个js引入vue,vuex,并使用vuex,最后通过export default new Vuex.Store 暴露 ；由于项目有可能数据交互过多，最好将其分为模块，并在每个模块中进行各自的数据交互，这样便于日后维护，并且明了。
          新建模块文件夹，同样在其建一个index.js(引入state，mutations,actions,getters) 并且新建state.js,mutations_types.js,mutations.js,actions.js,getters.js
    state.js中主要是放入数据，mutations_types.js中主要是定义一些mutations中事件名称，mutations.js主要写一些逻辑，actions中对mutaions中的事件进行commit,getters.js来获取一些数据 ，在vue文件中通过this.$store.dispatch('action_name') 来分发请求
   