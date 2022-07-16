import { createStore } from "vuex"
import toyStore from "./modules/toy.module.js"

const store = createStore({
    strict: true,
    modules: {
        toyStore,
    },
});

export default store
