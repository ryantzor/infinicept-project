<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <NavBar />
    <transition
      name="zoom"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter">
      <router-view></router-view>
    </transition>

    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
// import About from './components/About.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
// Vue material CSS
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

// Vue material components, global registration
import VueMaterial from 'vue-material' 

Vue.use(VueMaterial)

export default {
  name: 'app',
  components: {
    NavBar,
    Footer
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    }
  },
  created() {
     this.$router.beforeEach((to, from, next) => {
       let transitionName = 'out-in'
      this.transitionName = transitionName
      this.transitionMode = 'zoom'
      this.transitionEnterActiveClass = `${transitionName}-enter-active`

      if (to.meta.transitionName === 'zoom') {
        this.transitionMode = 'in-out'
        this.transitionEnterActiveClass = 'zoom-enter-active'
        // Disable scrolling in the background
        document.body.style.overflow = 'hidden'
      }

      if (from.meta.transitionName === 'zoom') {
        this.transitionMode = null
        this.transitionEnterActiveClass = null
        // Enable scrolling again.
        document.body.style.overflow = null
      }
 
       next();
     });
  },
  data () {
    return {
      prevHeight: 0,
      transitionEnterActiveClass: ''
    }
  }
}
</script>

<!-- global css for our app -->
<style>
.zoom-enter-active,
.zoom-leave-active {
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-name: zoom;
}

.zoom-leave-active {
  animation-direction: reverse;
}

@keyframes zoom {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  100% {
    opacity: 1;
  }
}
.md-theme-default a:not(.md-button) {
  color: white;
}
.navbar-fixed .navbar-nav > li > a:hover, .navbar-fixed .navbar-nav > li > a:focus {
    background-color: #01101D;
    color: #2699FB;
}
.navbar-fixed-bottom .navbar-nav > li > a:hover, .navbar-fixed-bottom .navbar-nav > li > a:focus {
    background-color: #01101D;
    color: #2699FB;
}
.navbar ul a {
  font-size: 14pt;
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
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */
</style>
