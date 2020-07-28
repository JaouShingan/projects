<template>
	<Header class="viv-header-content">
		<div></div>
		<div class="right">
			<Dropdown placement="bottom-end" @on-click="clickSetting">
					<Icon class="icon" type="md-settings" />
				<!-- <Button>
				</Button> -->
				<DropdownMenu slot="list">
					<DropdownItem name="logout">退出</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
	</Header>
</template>
<script>
export default {
	name: 'HeaderContent',
	methods: {
		clickSetting (name) {
			if (name === 'logout') {
				this.$router.push('/login')
			}
		}
	}
};
</script>
<style lang="less" scoped>
.viv-header-content {
	height: 100%;
	width: 100%;
	// border-bottom: 1px solid #ccc;
	// box-shadow: 0 5px 5px -2px #ddd;
	z-index: 9999;
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	// background: transparent;
	.right {
		.icon {
			margin: 0 20px;
			cursor: pointer;
			font-size: 20px;
			color: #fff;
		}
	}
}
</style>
