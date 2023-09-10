import { createStore } from 'vuex'

export default createStore({
  state: {
    cocktailsList: [
      'margarita',
      'mojito',
      'a1',
      'kir'
    ],
    cocktails: {}
  },
  mutations: {
    setCoctails (state, { cocktailCode, cocktails }) {
      state.cocktails[cocktailCode] = cocktails
    }
  },
  actions: {
    async fetchCocktail ({ state, commit }, cocktailCode) {
      if (!(cocktailCode in state.cocktails)) {
        await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktailCode)
          .then(async response => {
            const data = await response.json()
            const cocktails = data.drinks

            commit('setCoctails', { cocktailCode, cocktails })
          })
          .catch(error => {
            console.error('There was an error!', error)
          })
      }

      return state.cocktails[cocktailCode]
    }
  }
})
