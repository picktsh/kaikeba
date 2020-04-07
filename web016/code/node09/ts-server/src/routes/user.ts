import * as Koa from 'koa'
import {get, post} from '../utils/decors'

const users = [{name: 'tom'}]
@middleware([
    async function guard(ctx: Koa.Context, next: () => {})
])

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
