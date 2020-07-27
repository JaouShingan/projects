<template>
	<Layout>
		<Header class="viv-header"> </Header>
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
</template>
<script>
import SiderMenu from './SiderMenu';
export default {
	components: { SiderMenu }
};
</script>
