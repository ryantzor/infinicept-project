<template>
  <div>
  


    <nav class="navbar navbar-default">
      <div class="container-fluid">
          <div class="navbar-header">
          <a class="navbar-brand" href="#">TECHNOLODON</a>
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <!-- <ul class="nav navbar-nav">
              <li><a @click="showFeatureComingSoon()" href="#">FEED</a></li>
            <li><a @click="showFeatureComingSoon()" href="#">TEAM</a></li>
            <li><a @click="showFeatureComingSoon()" href="#">ABOUT</a></li>
            <li><a @click="showFeatureComingSoon()" href="#">BLOG</a></li>
            <li @click="showFeatureComingSoon()" class="navbar-right-furthest"><a href="#">CONTACT</a></li>
            <button @click="showFeatureComingSoon()" type="button" class="btn btn-default">SIGN UP</button>
            </ul> -->
            <ul class="nav navbar-nav navbar-right">
            <!-- <li class="active"><a href="#">Home</a></li> -->
            <li><a @click="showFeatureComingSoon()" href="#">FEED</a></li>
            <li><a @click="showFeatureComingSoon()" href="#">TEAM</a></li>
            <li><a @click="showFeatureComingSoon()" href="#/about">ABOUT</a></li>
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
export default {
  methods: {
    showFeatureComingSoon() {
      this.$awn.info('Feature coming soon!')
    }
  },
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {
    background-color: #01101D;
    color: #2699FB;
}
.navbar-brand {
  font-size: 24px;
  padding-top:35px;
  text-align: center;
  vertical-align: middle;
  font-weight: 600;
  color: white;
}
.navbar button {
  font-size: 10px;
  font-weight: 600;
  margin-top: 30px;
  color: #FFFFFF;
  background-color: #01101D;
  border: 2px solid #FFFFFF; /* Green */
}
.navbar ul a {
  margin-top:20px;
  font-weight: 900;
  text-align: center;
  color: white;
}
.navbar-collpase {
  height: 300px !important;
}
.navbar {
  height: 100px;
  background-color: #01101D;
  border: 0px;
}
.navbar-right-furthest {
  padding-left: 30px;
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
