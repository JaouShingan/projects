<template>
	<div id="app">
		<Layout>
			<DHeader></DHeader>
			<Layout class="body">
				<Sider hide-trigger>
					<SiderMenu />
				</Sider>
				<Content>
					<!-- <fs ref="test" /> -->
					<keep-alive>
						<router-view />
					</keep-alive>
				</Content>
				<Footer>Footer</Footer>
			</Layout>
		</Layout>
	</div>
</template>
<script>
import DHeader from './components/DHeader';
import SiderMenu from './components/SiderMenu';
export default {
	components: {
		DHeader,
		SiderMenu,
	},
	data() {
		return {};
	},
	mounted() {
		console.log(this.$refs.test);
	},
};
</script>
<style lang="less">
.body {
	height: calc(100vh - 50px);
}
</style>
