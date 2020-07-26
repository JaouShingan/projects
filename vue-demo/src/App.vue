<template>
	<div id="app">
		<Layout>
			<Header class="viv-header">
			</Header>
			<!-- <DHeader></DHeader> -->
			<Layout class="viv-body">
				<Sider hide-trigger>
					<SiderMenu />
				</Sider>
				<Content>
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
import SiderMenu from './components/SiderMenu';
export default {
	components: {
		SiderMenu
	},
	data() {
		return {};
	}
};
</script>
<style lang="less">
</style>
