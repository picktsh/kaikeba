## web项目训练营

1. 项目简介

    #### 项目
    - 不追求多页面,追求的是每个知识点都能跟面试官唠嗑
    - 麻雀虽小五脏俱全
    - jwt,文件上传,多对多模型设计
    - 错误收集,监控,团队规范(代码,log)
    - 技术选型,管理能力,深度思考

    #### 技术选型
    - Vue+nuxt or react+nuxt(其实i都可以,ssr原理一致)
    - 小程序,APP,Node(EGG)
    - 埋点(原理+第三方),发布(gitlab,CI),性能...
    - 报错sentry,报警(钉钉,or微信 or短信)
    - 其他基建(搭建,docker,看板,文档,权限,组件)

2. 上传文件知识点
3. 断点续传
4. 大文件指纹计算
    
    - 使用MD5计算,一个文件的唯一指纹
    - web-worker计算md5 H5特性
    - 影分身
    - 空闲时间,计算MD5; idle period 时间切片. 学习react源码得到的启发
    - 大文件抽样切片,再计算MD5; 布隆过滤器
    
5. 并发数控制逻辑
    - 并发数控制+错误重试(本身就是一个"头条"面试题)
    - 慢启动,借鉴TCP策略;工具网络状态,动态调整切片大小
    - 思考
        1. 碎片清理
        2. 文件碎片储存在多个机器上
        3. 文件碎片备份
        4. 兼容性更好的 requestIdleCallback
        5. 并发+慢启动
        6. 抽样hash+全量hash双重判断
        7. websocket推送
        8. cdn ...
    
### 第二章 

- 06 项目搭建
    - 搭建前端项目 [官网](https://zh.nuxtjs.org/) `npx create-nuxt-app <项目名>`
    - 搭建服务端项目 [官网](https://eggjs.org/zh-cn/) `npm init egg --type=simple`

