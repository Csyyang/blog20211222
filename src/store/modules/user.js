const user = {
    namespaced: true,
    state: () => ({
        isLogin: false // 是否登录
    }),
    mutations: {
        changeLogin(state, value) {
            state.isLogin = value
        }
    }
}


export default user