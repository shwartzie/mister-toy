import { storageService } from "./async-storage.service.js"

const STORAGE_KEY = "users"
const STORAGE_KEY_LOGGEDIN = "loggedinUser"

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
}

window.userService = userService

async function login(credentials) {
    try {
        const { data: users } = await storageService.query(STORAGE_KEY)
        console.log(users)
        const user = users.find(
            (user) =>
                user.username === credentials.username &&
                user.password === credentials.password
        )
        if (user) {
            sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
        }
        return user
    } catch (err) {
        throw err
    }
}
async function signup(userInfo) {
    try {
        const { data: user } = await storageService.post(STORAGE_KEY, userInfo)
        sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
        return user

    } catch (err) {
        throw err
    }
}
function logout() {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null)
    return Promise.resolve()
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
}