### 你知道vue3有哪些新特性吗?它会带来什么影响?

` Author rise created on 2020/1/30 `

### 一、兼容性
目前打包后的代码是 ES2015+，不支持 IE 11。
### 二、对 TypeScript 的使用
- 目前的代码 98% 以上使用 TypeScript 编写。
- 如果你还没有学习 TypeScript，请尽快学习，否则可能看不懂源码。
- 另外有件事情说出来可能会让你非常惊讶，Vue 3 的源代码完全没有使用 class 关键字！（只在测试代码和示例代码里用到了 class 关键字）
### 监测机制
3.0 将带来一个基于 Proxy 的 observer 实现，它可以提供覆盖语言 (JavaScript——译注) 全范围的响应式能力，消除了当前 Vue 2 系列中基于 Object.defineProperty 所存在的一些局限，这些局限包括：

- 对属性的添加、删除动作的监测；
- 对数组基于下标的修改、对于 .length 修改的监测；
- 对 Map、Set、WeakMap 和 WeakSet 的支持；

#### Vue 3.0 版本支持预设配置 和 用户自定义配置，其中自定义功能配置包括以下功能：

- TypeScript
- Progressive Web App (PWA) Support
- Router
- Vuex
- CSS Pre-processors
- Linter / Formatter
- Unit Testing
- E2E Testing

#### 可以发现，3.0 版本新加入了 TypeScript 以及 PWA 的支持。
1. 在选择 CSS 预处理器后会提示选择哪一种预处理器？
    - Scss/Sass
    - Less
    - Stylus
2. eslint 规范的选择
    - ESLint with error prevention only
    - ESLint + Airbnb config
    - ESLint + Standard config
    - ESLint + Prettier
3. 选择 Babel，PostCSS，ESLint 等自定义配置的存放位置
    - In dedicated config files
    - In package.json
### 自定义配置

从 3.0 版本开始，系统会在项目的根目录生成一个 vue.config.js 文件，可以在此文件中添加自定义的一些配置。

### ESLint、Babel、browserslist
- Babel 可以通过.babelrc 或 package.json 中的 babel 字段进行配置。
- ESLint 可以通过.eslintrc 或 package.json 中的 eslintConfig 字段进行配置。
- package.json 中的 browserslist 字段指定了该项目的目标浏览器支持范围。

### 新增功能
- TypeScript 支持
- PWA 支持


[参考文章](https://blog.csdn.net/weixin_33834628/article/details/88004643)
