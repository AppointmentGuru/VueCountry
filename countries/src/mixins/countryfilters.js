import countrystore from './../countrystore'

export default {
  countrystore,
  methods: {
    getCountry (iso) {
      return countrystore.state.countries.data[iso.toUpperCase()] || {}
    },
    getCountryByTimezone (tz) {
      return countrystore.state.countries.indexes.tz[tz] || {}
    }
  }
}
