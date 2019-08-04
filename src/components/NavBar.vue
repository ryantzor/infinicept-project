<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
          <div class="navbar-header">
          <a class="navbar-brand" href="#">TECHNOLODON</a>
          </div>
          <ul class="nav navbar-nav navbar-right">
            <!-- <li class="active"><a href="#">Home</a></li> -->
            <li><a @click="showFeatureComingSoon()" href="#">FEED</a></li>
            <li><a @click="showFeatureComingSoon()" href="#">TEAM</a></li>
            <li><a @click="showFeatureComingSoon()" href="#">ABOUT</a></li>
            <li><a @click="showFeatureComingSoon()" href="#">BLOG</a></li>
            <li @click="showFeatureComingSoon()" class="navbar-right-furthest"><a href="#">CONTACT</a></li>
            <button @click="showFeatureComingSoon()" type="button" class="btn btn-default">SIGN UP</button>
          </ul>
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
  margin-left: 20px !important;
  font-size: 24px;
  line-height: 60px;
  text-align: center;
  font-weight: 600;
  color: white;
}
.navbar button {
  font-size: 10px;
  font-weight: 600;
  height: 35px;
  width: 100px;
  margin-top: 25px;
  margin-right: 10px;
  color: #FFFFFF;
  background-color: #01101D;
  border: 2px solid #FFFFFF; /* Green */
}
.navbar ul a {
  font-weight: 900;
  padding-left: 50px;
  line-height: 60px;
  text-align: center;
  color: white;
}
.navbar {
  height: 100px;
  background-color: #01101D;
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
