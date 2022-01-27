import axios from "axios"
import { ElLoading } from 'element-plus'
import { MessagePlugin } from 'tdesign-vue-next'
// import store from '@/store/store'

let loadingInstance // loading

const request = axios.create({
    baseURL: '/test',
    timeout: 100000,
})


request.interceptors.request.use(
    async config => {
        loadingInstance = ElLoading.service()

        // let token  = store.state.user.token

        // config.headers['x-token'] = token?token:''

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

        if (err.response.status == 302) {
            window.location.href = err.response.data.url
            return err.response.data
        }
        return Promise.reject(err)
    }
)

export default request