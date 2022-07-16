import { utilService } from "./util-service.js"
import axios from "axios"
const KEY = "toysDB"
_createToys()

const API =
    process.env.NODE_ENV !== "development"
        ? "/api/toy"
        : "//localhost:3030/api/toy"

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy,
    mapLabels,
}

async function query() {
    try {
        const { data } = await axios.get(API)
        return data
    } catch (err) {
        throw err
    }
}

async function mapLabels() {
    try {
        const toys = await query()
        let labelMap = {}
        toys.forEach(({ labels, price }) => {
            labels.forEach((label) => {
                labelMap[label] = labelMap[label] ? labelMap[label] + 1 : 1
            })
        })

        for (const key in labelMap) {
            let currLabel = key
            let sum = toys.reduce((acc, toy) => {
                if (toy.labels.includes(currLabel)) {
                    return (acc += toy.price)
                }
            }, 0)
            labelMap[key] = sum / labelMap[key]
        }
        return labelMap
    } catch (err) {
        throw err
    }
}

async function getById(toyId) {
    try {
        const { data } = await axios.get(`${API}/${toyId}`)
        return data
    } catch (err) {
        throw err
    }
}

// function callServer(method, url, body) {
//     return await axios[method](url, {
//         body,
//         headers: {
//             Authentication: document.cookie('loggedInUser')
//         }
//     })
// }


async function remove(toyId) {
    try {
        const { data } =  await axios.delete(`${API}/${toyId}`)
        return data
    } catch (err) {
        throw err
    }
}

async function save(toy) {
    try {
        if (toy._id) {
            const { data } = await axios.put(`${API}/${toy._id}`, toy)
            return data
        } else {
            const { data } = await axios.post(`${API}/${toy._id}`, toy)
            return data
        }
    } catch (err) {
        throw err
    }
}

function getEmptyToy() {
    return {
        _id: "",
        name: "",
        price: 0,
        labels: [],
        createdAt: null,
        inStock: true,
    }
}
function _createToys() {
    let toys = utilService.loadFromStorage(KEY)
    if (!toys || !toys.length) {
        toys = [
            {
                _id: utilService.makeId(),
                name: "Talking Doll",
                price: 150,
                labels: ["Doll", "Battery Powered", "Baby"],
                createdAt: Date.now(),
                inStock: true,
            },
            {
                _id: utilService.makeId(),
                name: "Monster",
                price: 550,
                labels: ["Doll", "Battery Powered", "Baby"],
                createdAt: Date.now(),
                inStock: true,
            },
            {
                _id: utilService.makeId(),
                name: "Barbie",
                price: 980,
                labels: ["Doll", "Battery Powered", "Baby"],
                createdAt: Date.now(),
                inStock: true,
            },
        ]
        utilService.saveToStorage(KEY, toys)
    }
    return toys
}
