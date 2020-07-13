<template>
	<div id="app">
		<Layout>
			<DHeader></DHeader>
			<Layout class="body">
				<Sider class="sider" hide-trigger>Sider</Sider>
				<Content>
					<keep-alive>
						<router-view />
					</keep-alive>
					<!-- <Footer>Footer</Footer> -->
				</Content>
			</Layout>
		</Layout>
	</div>
</template>
<script>
import DHeader from './components/DHeader'
export default {
	components: {
		DHeader,
	},
	data() {
		return {}
	},
}
</script>
<style lang="less">
.body {
	height: calc(100vh - 50px);
	.sider {
		background: #ffffff;
		border-right: 1px solid #ddd;
	}
}
</style>
