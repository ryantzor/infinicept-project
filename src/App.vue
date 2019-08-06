<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <NavBar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
// import About from './components/About.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    Footer
  },
  data () {
    return {
    }
  }
}
</script>

<!-- global css for our app -->
<style>
.navbar-fixed .navbar-nav > li > a:hover, .navbar-fixed .navbar-nav > li > a:focus {
    background-color: #01101D;
    color: #2699FB;
}
.navbar-fixed-bottom .navbar-nav > li > a:hover, .navbar-fixed-bottom .navbar-nav > li > a:focus {
    background-color: #01101D;
    color: #2699FB;
}
.navbar ul a {
  margin-top:20px;
  font-weight: 900;
  text-align: center;
  color: white;
}
.navbar-collpase {
  height: 300px !important;
  z-index: 999;
}
.navbar {
  height: 100px;
  background-color: #01101D;
  border: 0px;
}
.navbar-right-furthest {
  padding-left: 30px;
}
.footer {
  background: #01101D;
}
.bm-burger-button {
  position: fixed !important;
  top: 32px !important;
  height: 15px !important;
  width:15px !important;
}
.bm-burger-bars {
  background-color:rgb(255, 255, 255) !important;
}
.bm-menu {
background-color: rgb(235, 235, 235) !important;  
}
.bm-menu-links {
color: rgb(33, 33, 33) !important;
}
.bm-cross {
background: #bdc3c7 !important;
}
.technolodon-button {
  background-color: #2699FB;
  color: white;
  font-size: 7pt;
  font-weight: 700;
  border: 2px solid #FFFFFF; /* Green */
  width: 110px;
  height: 40px;
  border-radius: 5px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
