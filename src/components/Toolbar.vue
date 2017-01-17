<template>
<el-menu theme="light" default-active="1" class="el-menu-demo" mode="horizontal" >
  <el-menu-item index="1">
    <span class="flag-icon" :class=' "flag-icon-"+iso '></span>
    VueCountry
  </el-menu-item>
  <!--
  <el-submenu index="2">
    <template slot="title">Workspace</template>
    <el-menu-item index="2-1">item one</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">
    <a href="https://www.ele.me" target="_blank">Orders</a>
  </el-menu-item>
  -->
</el-menu>
</template>
<script>
export default {
  name: 'Toolbar',
  props: {
    iso: { type: String, default: 'za' }
  }
}
</script>