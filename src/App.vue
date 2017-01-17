<template>
  <div id="app">
    <el-row :span="12">
    <toolbar></toolbar>
    </el-row>
    <el-row>
      <el-col :span="8">
        <side-bar></side-bar>
      </el-col>
      <el-col :span="12">
        <div class='main-content' >
          <docs></docs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SideBar from './components/SideBar'
import Toolbar from './components/Toolbar'
import Docs from './components/pages/Docs'

require('flag-icon-css/css/flag-icon.min.css')

import countrystore from './countrystore'
import countryfilters from './mixins/countryfilters'

export default {
  name: 'app',
  countrystore,
  mixins: [countryfilters],
  components: { SideBar, Toolbar, Docs },
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
body{ padding:0px;margin:0px; }
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.main-content {
  padding: 20px;
}
</style>