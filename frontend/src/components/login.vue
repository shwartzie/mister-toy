<template>
	<el-form
		:model="ruleForm"
		status-icon
		:rules="rules"
		ref="ruleForm"
		label-width="120px"
		class="demo-ruleForm"
	>
		<el-form-item label="Username" prop="username">
			<el-input type="txt" v-model="ruleForm.username" autocomplete="off"></el-input>
		</el-form-item>
		<el-form-item label="Password" prop="pass">
			<el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="submitForm(ruleForm)">Submit</el-button>
			<el-button @click="resetForm(ruleForm)">Reset</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
import { userService } from '../services/user.service.js'

const validatePass = (rule, value, callback) => {
	if (value === '') {
		callback(new Error('Please input the password'))
	}
}
const validateUser = (rule, value, callback) => {
	if (value === '') {
		callback(new Error('Please input the username again'))
	}
}
export default {
    emits: [''],
	data() {
		return {
			ruleForm: {
				username: '',
				pass: '',
			},
			rules: {
				username: [{ validator: validateUser, trigger: 'blur' }],
				pass: [{ validator: validatePass, trigger: 'blur' }],
			},
            loggedInUser: null
		}
	},
	created() {},
	methods: {
		submitForm(credentials) {
			this.loggedInUser = userService.login(credentials)
			.then(() => {
				this.$refs.push('/toy')
			})
		},
		resetForm(formName) {
			this.$refs[formName].resetFields()
		},
        getLoggedInUser() {
            this.$emit('user', this.loggedInUser)
        }
	},
	computed: {},
	mounted() {},
	unmounted() {},
	components: {},
}
</script>
