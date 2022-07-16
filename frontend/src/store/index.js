import { createStore } from "vuex"
import toyStore from "./modules/toy.module.js"
import userStore from './modules/user.module.js'
const store = createStore({
    strict: true,
    modules: {
        toyStore,
        userStore
    },
});

export default store
