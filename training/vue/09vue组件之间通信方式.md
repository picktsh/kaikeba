

## vue中组件之间的通信

---


#### 组件可以有以下几种关系：

![](https://user-gold-cdn.xitu.io/2019/12/31/16f5b7344e4d8dc5?w=353&h=282&f=png&s=20520)
#### A-B、B-C、B-D都是父子关系
#### C-D是兄弟关系
#### A-C、A-D是隔代关系
### 不同使用场景，如何选择有效的通信方式 ？`vue`组件中通信的几种方式 ？
### 1. `props` ★★

### 2. `$emit/$on ` ★★ 事件总线

### 3. `vuex`  ★★★

### 4.`$parent/$children`

### 5. `$attrs/$listeners`

### 6. `provide/inject`  ★★★



### vue中组件之间通信？

> 常见使用场景可以分为三类：

 * 父子组件通信
 * 兄弟组件通信
 * 跨层组件通信

1. 分几种
2. 使用
3. 选用

最后说一下在项目中怎么选用：比如我们我们项目中只是涉及到简单的数据数据传递选择props，其次如果项目中需要保存状态的时候选用vuex等等，只是说一个简单例子！













## 方法一、`props`
### 父组件A通过`props`向子组件B传递值， B组件传递A组件通过`$emit`A组件通过`v-on/@`触发
#### 1-1 父组件=>子组件传值
```
// 父组件
<template>
    <div id="app">
        <Child v-bind:child="users"></Child> //前者自定义名称便于子组件调用，后者要传递数据名
    </div>
</template>
<script>
    import Child from "./components/Child" //子组件
    export default {
        name: 'App',
        data(){
            return{
              users:["Eric","Andy","Sai"]
            }
        },
        components:{
            "Child":Child
        }
    }
</script>
```
``` 
// 子组件
<template>
    <div class="hello">
        <ul>
            <li v-for="item in child">{{ item }}</li> //遍历传递过来的值渲染页面
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'Hello World',
        props:{
            child:{           //这个就是父组件中子标签自定义名字
              type:Array,     //对传递过来的值进行校验
              required:true   //必添
            }
          }
    }
</script>
```
#### 总结：父组件通过props向下传递数据给子组件。
#### 1-2子组件=>父组件传值
```
// 子组件 Header.vue
<template>
  <div>
    <h1 @click="changeTitle">{{ title }}</h1> //绑定一个点击事件
  </div>
</template>
<script>
    export default {
      name: 'header',
      data() {
        return {
          title:"Vue.js Demo"
        }
      },
      methods:{
        changeTitle() {
          this.$emit("titleChanged","子向父组件传值"); //自定义事件  传递值“子向父组件传值”
        }
      }
    }
</script>
```
```
// 父组件
<template>
  <div id="app">
    <header v-on:titleChanged="updateTitle"></header>
    //与子组件titleChanged自定义事件保持一致
   // updateTitle($event)接受传递过来的文字
    <h2>{{ title }}</h2>
  </div>
</template>
<script>
import Header from "./components/Header"
    export default {
      name: 'App',
      data(){
        return{
          title:"传递的是一个值"
        }
      },
      methods:{
        updateTitle(e){   //声明这个函数
          this.title = e;
        }
      },
      components:{
       "app-header":Header,
      }
    }
</script>
```
### 总结：子组件通过events给父组件发送消息，实际上就是子组件把自己的数据发送到父组件。
## 方法二、`$emit/$on => $bus`
### `vue`实例 作为事件总线（事件中心）用来触发事件和监听事件，可以通过此种方式进行组件间通信包括：父子组件、兄弟组件、跨级组件
#### 例：
#### 创建bus文件
```
import Vue from 'vue'

export defult new Vue()
```
```
// gg组件
<template id="a">
  <div>
    <h3>gg组件</h3>
    <button @click="sendMsg">将数据发送给dd组件</button>
  </div>
</template>
<script>
import bus from './bus'
export default {
    methods: {
        sendMsg(){
            bus.$emit('sendTitle','传递的值')
        }
    }
}
</script>
```
```
// dd组件
<template>
    <div>
        接收gg传递过来的值：{{msg}}
    </div>
</template>
<script>
import bus from './bus'
export default {
    data(){
        return {
            mag: ''
        }
    }
    mounted(){
        bus.$on('sendTitle',(val)=>{
            this.mag = val
        })
    }
}
</script>
```

## 方法三、vuex

![](https://user-gold-cdn.xitu.io/2019/12/31/16f5ba395e2d5586?w=761&h=464&f=png&s=73324)
### 1-1 vuex介绍
#### `Vuex`实现了一个单向数据流，在全局拥有一个`State`存放数据，当组件要更改`State`中的数据时，必须通过`Mutation`提交修改信息，`Mutation`同时提供了订阅者模式供外部插件调用获取`State`数据的更新。
#### 而当所有异步操作(常见于调用后端接口异步获取更新数据)或批量的同步操作需要走`Action`，但`Action`也是无法直接修改`State`的，还是需要通过`Mutation`来修改State的数据。最后，根据`State`的变化，渲染到视图上。
### 1-2 vuex中核心概念
 * `state`：`vuex`的唯一数据源，如果获取多个`state`,可以使用`...mapState`。
     ```
     export const store = new Vuex.Store({   
     // 注意Store的S大写
     <!-- 状态储存 -->
        state: {
             productList: [
                {
                name: 'goods 1',
                price: 100
                    
                }
            ]
        }
    })
    ```
 * `getter`: 可以将`getter`理解为计算属性，`getter`的返回值根据他的依赖缓存起来，依赖发生变化才会被重新计算。
    ```
    import Vue from 'vue'
    import Vuex from 'vuex';
    Vue.use(Vuex)
    
    export const store = new Vuex.Store({ 
        state: {
            productList: [
                {
                name: 'goods 1',
                price: 100
                },
            ]
        },
        // 辅助对象 mapGetter
        getters: {
            getSaledPrice: (state) => {
                let saleProduct = state.productList.map((item) => {
                    return {
                        name: '**' + item.name + '**',
                        price: item.price / 2
                    }
                })
                return saleProduct;
            }
        }
    })
    ```
    ```
    // 获取getter计算后的值
    export default {
        data () {
            return {
                productList : this.$store.getters.getSaledPrice 
            }
        }
    }
    ```
 * `mutation`：更改`vuex`的`state`中唯一的方是提交`mutation`都有一个字符串和一个回调函数。回调函数就是使劲进行状态修改的地方。并且会接收`state`作为第一个参数`payload`为第二个参数，`payload`为自定义函数，`mutation`必须是同步函数。
    ```
    // 辅助对象 mapMutations
    mutations: {
        <!-- payload 为自定义函数名-->
        reducePrice: (state, payload) => {
            return state.productList.forEach((product) => {
                product.price -= payload;
            })
        }
    }
    ```
    ```
    <!-- 页面使用 -->
    methods: {
        reducePrice(){
            this.$store.commit('reducePrice', 4)
        }
    }
    ```
 * `action`：`action`类似`mutation`都是修改状态，不同之处,  
    > `action`提交的`mutation`不是直接修改状态  
    > `action`可以包含异步操作，而`mutation`不行  
    > `action`中的回调函数第一个参数是`context`，是一个与`store`实例具有相同属性的方法的对象  
    > `action`通过`store.dispatch`触发，`mutation`通过`store.commit`提交
    ```
    actions: {   
    // 提交的是mutation，可以包含异步操作
        reducePriceAsync: (context, payload) => {
            setTimeout(()=> {
                context.commit('reducePrice', payload);  // reducePrice为上一步mutation中的属性
            },2000)
        }
    }
    ```
    ```
    <!-- 页面使用 -->
    // 辅助对象 mapActions
    methods: {
      reducePriceAsync(){
            this.$store.dispatch('reducePriceAsync', 2)
       },
    }
    ```
 * `module`：由于是使用单一状态树，应用的所有状态集中到比较大的对象，当应用变得非常复杂是，`store`对象就有可能变得相当臃肿。为了解决以上问题，vuex允许我们将`store`分割成模块，每个模块拥有自己的`state,mutation,action,getter`,甚至是嵌套子模块从上至下进行同样方式分割。
    ```
    const moduleA = {
        state: {...},
        mutations: {...},
        actions: {...},
        getters: {...}
    }
    const moduleB = {
        state: {...},
        mutations: {...},
        actions: {...},
        getters: {...}
    }
    const store = new Vuex.Store({
        a: moduleA,
        b: moduleB
    })
    store.state.a
    store.state.b
    ```

### 1-3 vuex中数据存储 localStorage
#### `vuex` 是 `vue` 的状态管理器，存储的数据是响应式的。但是并不会保存起来，刷新之后就回到了初始状态，具体做法应该在`vuex`里数据改变的时候把数据拷贝一份保存到`localStorage`里面，刷新之后，如果`localStorage`里有保存的数据，取出来再替换`store`里的`state`。
例：
```
let defaultCity = "上海"
try {    
// 用户关闭了本地存储功能，此时在外层加个try...catch
  if (!defaultCity){
  // f复制一份
        defaultCity = JSON.parse(window.localStorage.getItem('defaultCity'))
        }
    }catch(e){
        console.log(e)
    }
export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  mutations: {
    changeCity(state, city) {
      state.city = city
      try {
      window.localStorage.setItem('defaultCity', JSON.stringify(state.city));
      // 数据改变的时候把数据拷贝一份保存到localStorage里面
      } catch (e) {}
    }
  }
})
```
### 注意：vuex里，保存的状态，都是数组，而localStorage只支持字符串，所以需要用JSON转换：
> JSON.stringify(state.subscribeList)<font color="red">// array -> string</font>
> JSON.parse(window.localStorage.getItem("subscribeList"))<font color="red">// string -> array</font>  

## 方法四、`$attr/$listeners`
### 1-1 简介
#### 多级组件嵌套需要传递数据时，通常使用的方法是通过vuex。但如果仅仅是传递数据，而不做中间处理，使用 vuex 处理，未免有点大材小用。为此Vue2.4 版本提供了另一种方法----`$attrs/$listeners`
* `$attrs`：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件。通常配合 interitAttrs 选项一起使用。
* `$listeners`：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件
### 例：
```
// index.vue
<template>
  <div>
    <h2>王者峡谷</h2>
    <child-com1 :foo="foo" :boo="boo" :coo="coo" :doo="doo" title="前端工匠"></child-com1>
  </div>
</template>
<script>
    const childCom1 = () => import("./childCom1.vue");
    export default {
      components: { childCom1 },
      data() {
        return {
          foo: "Javascript",
          boo: "Html",
          coo: "CSS",
          doo: "Vue"
        };
      }
    };
</script>
```
```
//childCom1.vue
<template class="border">
  <div>
    <p>foo: {{ foo }}</p>
    <p>childCom1的$attrs: {{ $attrs }}</p>
    <child-com2 v-bind="$attrs"></child-com2>
  </div>
</template>
<script>
    const childCom2 = () => import("./childCom2.vue");
    export default {
      components: {
        childCom2
      },
      inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性
      props: {
        foo: String // foo作为props属性绑定
      },
      created() {
        console.log(this.$attrs); 
        // { "boo": "Html", "coo": "CSS", "doo": "Vue", "title": "前端工匠" }
      }
    };
</script>
```
```
// childCom2.vue
<template>
  <div class="border">
    <p>boo: {{ boo }}</p>
    <p>childCom2: {{ $attrs }}</p>
    <child-com3 v-bind="$attrs"></child-com3>
  </div>
</template>
<script>
const childCom3 = () => import("./childCom3.vue");
export default {
  components: {
    childCom3
  },
  inheritAttrs: false,
  props: {
    boo: String
  },
  created() {
    console.log(this.$attrs); 
    // {"coo": "CSS", "doo": "Vue", "title": "前端工匠" }
  }
};
</script>
```
```
// childCom3.vue
<template>
  <div class="border">
    <p>childCom3: {{ $attrs }}</p>
  </div>
</template>
<script>
    export default {
      props: {
        coo: String,
        title: String
      }
    };
</script>
```
#### 所示`$attrs`表示没有继承数据的对象，格式为{属性名：属性值}。Vue2.4提供了`$attrs , $listeners` 来传递数据与事件，跨级组件之间的通讯变得更简单。

#### 简单来说：`$attrs与$listeners` 是两个对象，`$attrs` 里存放的是父组件中绑定的非 `Props` 属性，`$listeners`里存放的是父组件中绑定的非原生事件。
## 方法五、`provide/inject` 
### 1-1 简介
#### Vue2.2.0新增API,这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。一言而蔽之：祖先组件中通过provider来提供变量，然后在子孙组件中通过inject来注入变量。
#### provide / inject API 主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。
### 例：
```
//a.vue
export default {
    provide: {
        name: '王者峡谷' //这种绑定是不可响应的
    }
}
```
```
// b.vue
export default {
    inject: ['name'],
    mounted () {
        console.log(this.name) //输出王者峡谷
    }
}
```
> A.vue，我们设置了一个 `provide:name`，值为王者峡谷，将name这个变量提供给它的所有子组件。 

> B.vue ，通过 inject 注入了从A组件中提供的name变量，组件B中，直接通过this.name访问这个变量了。

> 这就是 provide / inject API 最核心的用法。

> 需要注意的是：provide 和inject绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的----vue官方文档,所以，上面 A.vue 的 name 如果改变了，B.vue 的 this.name 是不会改变的。

### 1-2 provide与inject 怎么实现数据响应式
#### 两种方法：
#### 1-2-1 
* provide祖先组件的实例，然后在子孙组件中注入依赖，这样就可以在子孙组件中直接修改祖先组件的实例的属性，不过这种方法有个缺点就是这个实例上挂载很多没有必要的东西比如props，methods

#### 1-2-2
* 使用2.6最新API Vue.observable 优化响应式 provide(推荐)

#### 例：
> 组件D、E和F获取A组件传递过来的color值，并能实现数据响应式变化，即A组件的color变化后，组件D、E、F会跟着变（核心代码如下：）

![](https://user-gold-cdn.xitu.io/2019/12/31/16f5bc90125faea1?w=528&h=348&f=png&s=28217)
```
// A 组件 
<div>
      <h1>A 组件</h1>
      <button @click="() => changeColor()">改变color</button>
      <ChildrenB />
      <ChildrenC />
</div>
......
  data() {
    return {
      color: "blue"
    };
  },
  // provide() {
  //   return {
  //     theme: {
  //       color: this.color //这种方式绑定的数据并不是可响应的
  //     } // 即A组件的color变化后，组件D、E、F不会跟着变
  //   };
  // },
  provide() {
    return {
      theme: this//方法一：提供祖先组件的实例
    };
  },
  methods: {
    changeColor(color) {
      if (color) {
        this.color = color;
      } else {
        this.color = this.color === "blue" ? "red" : "blue";
      }
    }
  }
  // 方法二:使用2.6最新API Vue.observable 优化响应式 provide
  // provide() {
  //   this.theme = Vue.observable({
  //     color: "blue"
  //   });
  //   return {
  //     theme: this.theme
  //   };
  // },
  // methods: {
  //   changeColor(color) {
  //     if (color) {
  //       this.theme.color = color;
  //     } else {
  //       this.theme.color = this.theme.color === "blue" ? "red" : "blue";
  //     }
  //   }
  // }
```
  ```
  // F 组件 
<template functional>
  <div class="border2">
    <h3 :style="{ color: injections.theme.color }">F 组件</h3>
  </div>
</template>
<script>
export default {
  inject: {
    theme: {
      //函数式组件取值不一样
      default: () => ({})
    }
  }
};
</script>
  ```
####  注：provide 和 inject主要为高阶插件/组件库提供用例，能在业务中熟练运用，可以达到事半功倍的效果！
## 方法六、`$parent / $children与 ref`
* `ref`：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
* `$parent / $children`：访问父 / 子实例
#### 注意：这两种都是直接得到组件实例，使用后可以直接调用组件的方法或访问数据。我们先来看个用 ref来访问组件的
#### 例：
```
export default {
  data () {
    return {
      title: 'Vue.js'
    }
  },
  methods: {
    sayHello () {
      window.alert('Hello');
    }
  }
}
```
```
<template>
  <component-a ref="comA"></component-a>
</template>
<script>
  export default {
    mounted () {
      const comA = this.$refs.comA;
      console.log(comA.title);  // Vue.js
      comA.sayHello();  // 弹窗
    }
  }
</script>
```
### 注：这两种方法的弊端是，无法在跨级或兄弟间通信。
> 我们想在 component-a 中，访问到引用它的页面中（这里就是 parent.vue）的两个 component-b 组件，那这种情况下，就得配置额外的插件或工具了，比如 Vuex 和 Bus 的解决方案。



