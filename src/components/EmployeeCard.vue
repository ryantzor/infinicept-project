<template>
  <div style="margin-bottom:30px;">
    <div class="card-background">
      <div class="card-content">
        <h3 class="card-header-text">{{ name }}</h3>
        <small class="pull-right quote-text">{{ quote }}</small>
        <span class="title-text">{{ title }}</span>
        <br>
        <br>
        <br>
        <p>{{ bio }}</p>
      </div>
      <div class="card-footer">
        <router-link class="edit-button" :to="{ name: 'EditEmployee', params: {name: name, title: title, quote: quote, bio: bio}}">Edit Profile</router-link>
        <!-- <a @click="$router.push('EditEmployee')" class="edit-button">Edit Profile</a> -->
        <button class="pull-right technolodon-button">CONTACT</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeCard',
  props: {
    name: String,
    title: String,
    bio: String,
    quote: String
  }
}
</script>

<style scoped>
.quote-text {
  font-size: 8pt;
}
.card-content {
  padding: 30px 50px;
}
.card-footer {
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 40px;
}
.card-background {
  background-color: #E1F1FF;
}
.edit-button {
  color: #01101D;
  font-size: 8pt;
  font-weight: 600;
  text-decoration: none;
}
.card-header-text {
  color: #2699FB;
  font-weight: bold;
}
.title-text {
  color: #01101D;
  font-weight: 700;
}
p {
  color: #01101D;
  line-height: 25px;
}
</style>
