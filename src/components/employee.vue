<template>
  <div>
    <p>Employee</p>

    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm"
        >Employee ID</span
      >
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        v-model="info.EmployeeID"
      />
    </div>
    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">firstName</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        v-model="info.firstName"
      />
    </div>
    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">LastName</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        v-model="info.lastName"
      />
    </div>

    <!-- <div>
          <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" v-model="info.gender" value="Male">
          <label class="btn btn-secondary" for="option1">Male</label>

          <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" v-model="info.gender" value="Female">
          <label class="btn btn-secondary" for="option2">Female</label>
      </div> -->

    <div class="form-check mb-3" v-for="(data, index) in gender" :key="index">
      <input
        type="radio"
        class="btn-check"
        name="options"
        :id="index"
        autocomplete="off"
        v-model="info.gender"
        :value="data.value"
      />
      <label class="btn btn-secondary" :for="index">{{ data.label }}</label>
    </div>

    <br />
    <div class="input-group mb-3">
      <span for="timepicker-valid" class="input-group-text" id="inputGroup-sizing-sm">Time In</span>
      <b-form-timepicker id="datepicker-valid" :state="true" v-model="info.timeIn" locale="en"></b-form-timepicker>
    </div>
    <div class="input-group mb-3">
      <span for="timepicker-invalid" class="input-group-text" id="inputGroup-sizing-sm">Time Out</span>
      <b-form-timepicker id="datepicker-invalid" :state="false" v-model="info.timeOut" locale="en"></b-form-timepicker>
    </div>
    <br />
    <div>
      <button type="button" class="btn btn-primary" v-on:click="save">
        Save
      </button>
    </div>

    <!-- <div :hidden="!show">
          <h3>Employee ID : {{ info.EmployeeID }}</h3>
          <h3>First Name : {{ info.firstName }}</h3>
          <h3>Last Name : {{ info.lastName }}</h3>
          <h3>Gender : {{ info.gender }}</h3>
          <h3>Time : {{ info.timeIn }} - {{ info.timeOut }}</h3>
          <h3>Active :
              <span v-if="info.active" v-bind:style="{color : 'green'}">Active</span>
              <span v-else v-bind:style="{color : 'red'}">Non Active</span>
          </h3>
      </div> -->

    <!-- <div :hidden="!show" v-for="(data, index) in employeeInfo" :key="index">
          <span>Employee ID : {{ data.EmployeeID }}</span>
          <span> First Name : {{ data.firstName }}</span>
          <span> Last Name : {{ data.lastName }}</span>
          <span> Gender : {{ data.gender }}</span>
          <span> Time : {{ data.timeIn }} - {{ data.timeOut }}</span>
          <span> Active :
              <span v-if="data.active" v-bind:style="{color : 'green'}">Active</span>
              <span v-else v-bind:style="{color : 'red'}">Non Active</span>
          </span>
      </div> -->

    <div :hidden="!show">
      <b-table striped hover :items="employeeInfo"></b-table>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "employee",
  data() {
    return {
      info: {
        EmployeeID: null,
        firstName: null,
        lastName: null,
        gender: null,
        timeIn: null,
        timeOut: null,
        active: false,
      },
      show: false,
      gender: [
        {
          label: "Male",
          value: "M",
        },
        {
          label: "Female",
          value: "F",
        },
      ],
      employeeInfo: [],
    };
  },
  methods: {
    save() {
      this.employeeInfo.push(this.info);
      this.checkActiveTime();
      this.show = true;
      this.info = {
        EmployeeID: null,
        firstName: null,
        lastName: null,
        gender: null,
        timeIn: null,
        timeOut: null,
      };
    },
    checkActiveTime() {
      const today = new Date();
      const time = moment(today, "HH:mm");
      if (
        moment(this.info.timeIn, "HH:mm").isBefore(time) &&
        moment(time).isBefore(moment(this.info.timeOut, "HH:mm"))
      ) {
        this.info.active = true;
      } else {
        this.info.active = false;
      }
    },
  },
};
</script>

<style></style>
