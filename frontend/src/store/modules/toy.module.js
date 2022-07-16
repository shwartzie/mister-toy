import { toyService } from "../../services/toy-service.js"
// const toys = toyService.createToys()
export default {
    state: {
        toys: [],
        filteredToys: null,
        filterBy: {
            name: "",
            inStock: null,
            toSort: false,
            pageIdx: 0,
        },
        pageSize: 2,
    },
    getters: {
        toys(state) {
            return state.toys
        },
        filteredToys({ filterBy, toys, pageSize }) {
            if (!filterBy) {
                return toys
            }

            

            const regex = new RegExp(filterBy.name, "i")
            let filteredToys = toys.filter((toy) => regex.test(toy.name))

            if (filterBy.inStock !== null) {
                filteredToys = filteredToys.filter((toy) => {
                    return toy.inStock === filterBy.inStock
                })
            }

            if (filterBy.toSort) {
                filteredToys.sort((t1, t2) => t1.name.localeCompare(t2.name))
            }

            const startIdx = filterBy.pageIdx * pageSize

            filteredToys = filteredToys.slice(startIdx, startIdx + pageSize)
            return filteredToys
        },
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys
        },

        removeToy(state, { id }) {
            const idx = state.toys.findIndex((toy) => toy._id === id)
            state.toys.splice(idx, 1)
        },
        saveToy(state, { toy }) {
            state.toys.push(toy)
        },
        setFilter(state, { filterBy }) {
            state.filterBy = { ...filterBy, pageIdx: state.filterBy.pageIdx }
        },
    },

    actions: {
        loadToys({ commit }) {
            toyService.query().then((toys) => {
                commit({ type: "setToys", toys })
            })
        },
        saveToy({ commit }, { toy }) {
            toyService.save(toy).then((toy) => {
                commit({ type: "saveToy", toy })
            })
        },
        removeToy({ commit }, { id }) {
            toyService.remove(id).then(() => {
                commit({ type: "removeToy", id })
            })
        },
    },
}
