import axios from "axios";

const state = {
	name: "",
	phone: "",
	email: "",
	city: "",
	data: "",
	isOpened: false
};

const getters = {
	getName: state => state.name,
	getPhone: state => state.phone,
	getEmail: state => state.email,
	getCity: state => state.city,
	getIsOpened: state => state.isOpened
};

const actions = {
	toggleModal({ commit }) {
		commit("toggleModal")
	},
	async fetchData({ commit }, data) {
		const response = await axios.post(
			"http://hh.autodrive-agency.ru/test-tasks/front/task-7/",
			{
				name: data.name,
				phone: data.phone,
				email: data.email,
				city_id: data.city_id
			}
		);
		console.log(response);
		commit("postData", response.data)
	}
};

const mutations = {
	toggleModal: state => state.isOpened = !state.isOpened,
	postData: (state, data) => state.data = data
};

export default {
	state,
	getters,
	actions,
	mutations
}