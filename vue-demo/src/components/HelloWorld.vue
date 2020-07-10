<template>
  <div class="hello"></div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String
	},
	data() {
		return {
			arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
