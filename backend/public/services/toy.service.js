
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'toy'
const listeners = []

export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy,
    subscribe
    
}
window.cs = toyService;


function query() {
    return storageService.query(STORAGE_KEY)
}
function getById(toyId) {
    console.log(toyId)
    return storageService.get(STORAGE_KEY, toyId)
}
function remove(toyId) {
    // return new Promise((resolve, reject) => {
    //     setTimeout(reject, 2000)
    // })
    // return Promise.reject('Not now!');
    return storageService.remove(STORAGE_KEY, toyId)
}
function save(toy) {
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
    } else {
        toy.owner = userService.getLoggedinUser()
        return storageService.post(STORAGE_KEY, toy)
    }
}

function getEmptyToy() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}

function subscribe(listener) {
    listeners.push(listener)
}

function _notifySubscribersToysChanged(toys) {
    console.log('Notifying Listeners');
    listeners.forEach(listener => listener(toys))
}

window.addEventListener('storage', () => {
    console.log('Storage Changed from another Browser!');
    query()
        .then(toys => {
            _notifySubscribersToysChanged(toys)
        }) 
})

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




