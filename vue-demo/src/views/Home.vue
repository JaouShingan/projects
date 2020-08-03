<template>
	<div class="home">
		<Swiper/>
		<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Swiper from '@/components/demo/swiper'

export default {
	name: 'Home',
	components: {
		// HelloWorld,
		Swiper
	},
}
</script>

<style lang="less" scoped>
.home {
	width: 100%;
	height: 100%;
}
</style>
