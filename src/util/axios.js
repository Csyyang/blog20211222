import axios from "axios"
import { ElLoading } from 'element-plus'
import { MessagePlugin } from 'tdesign-vue-next'
let loadingInstance // loading

const request = axios.create({
    baseURL: '/test',
    timeout: 100000,
})


request.interceptors.request.use(
    async config => {
        loadingInstance =  ElLoading.service()
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    response => {
        loadingInstance.close()

        if (response.data.code !== '00') {
            // 弹窗提示
            console.error(response.data.message)
            MessagePlugin.error(response.data.message)
        }
        return response.data

    },
    err => {
        console.log(err)
        return Promise.reject(error)
    }
)

export default request