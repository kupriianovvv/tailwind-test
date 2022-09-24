import axios from "axios";

const state = {
	name: "",
	phone: "",
	email: "",
	city_id: "",
	data: "",
	isOpened: false
};

const getters = {
	getName: state => state.name,
	getPhone: state => state.phone,
	getEmail: state => state.email,
	getCity: state => state.city_id,
	getIsOpened: state => state.isOpened,
	getData: state => state.data
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
		commit("toggleModal")
	},
	changeName({ commit }, data) {
		console.log(data)
		commit("dataName", data)
	},
	changePhone({ commit }, data) {
		console.log(data)
		commit("dataPhone", data)
	},
	changeEmail({ commit }, data) {
		console.log(data)
		commit("dataEmail", data)
	},
	changeCity({ commit }, data) {
		console.log(data)
		commit("dataCity", data)
	},
	changeData({ commit }, data) {
		console.log(data);
		commit("postData", data)
	}
};

const mutations = {
	toggleModal: state => state.isOpened = !state.isOpened,
	postData: (state, data) => state.data = data,
	dataName: (state, data) => state.name = data,
	dataPhone: (state, data) => state.phone = data,
	dataEmail: (state, data) => state.email = data,
	dataCity: (state, data) => state.city_id = data,
};

export default {
	state,
	getters,
	actions,
	mutations
}