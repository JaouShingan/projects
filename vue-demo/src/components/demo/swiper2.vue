<template>
	<div class="swiper">
		<div class="box" :style="boxStyle">
			<div class="item" v-for="(item, index) in data" :key="index">
				{{ item }}
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			data: [1, 2, 3, 4, 1],
			top: 0,
			re0: false,
			showIndex: 1,
			itemHeight: 50,
			offset: 200
		};
	},
	computed: {
		boxStyle() {
			return {};
		}
	},
	mounted() {
		setInterval(() => {
			this.showIndex += 1;
			if (this.showIndex === 5) {
				this.showIndex = 1;
			}
		}, 1000);
	},
	methods: {
		ret() {
			this.top = 0;
		}
	}
};
</script>
<style lang="less" scoped>
.swiper {
	width: 200px;
	height: 50px;
	overflow: hidden;
	position: relative;
	.box {
		transition: top 0.5s ease;
		position: absolute;
		top: 0;
		.item {
			width: 200px;
			height: 50px;
			background: #cccccc;
			text-align: center;
			line-height: 50px;
		}
	}
}
</style>
