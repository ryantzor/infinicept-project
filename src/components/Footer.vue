<template>
  <div class="footer md-elevation-6">
    <div class="navbar navbar-blend navbar-fixed-bottom">
        <div style="display: flex; justify-content: center" class="nav">
            <ul class="nav navbar-nav">
            <li><a @click="showFeatureComingSoon()" href="#">FEED</a></li>
            <li><a @click="showFeatureComingSoon()" href="#">TEAM</a></li>
            <li><a @click="$router.push('about')" href="#/about">ABOUT</a></li>
            <li><a @click="showFeatureComingSoon()" href="#">BLOG</a></li>
            <!-- <li @click="showFeatureComingSoon()" class="navbar-right-furthest"><a href="#">CONTACT</a></li>
            <button @click="showFeatureComingSoon()" type="button" class="btn btn-default">SIGN UP</button> -->
            </ul>
        </div>
    </div>
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
  components: {
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
    position:absolute; 
    bottom:0px; 
    height:100px; 
    left:0px; 
    right:0px; 
    overflow:hidden;
}
.navbar {
    height: 80px;
}
.navbar ul a {
  margin-top:10px;
  font-weight: 900;
  text-align: center;
  color: white;
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
