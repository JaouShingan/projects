<template>
	<div class="viv-login">
		<div class="title">
			VUE-IVIEW-ADMIN
		</div>
		<Form ref="login" :model="formInline" :rules="rules">
			<FormItem prop="user">
				<Input
					type="text"
					v-model="formInline.user"
					placeholder="Username"
					prefix="ios-person-outline"
				/>
			</FormItem>
			<FormItem prop="password">
				<Input
					type="password"
					v-model="formInline.password"
					placeholder="Password"
					prefix="ios-lock-outline"
				/>
			</FormItem>
			<FormItem>
				<div class="btn-area">
					<!-- <Button type="default" @click="handleSubmit()"
						>注册</Button
					> -->
					<Button type="primary" @click="handleSubmit()">登录</Button>
				</div>
			</FormItem>
		</Form>
	</div>
</template>
<script>
export default {
	data() {
		return {
			formInline: {
				user: 'Admin',
				password: '123456'
			},
			rules: {
				user: [
					{
						required: true,
						message: 'Please fill in the user name',
						trigger: 'blur'
					}
				],
				password: [
					{
						required: true,
						message: 'Please fill in the password.',
						trigger: 'blur'
					},
					{
						type: 'string',
						min: 6,
						message:
							'The password length cannot be less than 6 bits',
						trigger: 'blur'
					}
				]
			}
		};
	},
	methods: {
		handleSubmit() {
			let validateState = true;
			this.$refs.login.validate((valid) => {
				validateState && (validateState = valid);
			});
			if (validateState) {
				this.$Message.success('Login Success!');
				setTimeout(() => this.$router.push('/'), 1000);
			}
		}
	}
};
</script>
<style lang="less" scoped>
.viv-login {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	.title {
		margin-bottom: 20px;
		font-size: 20px;
		font-weight: bold;
	}
	.btn-area {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		button {
			margin-left: 10px;
		}
	}
}
</style>
