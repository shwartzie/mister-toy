import axios from "axios"

export const userService = {
	login,
	logout,
	signup,
	getLoggedInUser,
}
const API =
    process.env.NODE_ENV !== "development"
        ? "/api/auth/"
        : "//localhost:3030/api/auth/"
const STORAGE_KEY = 'loginToken'

async function login(credentials) {
	try {
		const { data: user } = await axios.post(API + 'login', credentials)
		sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user))
		return user
	} catch (err) {
		throw err
	}
}

async function signup(signupInfo) {
  try {
    const { data } = await axios.post(API + 'signup', signupInfo)
		const { user } = data
		sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user))
		return user
  } catch(err) {
    throw err
  }
}

function logout() {
	sessionStorage.removeItem(STORAGE_KEY)
	return axios.post(API + 'logout')
}

function getLoggedInUser() {
	return JSON.parse(sessionStorage.getItem(STORAGE_KEY))
}
