<template>
  <div>
  


    <nav class="navbar navbar-fixed">
      <div class="container-fluid">
          <div class="navbar-header">
          <a class="navbar-brand" href="#">TECHNOLODON</a>
          <!-- <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button> -->
          </div>

           <div class="navbar-toggle" data-toggle="collapse">
            <Slide right noOverlay >
                <a class="bm-menu-links" @click="showFeatureComingSoon()" v-on:click="scrollToTop()">FEED</a>
                <a class="bm-menu-links" @click="showFeatureComingSoon()" v-on:click="$refs.email1.focus()">TEAM</a>
                <a class="bm-menu-links" @click="$router.push('about')" v-on:click="goToElementById('aboutSection')">ABOUT</a>
                <a class="bm-menu-links" @click="showFeatureComingSoon()" v-on:click="goToElementById('contact')">CONTACT</a>
                <a class="bm-menu-links" @click="showFeatureComingSoon()" v-on:click="$refs.signup.focus()">SIGN UP</a>
            </Slide>
            </div>
          
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
            <li><a @click="showFeatureComingSoon()" href="#">FEED</a></li>
            <li><a @click="showFeatureComingSoon()" href="#">TEAM</a></li>
            <li><a @click="$router.push('about')" href="#/about">ABOUT</a></li>
            <li><a @click="showFeatureComingSoon()" href="#">BLOG</a></li>
            <li @click="showFeatureComingSoon()" class="navbar-right-furthest"><a href="#">CONTACT</a></li>
            <button @click="showFeatureComingSoon()" type="button" class="btn btn-default">SIGN UP</button>
          </ul>
          </div>
          
      </div>
    </nav>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
  methods: {
    showFeatureComingSoon() {
      this.$awn.info('Feature coming soon!')
    }
  },
  name: 'NavBar',
  components: {
    Slide
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar button {
  width: 80px;
  height: 35px;
  font-size: 6pt;
  font-weight: 600;
  margin-top: 30px;
  margin-right: 40px;
  color: #FFFFFF;
  background-color: #01101D;
  border: 2px solid #FFFFFF; /* Green */
}
.navbar-brand {
  font-size: 24px;
  padding-top:35px;
  padding-left: 20px;
  text-align: center;
  vertical-align: middle;
  font-weight: 600;
  color: white;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
