<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/nav-bar'

export default {
  components: {
    NavBar
  }
}
</script>
