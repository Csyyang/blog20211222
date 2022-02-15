import request from "../util/axios"

export function getComment(data = {
    id: '',
    level: ''
}) {
    return request.post('/comment/getComment', data)
}

/**
 * 评论
 * @param {*} data 
 * @returns 
 */
export function setComment(data={}) {
    return request.post('/comment/setComment', data)
}