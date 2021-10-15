<template lang="">
  <div>
    <h1>HomeWork</h1>
    <div class="form-group">
      <label>First Name</label>
      <br />
      <input
        type="text"
        class="form-control"
        placeholder="Enter your name"
        v-model="fname"
      />
      <br>
      <label>Last Name</label>
      <input
        type="text"
        class="form-control"
        placeholder="Enter your name"
        v-model="lname"
      />
      <br>
      <label>Age</label>
      <input
        type="text"
        class="form-control"
        placeholder="Enter your name"
        v-model="age"
      />
    </div>
    <br>
    <button type="submit" class="btn btn-success" @click="addUser" style="width: 126px;">Submit</button>
  </div>
</template>
<script>
export default {
  name: "homework",
  data() {
    return {
      fname : null,
      lname : null,
      age : null
    }
  },
  methods: {
    addUser(){
      this.$store.dispatch('setCurrentUsers', {fname : this.fname, lname : this.lname, age : this.age})
      
    }
  },
};
</script>
<style lang="">

</style>
