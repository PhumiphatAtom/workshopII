<template>
  <div>
    <form @submit="checkForm">

        <p v-if="conditions.length">
        <b>Please Input your information</b>
        <ul>
            <li v-for="error in conditions" :key="error" style="color: red">  {{ error }}</li>
        </ul>
        </p>
      <input
        type="text"
        v-model="id"
        placeholder="Student Id"
        style="margin-right:10px"
      />
      <input type="Checkbox" v-model="gender" value="Male" /> Male
      <input type="Checkbox" v-model="gender" value="Female" /> Female

      <input
        type="text"
        v-model="fname"
        placeholder="First Name"
        style="margin-right:10px"
        
      />
      <input
        type="text"
        v-model="lname"
        placeholder="Last Name"
        style="margin-right:10px"
        
      />
      <div>
        <textarea
          v-model="introduce"
          placeholder="introduce yourself"
          style="margin-top: 10px;"
        ></textarea>
      </div>

      <input type="radio" id="one" value="one" v-model="picked" /> จบแล้ว
      <input type="radio" id="two" value="two" v-model="picked" /> ยังไม่จบ

      <select v-model="selected">
        <option value="">Select</option>
        <option
          v-for="option in options"
          :key="option"
          v-bind:value="option.value"
          >{{ option.text }}</option
        >
      </select>
      <br>
      <br>
      <input type="submit" value="submit" style="margin-right: 30px"/>
      <router-link to="/page2" tag="button">Member</router-link>
    </form>
  </div>
</template>

<script>
import Router from "vue-router"

const router = new Router({
    mode: "history",
})

export default {
  name: "Student",
  data() {
    return {
      id: null,
      gender: [],
      fname: null,
      lname: null,
      introduce: null,
      picked: null,
      selected: "",
      options: [
        { text: "ชั้นปีที่ 1", value: "1" },
        { text: "ชั้นปีที่ 2", value: "2" },
        { text: "ชั้นปีที่ 3", value: "3" },
        { text: "ชั้นปีที่ 4", value: "4" },
      ],
      conditions: []
    }
  },
  methods: {
      checkForm(e) {
          if(this.id != null) {
              router.push(`/page1/${this.id}`)
              router.go()
          }
          else if (this.fname != null){
              router.push(`/page1/${this.fname}`)
              router.go()
          }
          else if (this.lname != null){
              router.push(`/page1/${this.lname}`)
              router.go()
          }
          // else if (this.options != null){
          //     router.push(`/page1/${this.options}`)
          //     router.go()
          // }
          else {
            this.conditions.push("*Please Input your message");
          }
          // if(!this.fname) {
          //     // this.conditions.push("*Please Input your Student Id");
          // }
          // else {
          //     router.push(`/page1/${this.fname}`)
          //     // router.push(`/page1/${this.fname}`)
          //     // router.push(`/page1/${this.lname}`)
          //     router.go()
          // }
          // if(!this.lname) {
          //     // this.conditions.push("*Please Input your Student Id");
          // }
          // else {
          //     router.push(`/page1/${this.lname}`)
          //     // router.push(`/page1/${this.fname}`)
          //     // router.push(`/page1/${this.lname}`)
          //     router.go()
          // }

          e.preventDefault();
          
      }
  }
};
</script>

<style>

</style>
