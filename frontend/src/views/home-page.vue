<template>
    <main v-if="!loggedInUser">
        <section class="login-section">
            <login @user="setUser" />
            <el-button type="success" @click="signUp">Sign Up</el-button>
        </section>
        <section class="signup-section">
            <signup v-if="signUpClicked" />
        </section>
    </main>
    <main v-else>
        <section>
            Welcome {{ loggedInUser.fullname }} To Mister Toy !
            <div>
                <el-button type="warning" @click="logout">Logout</el-button>
            </div>
        </section>
    </main>
</template>

<script>
import login from "../components/login.vue"
import signup from "../components/signup.vue"
import { userService } from "../services/user.service.js"
export default {
    emits: ["user"],
    data() {
        return {
            signUpClicked: false,
            loggedInUser: null,
        }
    },
    created() {
        this.loggedInUser = this.user()
    },
    methods: {
        signUp() {
            this.signUpClicked = !this.signUpClicked
        },
        setUser(credentials) {
            userService.login(credentials).then((currUser) => {
                const user = { ...currUser }
                this.$router.push("/toy")
                this.$store.commit({ type: "setUser", user })
            })
        },
        logout() {
            this.$store.dispatch({type: 'logout'})
			location.reload()
        },
        user() {
            return this.$store.getters.user
        },
    },
    computed: {},
    components: {
        login,
        signup,
    },
}
</script>
