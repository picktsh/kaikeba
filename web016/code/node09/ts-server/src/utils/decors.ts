import * as glob from 'glob'  // 遍历文件夹
import * as Koa from 'koa'
import * as KoaRouter from 'koa-router'

type HTTPMethod = 'get' | 'put' | 'del' | 'post' | 'patch'

type RouterOptions = {
    prefix?: string;
    middlewares?: Array<Koa.Middleware>;
}

@Menu('xxxx', {role: 'admin'})

export const  middlewares = function () {

}

const router = new KoaRouter()
// export const get = (path: string, options?: RouterOptions) => {
//     return (target, property, descriptor) => {
//         const url = options && options.prefix ? options.prefix : path
//         router['get'](url, target[property])
//     }
// }

const decorate = (method: HTTPMethod, path: string, options: RouterOptions = {}, router?: KoaRouter) => (path: string, options?: RouterOptions) => {
    return (target, property, descriptor) => {
        // 添加中间件数组
        const middleware = []
        if (options.middlewares) {
            middleware.push(...options.middlewares)
        }
        const url = options && options.prefix ? options.prefix + path : path
        router[method](url, ...property)
    }
}

export const method = method => (path: string, options?: RouterOptions) => decorate(method, path, options, router)

export const get = method('get')
export const put = method('put')
export const del = method('del')
export const post = method('post')
export const patch = method('patch')


export const load = (folder: string, options: LoadOptions = {}) => {
    const extname = options.extname || '{js,tx}'
    glob.sync(require('path').join(folder, `./**/*${extname}`)).forEach(() => {

    })
    return router
}
