<template>
	<Menu class="d-menu" accordion width="100%" :active-name="activeName" @on-select="onSelect">
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
import { mapMutations } from 'vuex'
export default {
	computed: {
		menuList() {
			console.log(routes[0])
			return routes[0].children.filter(route => !route.hidden).map(({ path, name, children }, index) => {
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
		},
		activeName () {
			return this.menuList[0].id || ''
		}
	},
	methods: {
		...mapMutations(['SET_MENU']),
		onSelect (name) {
			this.SET_MENU(name)
		}
	}
};
</script>
<style lang="less" scoped>
.d-menu {
	// width: 100%;
}
</style>
