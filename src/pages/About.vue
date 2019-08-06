<template>
  <div>
    <div class="col-md-1">
    </div>
    <div class="col-md-5">
      <div class="center-content about-section">
        <h2 style="font-weight: 600; text-align:center">ABOUT TECHNOLODON</h2>
        <br/>
        <br/>
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
        <div class="about-footer">
          <small>Technolodon LLC. A real company despite what you have heard</small>
        </div>
      </div>
    </div>
    <div class="col-md-5">
      <div class="center-content">
        <employee-card 
          v-for="employee in employeeList"
          :key="employee.id"
          :name="employee.name"
          :title="employee.title"
          :bio="employee.bio"
          :quote="employee.quote">
        </employee-card>
      </div>
    </div>
    <div class="col-md-1">
    </div>
  </div>
</template>

<script>
import EmployeeCard from '../components/EmployeeCard'



export default {
  name: 'About',
  components: {
    EmployeeCard
  },
  props: {
    msg: String
  },
  data () {
    return {
      employeeList: [
        {
          id: 1,
          name: 'Duncan Sunrise',
          title: 'Design & Graphics',
          bio: 'Duncan loves long walks in the mountains, yoga, lattes with more foam than coffee and bottle service at the club. He lives in Boulder Colorado with fifteen dogs and eleven roommies. His inspiration for design is the simplicity of rectangles on our circular planet.',
          quote: '"Technology, like art, is a soaring exercise of the human imagination."'
        },
        {
          id: 2,
          name: 'Constance Clever',
          title: 'Marketing',
          bio: 'Constance is a marketing Guru with fifteen years experience selling stuff and things to the general public. It has been said of her by at least one person that she "Could sell diapers to a baby". Constance"s favorite show is Dexter and she lives in her loft apartment with her hairless cat and live in butler',
          quote: '“Content is fire, social media is gasoline.”'
        },
        {
          id: 3,
          name: 'Bronco LaCrosse',
          title: 'Sales',
          bio: 'Bronco is a Lion in the sales world. He consistently pushes units and makes bank. Without Bronco no one would have salaries. People in the office affectionately (and not) refer to him as a business monster. When not selling, Bronco likes to partake of a nice, chilled white wine and a good Lifetime movie.',
          quote: '"The way to get started is to quit talking and begin doing."'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center-content {
  margin-top:60px;
}
.about-section {
  background-color: #01101D;
  padding: 70px;
  color:white;
  font-size: 13pt;
  font-weight: bold;
}
.about-footer {
  margin-top: 120px;
  font-size: 10pt;
  padding-bottom: 90px;
}
h1 {
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  color: grey;
  margin-top: 40px;
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
