<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import Header from './components/header'
export default {
  name: 'App',
  components:{
    'my-header':Header
  }
}
</script>
<style>
*{
    box-sizing:border-box;
    margin:0;
}
</style>