<template>
  <div>
    <div class="card-background">
      <h3 class="card-header-text">{{ name }}</h3>
      <span>{{ title }}</span>
      <br/>
      <p>{{ bio }}</p>
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
.card-background {
  background-color: #E1F1FF;
}
.edit-button {
  background-color: #2699FB;
}
.card-header-text {
  color: #2699FB;
  font-weight: bold;
}
p {
  color: #01101D;
}
</style>
