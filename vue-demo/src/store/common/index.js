const state = {
	currentMenu: ''
}

const mutations = {
	SET_MENU: (state, newMenu) => {
		state.currentMenu = newMenu
	}
}

export default {
	state,
	mutations
}