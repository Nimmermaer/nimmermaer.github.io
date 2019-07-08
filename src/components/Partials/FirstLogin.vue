<template>
  <div class="container">
    <form @submit.prevent="addName">
      <label for="name">Namen eingeben</label>
      <input type="text" name="name" id="name" v-model="name">
      <div v-if="feedback">
        {{ feedback }}
      </div>
      <button type="submit" class="btn btn-large">Save</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "FirstLogin",
    data() {
      return {
        name: null,
        feedback: null
      }
    },
    methods: {
      addName() {
        if(this.name) {
          console.log(this.name);
          let user = {
            name: this.name,
            date:Date.now(),
          };
          localStorage.setItem('wolfgiraffe', JSON.stringify(user));
          this.$router.push({name: 'Index'})
        }else {
          this.feedback = 'Bitte einen Namen eingeben!';
          let object = JSON.parse(localStorage.getItem('wolfgiraffe'));
          this.name = object.name;
        }
      }
    }
  }
</script>

<style scoped>

</style>
