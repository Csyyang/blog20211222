import request from "../util/axios"

export function register(data = {}) {
   return request.post('/user/register', data)
}