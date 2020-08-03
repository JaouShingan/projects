<template>
	<div>
		{{ top }} {{ boxStyle }}
		<div class="swiper">
			<div class="box" :style="boxStyle">
				<div class="item" v-for="item in list" :key="item.id">
					{{ item.data }}
				</div>
			</div>
			<!-- <div class="box" :style="boxStyle">
		</div> -->
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			data: [1, 2, 3, 4, 1],
			showIndex: 1,
			itemHeight: 50,
			top: 0,
			transition: 'transform 0.5s ease'
		};
	},
	computed: {
		list() {
			return this.data.map((item, index) => ({
				data: item,
				id: index
			}));
		},
		boxStyle() {
			return {
				transform: `translate3d(0, ${this.top}px, 0)`,
				transition: this.transition
			};
		}
	},
	mounted() {
		setInterval(() => {
			this.next();
		}, 1000);
	},
	methods: {
		next() {
			this.top = this.top - 50;
			// console.log(this.list.length * this.itemHeight);
			if (-this.top === this.list.length * this.itemHeight) {
				this.ret();
				// this.top = 0;
			}
		},
		ret() {
			setTimeout(() => {
				console.log(1);
				this.top = 0;
				this.transition = 'unset';
				setTimeout(() => {
					this.transition = 'transform 0.5s ease';
				}, 0);
			}, 0);
		}
	}
};
</script>
<style lang="less" scoped>
.swiper {
	width: 200px;
	height: 50px;
	overflow: hidden;
	.box {
		transition: transform 0.5s ease;
	}
	.item {
		width: 200px;
		height: 50px;
		background: #cccccc;
		text-align: center;
		line-height: 50px;
	}
}
</style>
