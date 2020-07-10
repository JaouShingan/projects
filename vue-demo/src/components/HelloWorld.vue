<template>
	<div class="hello">
		<div class="box">
			<div class="row" v-for="d in arr" :key="d">{{d}}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String
	},
	data() {
		return {
			arr: [1,2,3,4,5,6,7,8,9,10,11]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.box {
	width: 500px;
	height: 400px;
	overflow: auto;
	.row {
		height: 50px;
		background: #fff;
		&:nth-child(2n) {
			background-color: #cccccc;
		}
		&:first-of-type {
			position: sticky;
			top: 0;
		}
	}
}
</style>
