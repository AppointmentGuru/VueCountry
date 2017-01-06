<template>
  <div id="app">
    <h3>Vue Country Store</h3>
    <p>A collection of useful country data and some filters which you can run over it</p>

    <h4>Basic usage</h4>

    <strong>Install:</strong>

    <pre><code>
npm install git+https://git@github.com/AppointmentGuru/VueCountry.git
    </code></pre>

    <h5>Use:</h5>

    <strong>Use directly as a store</strong>
    <pre><code>
import countrystore from 'countries/src/countrystore'
    </code></pre>

    <strong>Use as a module in your existing vuex store</strong>
    <pre><code>
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

    <pre><code>
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
    <strong><pre>getCountry({{iso}})<pre></strong>
    <p>
      <input v-model='iso' >
      <p>Current iso: <span class="flag-icon" :class=' "flag-icon-"+iso '></span> {{iso}}</p>
      Country info:
      <pre><code>{{getCountry(iso)}}</code></pre>
    </p>

    <strong><pre>getCountryByTimeZone({{iso}})<pre></strong>
    <p>
      <input v-model='tz' >
      <p>Current tz: {{tz}}</p>
      Returns:
      <pre><code>{{getCountryByTimezone(tz)}}</code></pre>
    </p>

    <h4>Raw data</h4>
    <pre><code>{{data}}</code></pre>
  </div>
</template>

<script>
require('flag-icon-css/css/flag-icon.min.css')

import countrystore from './countrystore'
import countryfilters from './mixins/countryfilters'
export default {
  name: 'app',
  countrystore,
  mixins: [countryfilters],
  data () {
    return {
      iso: 'za',
      tz: 'Africa/Johannesburg'
    }
  },
  computed: {
    data () {
      return countrystore.state.countries.data
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
 pre {
    text-align: left;
    font-family: "Courier 10 Pitch", Courier, monospace;
    font-size: 95%;
    line-height: 140%;
    white-space: pre;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -o-pre-wrap;
}

code {
    font-family: Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;
    font-size: 95%;
    line-height: 140%;
    white-space: pre;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -o-pre-wrap;
    background: #faf8f0;
    display:block;
}

</style>
