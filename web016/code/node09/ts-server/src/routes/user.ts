import * as Koa from 'koa'

const users = [{name: 'tom'}]
export default class User {
    @get('/users')
    public list(ctx: Koa.Context) {
        ctx.body = {ok: 1, data: users}
    }

    @post('users')
    public add(ctx: Koa.Context) {
        users.push(ctx.request.body)
        ctx.body = {ok: 1}
    }
}
