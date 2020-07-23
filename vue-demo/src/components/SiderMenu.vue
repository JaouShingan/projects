<template>
	<Menu class="d-menu" accordion width="100%">
		<template v-for="menu in menuList">
			<MenuItem
				:name="menu.id"
				v-if="!menu.children"
				:key="menu.id"
				:to="menu.path"
			>
				{{ menu.name }}
			</MenuItem>
			<Submenu :name="menu.id" v-else :key="menu.id">
				<template slot="title">
					<Icon type="ios-paper" />
					{{ menu.name }}
				</template>
				<MenuItem
					v-for="submenu in menu.children"
					:name="submenu.id"
					:key="submenu.id"
					:to="submenu.path"
				>
					{{ submenu.name }}
				</MenuItem>
			</Submenu>
		</template>
	</Menu>
</template>
<script>
import { routes } from '@router';
export default {
	computed: {
		menuList() {
			return routes.map(({ path, name, children }, index) => {
				let tempChildren = null;
				if (children && children.length > 0) {
					tempChildren = children.map(
						({ subpath, subname }, subindex) => ({
							id: `${index}-${subindex}-${subname}`,
							path: `${path}/${subpath}`,
							name: subname
						})
					);
				}
				return {
					id: `${index}-${name}`,
					path,
					name,
					children: tempChildren
				};
			});
		}
	}
};
</script>
<style lang="less" scoped>
.d-menu {
	// width: 100%;
}
</style>
