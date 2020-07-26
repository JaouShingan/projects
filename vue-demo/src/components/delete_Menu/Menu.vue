<template>
	<div class="d-menu">
		<template v-for="item in list">
			<MenuItem :key="item.id" :menu="item" @click="click" />
		</template>
	</div>
</template>

<script>
/**
 * 
 * Menu
 * 
 * props:
 * 		mode	'single' | 'mult' 菜单展开模式，single：菜单里只展开一个子菜单，其他收起。mult：菜单里可以同时展开多个子菜单
 * 		expanded	展开，默认 false
 * 		menus 
 * 			[
 * 				{
 * 					name: 'menu name',
 * 					route:	'route',	// 如果不填写则不会跳转
 * 					icon: 'icon',	// 菜单图标
 * 					children: []	// 子菜单
 * 				}
 * 			]
 * event:
 * 		change
 * 			菜单被点击后触发事件
 */
import { DEFAULT_PREFIX } from '@utils/common'
import MenuItem from './MenuItem'
export default {
	name: 'DMenu',
	props: {
		// expanded: {
		// 	type: Boolean,
		// 	default: false
		// },
		menus: {
			required: true,
			type: Array
		}
	},
	components: {
		MenuItem
	},
	data () {
		return {
			routeMap: new Map()
		}
	},
	computed: {
		list () {
			return this.flatMenu(this.menus || [])
		}
	},
	methods: {
		click (item) {

		},
		flatMenu (list = [], level = 1, parentId = null) {
			if (!(list instanceof Array)) {
				return []
			}
			const result = []
			list.forEach(({ name, route, icon, children }, index) => {
				const id = `${parentId ? `${parentId}_${index}` : `${DEFAULT_PREFIX}_MENU_${index}`}`
				const menu = { id, name, icon, route, children, level }
				if (children instanceof Array && children.length > 0) {
					menu.expanded = false
					result.push(menu)
					result.push(...this.flatMenu(children, level + 1, id))
				} else {
					result.push(menu)
				}
			})
			return result
		},
		mapRoute () {
			this.list.forEach(item => item.route && this.routeMap.set(item.route, item))
		}
	},
	mounted () {
		this.flatMenu(this.menus)
		this.mapRoute()
	}
}
</script>
<style lang="less" scoped></style>
