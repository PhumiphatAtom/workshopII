<template lang="">
  <div>
    <h1>HomeWorkResult</h1>
    <b-table stiped hover :items="users"></b-table>
  </div>
</template>
<script>
export default {
  name: "homeWorkResult",
  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
  },
};
</script>
<style lang=""></style>
