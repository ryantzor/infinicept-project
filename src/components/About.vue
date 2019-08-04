<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="col-md-1">
      asd
    </div>
    <div class="col-md-5">
      <div class="center-content about-section">
        <h2 style="font-weight: 600; text-align:center">ABOUT TECHNOLODON</h2>
        <br/>
        <br/>
        <p>Technolodon is a company that pushes boundaries, innovates on innovation, pushes more boundaries and produces something wonderful. We don't stop at the boilerplate products you see out there. We PUSH boundaries.</p>
        <br/>
        <br/>
        <p>If you are looking for the next bigger and better thing we've got you covered. Anything from scaling up that small thing you've been meaning to scale, to trying to get that already big thing that you have but are having difficulty selling out there, we are your people.</p>
        <br/>
        <br/>
        <p>We work from nine to five to insure your ideas or things, big or small, get to where you want them to go. Are you looking to sell internationally? We have two international locations in exotic Canada. Looking to sell locally? Our headquarters in beautiful Milliken CO is smack dab in the center of everything.</p>
        <br/>
        <br/>
        <p>Don't settle for less...Settle for Technolodon. We keep it REAL.</p>
      </div>
    </div>
    <div class="col-md-5">
      asd
    </div>
    <div class="col-md-1">
      asd
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center-content {
  margin-top:60px;
  font-size: 15px;
  font-weight: bold;
}
.about-section {
  background-color: #01101D;
  padding: 40px;
  color:white;
}
h1 {
  text-align: center;
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
