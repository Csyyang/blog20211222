import { login, logOut } from 'api/user'

const userData = JSON.parse(sessionStorage.getItem('userData'))

const user = {
    namespaced: true,
    state: () => {
        if (!!userData && userData.isLogin === true) {
            return userData
        } else {
            return {
                isLogin: false, // 是否登录
                token: '', // 用户标识
                userData: {
                    username: '', // 用户名
                    avatar: '' // 头像地址
                }
            }
        }
    },
    mutations: {
        changeLogin(state, value) {
            state.isLogin = value
        },
        setUserData(state, value) {
            ({
                username: state.userData.username,
                avatar: state.userData.avatar
            } = value);
        },
        setToken(state, value) {
            state.token = value
        }
    },
    actions: {
        /**
         * 登录
         * @returns { boolean } 
         */
        async loginStore({ commit, state }, form) {
            const userRes = await login(form)
            if (userRes.code === '00') {
                commit('changeLogin', true)
                commit('setUserData', userRes.context.userData)
                // commit('setToken', userRes.context.token)

                return true
            }
        },
        /**
         * 登出
         * @returns boolean
         */
        async logOut({ commit }) {
            const logoutRes = await logOut()
            if (logoutRes.code == '00') {
                commit('changeLogin', false)
                return true
            } else {
                return false
            }
        }
    }
}


export default user