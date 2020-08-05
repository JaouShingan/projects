<template>
	<div id="app">
		<!-- <Main/> -->
		<router-view />
	</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
	data() {
		return {};
	},
	computed: {
		...mapState({
			userinfo: (state) => state.common.userinfo
		})
	},
	mounted() {
		console.log(this.userinfo);
		if (!this.userinfo) {
			this.$router.push('login')
		}
	}
};
</script>
<style lang="less">
#app {
	width: 100vw;
	height: 100vh;
}
</style>
