import request from "../util/axios"


/**
 * 添加新文章
 * @param { object } data 
 * @param { string } data.title 标题
 * @param { string } data.context 文章内容
 * @param { string } data.lable 文章标签
 * @param { string } data.image 图片url地址
 * @param { string } data.brief 简介
 * @returns { promise } 
 */
export function addArticle(data = {}) {
    return request.post('/article/addArticle', data)
}


/**
 * 获取文章
 * @param {*} data 
 * @param { string } data.id  文章id
 */
export function getArticle(data = {}) {
    return request.post('/article/getArticle', data)
}

export function likes(data = {}) {
    return request.post('/article/like',data)
}