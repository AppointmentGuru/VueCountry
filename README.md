# Vue Country Store

> A collection of useful country data and some filters which you can run over it

##Basic usage

**Install:**

```
npm install git+https://git@github.com/AppointmentGuru/VueCountry.git
```

**Use:**

Use directly as a store

```
import countrystore from 'countries/src/countrystore'
```

Use as a module in your existing vuex store

```
// in store/index.js:
var Vue = require('vue')
var Vuex = require('vuex')
Vue.use(Vuex)

import countries from 'countries/src/countrystore/modules/countries'

export default new Vuex.Store({
  modules: {
    // ...
    countries: countries
  }
})
```

##filters:

The library provides some filters via a mixin:

* `getCountry(isoCode)`
* `getCountryByTimeZone(timezone)`


```
import countryfilters from 'countries/src/mixins/countryfilters'

// provide these as a mixin for your component:
export default {
  name: 'myCoolComponent',
  countrystore,
  mixins: [countryfilters],
  ...
}
```