<template>
	<main>
		<section class="login-section">
			<login @user="user" />
			<el-button type="success" @click="signUp">Sign Up</el-button>
		</section>
		<section class="signup-section">
			<signup v-if="signUpClicked" />
		</section>
	</main>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import login from '../components/login.vue'
import signup from '../components/signup.vue'
export default {
	created() {},
	data() {
		return {
			signUpClicked: false,
		}
	},
	computed: {},

	methods: {
		signUp() {
			this.signUpClicked = !this.signUpClicked
		},
	},
	components: {
		login,
		signup,
	},
}
</script>
