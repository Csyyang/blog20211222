import { login } from 'api/user'

const user = {
    namespaced: true,
    state: () => ({
        isLogin: false, // 是否登录
        token: '', // 用户标识
        userData: {
            username: '', // 用户名
            avatar: '' // 头像地址
        }
    }),
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
        async loginStore({ commit }, form) {
            const userRes = await login(form)
            if (userRes.code === '00') {
                commit('changeLogin', true)
                commit('setUserData', userRes.context.userData)
                commit('setToken', userRes.context.token)
                return true
            }
        },
        logOut({ commit }) {
            commit('changeLogin', false)
        }
    }
}


export default user