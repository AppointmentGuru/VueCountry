var Vue = require('vue')
var Vuex = require('vuex')
Vue.use(Vuex)

import countries from './modules/countries'

export default new Vuex.Store({
  modules: {
    countries: countries
  }
})
