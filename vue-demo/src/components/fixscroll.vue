<template>
	<div ref="box" class="box">
		<div ref="head" class="head">
			<div class="item" v-for="i in 7" :key="i">head {{ i }}</div>
			<div class="item" style="width: 20px"></div>
		</div>
		<div ref="body" class="body" @scroll="onscrollbody">
			<div class="row" v-for="j in 20" :key="j">
				<div class="item" v-for="i in 7" :key="j + i">
					row {{ j }} {{ i }}
				</div>
			</div>
		</div>
		<div class="fixright">
			<div class="head">
				<div class="item">head 7</div>
			</div>
			<div ref="fixedbody" class="body" @mousewheel="onmousewheel">
				<div class="row" v-for="j in 20" :key="j">
					<div class="item">row {{ j }} 7</div>
					<div class="item" v-for="i in 6" :key="j + i">
						row {{ j }} {{ i }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	methods: {
		onscrollbody(e) {
			this.$refs.head.scrollLeft = e.target.scrollLeft;
			// if (this.$refs.fixedbody === e.target) {
			// 	console.log(1);
			// 	this.$refs.body.scrollTop = e.target.scrollTop;
			// } else {
			// 	console.log(2);
			// }
			this.$refs.fixedbody.scrollTop = e.target.scrollTop;
		},
		onmousewheel(e) {
			const y = e.deltaY;
			let bodyScrollTop = this.$refs.body.scrollTop;
			bodyScrollTop += y;
			this.$refs.body.scrollTop = bodyScrollTop;
			// console.log(e, e.deltaY);
		},
	},
};
</script>
<style lang="less" scoped>
.box {
	@height: 40px;
	width: 500px;
	height: 500px;
	border: 1px solid black;
	position: relative;
	overflow: hidden;
	.head {
		display: flex;
		overflow: hidden;
		border-bottom: 1px solid black;
		// position: relative;
	}
	.body {
		width: 100%;
		height: calc(100% - @height);
		overflow: auto;
		.row {
			display: flex;
		}
	}
	.fixright {
		position: absolute;
		overflow: hidden;
		width: 120px;
		right: 17px;
		top: 0;
		height: calc(100% - 17px);
		.item {
			background: #eee;
		}
		.body {
			overflow: hidden;
		}
	}
	.item {
		flex-shrink: 0;
		width: 120px;
		height: @height;
		line-height: @height;
		padding-left: 20px;
	}
}
</style>
