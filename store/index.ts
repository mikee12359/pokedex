import { getAccessorType } from 'typed-vuex'
// same variable name with file name
import * as pokedex from './pokedex'

export const accessorType = getAccessorType({
  modules: {
		pokedex
  },
})
