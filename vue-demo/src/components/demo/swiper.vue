<template>
	<div class="swiper" @mouseenter="enter" @mouseleave="leave">
		<div class="box" :style="box1Style">
			<div class="item" v-for="(item, index) in data" :key="index">
				{{ item }}
			</div>
		</div>
		<div class="box" :style="box2Style">
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
			data: [1, 2, 3, 4],
			top: 0,
			re0: false,
			showIndex: 1,
			itemHeight: 50,
			offset: 200,
			interval: null
		};
	},
	computed: {
		box1Style() {
			let top = 0;
			let visibility = 'visible';
			if (this.showIndex <= 5) {
				visibility = 'visible';
				top = -(this.showIndex - 1) * this.itemHeight;
			} else {
				visibility = 'hidden';
				top = 50;
			}
			return {
				top: top + 'px',
				visibility
			};
		},
		box2Style() {
			let top = 0;
			let visibility = 'hidden';
			if (this.showIndex <= 4) {
				visibility = 'hidden';
				top = 50;
			} else {
				visibility = 'visible';
				top = 50 - (this.showIndex - 4) * this.itemHeight;
			}
			return {
				top: top + 'px',
				visibility
			};
		}
	},
	mounted() {
		this.interval = setInterval(() => {
			this.showIndex += 1;
			if (this.showIndex === 9) {
				this.showIndex = 1;
			}
		}, 1000);
	},
	methods: {
		ret() {
			this.top = 0;
		},
		enter() {
			this.interval && clearInterval(this.interval);
		},
		leave() {
			this.interval = setInterval(() => {
				this.showIndex += 1;
				if (this.showIndex === 9) {
					this.showIndex = 1;
				}
			}, 1000);
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
