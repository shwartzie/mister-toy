import {userService} from '../../services/user.service.js'
export default {
    state: {
        user: userService.getLoggedInUser() || null,
    },
    getters: {
        user(state) {
            return state.user
        },
    },
    mutations: {
        setUser(state, {user}) {
            state.user = user
        },
        logoutUser(state) {
            state.user = null
        }
    },

    actions: {
        logout({commit}) {
            userService.logout()
            commit({type: 'logoutUser'})
        }
    },
}
