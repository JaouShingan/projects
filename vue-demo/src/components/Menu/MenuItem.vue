<template>
	<div class="d-menu-item" @click="click">
		<span class="d-menu-item-title">
			<span class="d-menu-item-title-icon">
				<i class="ivu-icon" :class="menu.icon"></i>
			</span>
			<span class="d-menu-item-title-text">{{menu.name}}</span>
		</span>
		<i
			v-if="!hasChild"
			class="d-menu-item-expanded-icon ivu-icon ivu-icon-ios-arrow-down"
			:class="menu.expanded ? 'up' : ''"
		></i>
	</div>
</template>

<script>
export default {
	name: 'DMenuItem',
	props: {
		menu: {
			required: true,
			type: Object
		}
	},
	computed: {
		hasChild () {
			return this.menu.children instanceof Array && this.menu.children.length > 0
		}
	},
	methods: {
		click () {
			if (!this.hasChild) {
				this.$route(this.menu.route)
			}
			this.$emit('click', this.menu)
		}
	}
}
</script>
<style lang="less" scoped>
.d-menu-item {
	display: flex;
	width: 100%;
	height: 50px;
	justify-content: space-between;
	align-items: center;
	.d-menu-item-title {
		display: flex;
		.d-menu-item-title-text {
			margin-left: 5px;
		}
	}
	.d-menu-item-expanded-icon {
		border-top: 20px solid #ccc;
		border-bottom: 20px solid #ccc;
		border-left: 18px solid #ccc;
		transition: transform 0.2s ease-out;
		&.up {
			transform: rotateZ(180deg);
		}
	}
}
</style>
