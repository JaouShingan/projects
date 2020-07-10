<template>
	<div id="app">
		<Layout>
			<Header></Header>
			<Layout>
				<Sider hide-trigger>Sider</Sider>
				<Content><router-view /></Content>
				<Footer>Footer</Footer>
			</Layout>
		</Layout>
	</div>
</template>
<script>
export default {
	data() {}
}
</script>
<style lang="less">
</style>
