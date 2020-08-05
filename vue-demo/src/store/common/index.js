const state = {
	userinfo: null,
	currentMenu: ''
};

const mutations = {
	SET_MENU: (state, newMenu) => {
		state.currentMenu = newMenu;
	},
	SET_USERINFO: (state, userinfo) => {
		state.userinfo = userinfo
		localStorage.setItem(userinfo, userinfo)
	}
};

export default {
	state,
	mutations
};
