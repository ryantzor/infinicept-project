<template>
  <div>
    <div>
      <h1>Edit Employee</h1>
    </div>
    <div>
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <div class="row">
          <div class="edit-background">
            <div class="center-content">
              <div class="row">
              <form>
                <div class="form-group">
                  <label for="usr">Full Name</label>
                  <input type="text" :value="name" class="form-control" id="usr">
                </div>
                <div class="form-group">
                  <label for="pwd">Job Title</label>
                  <input v-model="title" class="form-control">
                </div>
                <div class="form-group">
                  <label for="pwd">Quote</label>
                  <input v-model="quote" class="form-control">
                </div>
                <div class="form-group">
                  <label for="pwd">Biography</label>
                  <textarea v-model="bio" class="form-control"></textarea>
                </div>
                <button @click="saveForm" class="pull-right technolodon-button save-button">SAVE</button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>        
      <div class="col-md-3"></div>
    </div>
    
  </div>
</template>

<script>



export default {
  name: 'EditEmployee',
  components: {
  },
  props: {
    msg: String
  },
  created() {
    this.id = this.$route.params.id;
    this.name = this.$route.params.name;
    this.quote = this.$route.params.quote;
    this.bio = this.$route.params.bio;
    this.title = this.$route.params.title;
  },
  data () {
    return {
      id: 0,
      name: '',
      bio: '',
      quote: '',
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
  },
  methods: {
    saveForm() {
      this.$awn.success('Employee saved');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.save-button {

}
.edit-background {
  background-color: #E1F1FF;
}
.custom-input {
  max-width: 150px;
}
.center-content {
  padding: 20px 150px;
}
h1 {
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  color: grey;
  margin-top: 50px;
  margin-bottom: 40px;
}
input {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
}
textarea {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  min-height: 100px;
}
</style>
