<template>
<div>
    <h3>Vue Country Store</h3>
    <p>A collection of useful country data and some filters which you can run over it</p>

    <h4>Basic usage</h4>

    <strong>Install:</strong>

    <pre ><code class='prettyprint' >
npm install git+https://git@github.com/AppointmentGuru/VueCountry.git
    </code></pre>

    <h5>Use:</h5>

    <strong>Use directly as a store</strong>
    <pre ><code class='prettyprint' >
import countrystore from 'countries/src/countrystore'
    </code></pre>

    <strong>Use as a module in your existing vuex store</strong>
    <pre ><code class='prettyprint' >
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
    </code></pre>

    <h5>filters:</h5>
    <p>
    The library provides some filters via a mixin:
    <ul>
      <li>getCountry(isoCode)</li>
      <li>getCountryByTimeZone(timezone)</li>
    </ul>
    </p>

    <pre ><code class='prettyprint' >
import countryfilters from 'countries/src/mixins/countryfilters'

// provide these as a mixin for your component:
export default {
  name: 'myCoolComponent',
  countrystore,
  mixins: [countryfilters],
  ...
}
    </code></pre>

    <h4>Demo</h4>
    <strong><code>getCountry({{iso}})<code></strong>
    <p>
      <input v-model='iso' >
      <p>Current iso: <span class="flag-icon" :class=' "flag-icon-"+iso '></span> {{iso}}</p>
      Country info:
      <pre ><code class='prettyprint' >{{getCountry(iso)}}</code></pre>
    </p>

    <strong><code>getCountryByTimeZone({{iso}})<code></strong>
    <p>
      <input v-model='tz' >
      <p>Current tz: {{tz}}</p>
      Returns:
      <code>{{getCountryByTimezone(tz)}}</code>
    </p>

    <h4>Raw data</h4>
    <pre ><code class='prettyprint' >{{rawData}}</code></pre>
</div>
</template>
<script>
import countrystore from './../../countrystore'
import countryfilters from './../../mixins/countryfilters'

export default {
  name: 'Docs',
  countrystore,
  mixins: [countryfilters],
  data () {
    return {
      iso: 'za',
      tz: 'Africa/Johannesburg'
    }
  },
  computed: {
    rawData () {
      return countrystore.state.countries.data
    }
  }
}
</script>
<style>
pre {
  background-color: #f1f1f1;
  border: #d3d3d3;
  padding: 5px;
}
</style>