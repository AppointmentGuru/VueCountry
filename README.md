# Vue Country Store

> A collection of useful country data and some filters which you can run over it

**Dependencies:**

* vuex
* moment-timezone
* flag-icon-css

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


## Development

# countries

> A Vuex store and some components for getting useful info about a country

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
