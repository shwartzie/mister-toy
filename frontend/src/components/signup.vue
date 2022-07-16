<template>
	<el-form
		:model="ruleForm"
		status-icon
		:rules="rules"
		ref="ruleForm"
		label-width="120px"
		class="demo-ruleForm"
	>
		<el-form-item label="Firstname" prop="firstname">
			<el-input type="txt" v-model="ruleForm.firstname" autocomplete="off"></el-input>
		</el-form-item>
		<el-form-item label="Lastname" prop="lastname">
			<el-input type="txt" v-model="ruleForm.lastname" autocomplete="off"></el-input>
		</el-form-item>
		<el-form-item label="Username" prop="username">
			<el-input type="txt" v-model="ruleForm.username" autocomplete="off"></el-input>
		</el-form-item>
		<el-form-item label="Email" prop="email">
			<el-input type="txt" v-model="ruleForm.email" autocomplete="off"></el-input>
		</el-form-item>
		<el-form-item label="Password" prop="pass">
			<el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
		</el-form-item>
		<el-form-item label="Confirm" prop="checkPass">
			<el-input
				type="password"
				v-model="ruleForm.checkPass"
				autocomplete="off"
			></el-input>
		</el-form-item>
		<el-form-item label="Age" prop="age">
			<el-input v-model.number="ruleForm.age"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="submitForm(ruleForm)">Submit</el-button>
			<el-button @click="resetForm(ruleForm)">Reset</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
import { userService } from '../services/user.service.js'

const checkAge = (rule, value, callback) => {
	if (!value) {
		return callback(new Error('Please input the age'))
	}
	setTimeout(() => {
		if (!Number.isInteger(value)) {
			callback(new Error('Please input digits'))
		} else {
			if (value < 18) {
				callback(new Error('Age must be greater than 18'))
			} else {
				callback()
			}
		}
	}, 1000)
}

const validatePass = (rule, value, callback) => {
	if (value === '') {
		callback(new Error('Please input the password'))
	} else {
		if (this.ruleForm.checkPass !== '') {
			this.$refs.ruleForm.validateField('checkPass')
		}
		callback()
	}
}

const validatePass2 = (rule, value, callback) => {
	if (value === '') {
		callback(new Error('Please input the password again'))
	} else if (value !== this.ruleForm.password) {
		callback(new Error("Two inputs don't match!"))
	} else {
		callback()
	}
}
const validateUser = (rule, value, callback) => {
	if (value === '') {
		callback(new Error('Please input the Username again'))
	}
}
const validateFirstName = (rule, value, callback) => {
	if (value === '') {
		callback(new Error('Please input the Firstname again'))
	}
}
const validateLastName = (rule, value, callback) => {
	if (value === '') {
		callback(new Error('Please input the Lastname again'))
	}
}
const validateEmail = (rule, value, callback) => {
	if (value === '') {
		callback(new Error('Please input the Email again'))
	}
}
export default {
	data() {
		return {
			ruleForm: {
				firstname: '',
				lastname: '',
				username: '',
				email: '',
				password: '',
				checkPass: '',
				age: '',
			},
			rules: {
				firstname: [{ validator: validateFirstName, trigger: 'blur' }],
				lastname: [{ validator: validateLastName, trigger: 'blur' }],
				username: [{ validator: validateUser, trigger: 'blur' }],
				email: [{ validator: validateEmail, trigger: 'blur' }],
				password: [{ validator: validatePass, trigger: 'blur' }],
				checkPass: [{ validator: validatePass2, trigger: 'blur' }],
				age: [{ validator: checkAge, trigger: 'blur' }],
			},
		}
	},
	created() {},
	methods: {
		submitForm(credentials) {
			credentials.fullname = credentials.firstname + ' ' +credentials.lastname
			userService.signup(credentials)
		},
		resetForm(formName) {
			this.$refs[formName].resetFields()
		},

		checkAge() {
			
		}
	},
	computed: {},
	mounted() {},
	unmounted() {},
	components: {},
}
</script>
