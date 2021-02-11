import { mutationTree, actionTree } from "nuxt-typed-vuex";
// global variable
// state cannot be change
export const state = () => ({
	pokemons: {},
	trainors: {}
})
// change value of state here
export const mutations = mutationTree(state, {
	SET_POKEMONS(state, pokemons) {
		state.pokemons = pokemons
	}
})

export const actions = actionTree({ state, mutations }, {
	async getPokemons({ commit }) {
		try {
			const response = await this.$axios.get('https://pokeapi.co/api/v2/pokemon/')
			commit('SET_POKEMONS', response.data)
			return
		} catch (err) {
			throw new Error(err)
		}
	}
})