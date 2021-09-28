<template>
  <div id="hello">
    <h1>Name : {{myName}}</h1>
    <h2>Tel : {{tel}}</h2>
    <h3>Nisit ID : {{Nisit_Id}}</h3>
    <i class="fas fa-address-book"></i>
    <div class="d-grid gap-2">
      <button class="btn btn-outline-danger" type="button">Button</button>
      <button class="btn btn-outline-danger" type="button">Button</button>
    </div>
  </div>
  
</template>

<script>
export default {
  name :  "hello",
  data() {
    return {
      myName : "Phumiphat Li",
      tel : "0922506083",
      Nisit_Id : "6130203489",
    };
  }
};
</script>

<style>
  #hello {
    background-color: whitesmoke;
    color: gray;
  }
</style>