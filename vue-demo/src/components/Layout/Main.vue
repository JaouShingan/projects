<template>
	<Layout>
		<Header class="viv-header"><HeaderContent /></Header>
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
</template>
<script>
import HeaderContent from './HeaderContent';
import SiderMenu from './SiderMenu';
export default {
	components: { SiderMenu, HeaderContent }
};
</script>
<style lang="less" scoped>
.viv-header {
	height: @headerHeight;
	width: 100%;
	padding: 0;
}
.viv-body {
	height: calc(~'100vh - @{headerHeight}');
	width: 100%;
}
</style>
