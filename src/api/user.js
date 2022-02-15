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
export function login(data = {}) {
   return request.post('/user/login', data)
}

/**
 * 登出
 * @param {*} data 
 * @returns 
 */
export function logOut(data = {}) {
   return request.post('/user/logOut')
}

/**
 * 获取用户基本信息
 * @returns { Promise }
 */
export function getUser(data = {}) {
   return request.post('/user/getUser', data)
}

/**
 * 邮箱校验
 * @param {*} data 
 * @returns 
 */
export function checkEmail(data = {}) {
   return request.post('/user/checkEmail', data)
}

export function reset(data = {}) {
   return request.post('/user/reset', {})
}

export function ResetPassword(data = {}) {
   return request.post('/user/ResetPassword', {})
}


export function test() {
   return request.post('/test', {})
}

/**
 * 修改密码
 * @param {*} data 
 * @returns 
 */
export function ChangPassword(data = {}) {
   return request.post('/user/ChangPassword', data)
}

// export function getUserImage(account) {
//    return request.post('/user/getUserImg', account)
// }