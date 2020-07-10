<template>
	<Header class="header">
		header
	</Header>
</template>
<script>
export default {
	name: 'DHeader',
};
</script>
<style lang="less" scoped>
.header {
	height: 50px;
	width: 100vw;
	border-bottom: 1px solid #ccc;
	box-shadow: 0 5px 10px -5px #ddd;
	padding: 10px 20px;
	display: flex;
	align-items: center;
	background: transparent;
}
</style>
