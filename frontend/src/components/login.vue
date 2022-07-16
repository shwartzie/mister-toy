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
			<el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
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
	data() {
		return {
			ruleForm: {
				username: '',
				password: '',
			},
			rules: {
				username: [{ validator: validateUser, trigger: 'blur' }],
				password: [{ validator: validatePass, trigger: 'blur' }],
			},
            loggedInUser: null
		}
	},
	created() {},
	methods: {
		submitForm(credentials) {
			this.getLoggedInUser(credentials)
		},
		resetForm(formName) {
			this.$refs[formName].resetFields()
		},
        getLoggedInUser(user) {
            this.$emit('user', user)
        }
	},
	computed: {},
	mounted() {},
	unmounted() {},
	components: {},
}
</script>
