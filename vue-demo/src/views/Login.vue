<template>
	<div class="viv-admin">
		<div class="title">
			VUE-IVIEW-ADMIN
		</div>
		<Form :model="formInline">
			<FormItem prop="user">
				<Input
					type="text"
					v-model="formInline.user"
					placeholder="Username"
					prefix="ios-person-outline"
				/>
				<!-- <Icon type="ios-person-outline" slot="prepend"></Icon>
				</Input> -->
			</FormItem>
			<FormItem prop="password">
				<Input
					type="password"
					v-model="formInline.password"
					placeholder="Password"
					prefix="ios-lock-outline"
				/>
				<!-- <Icon type="ios-lock-outline" slot="prepend"></Icon>
				</Input> -->
			</FormItem>
			<FormItem>
				<div class="btn-area">
					<Button type="default" @click="handleSubmit('formInline')"
						>注册</Button
					>
					<Button type="primary" @click="handleSubmit('formInline')"
						>登录</Button
					>
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
				user: '',
				password: ''
			}
		};
	},
	methods: {
		handleSubmit() {
			this.$router.push('/')
		}
	}
};
</script>
<style lang="less" scoped>
.viv-admin {
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
