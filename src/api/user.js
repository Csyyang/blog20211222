import request from "../util/axios"

/**
 * 注册
 * @param { object } data 
 * @param { string } data.account 账号
 * @param { string } data.password 密码
 * @param { string } data.password2 重复密码
 * @param { string } data.username 用户名
 * @param { string } data.email 邮箱
 * @returns { promise } 
 */
export function register(data = {}) {
   return request.post('/user/register', data)
}

/**
 * 登录
 * @param { object } data
 * @param { string } data.account 账号
 * @param { string } data.password 密码
 * @returns { promise }
 */
export function login(data={}) {
   return request.post('/user/login',data)
}

/**
 * 获取用户基本信息
 * @returns { Promise }
 */
export function getUser() {
   return request.post('/user/getUser', data)
}