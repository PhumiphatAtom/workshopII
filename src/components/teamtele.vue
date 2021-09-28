<template>
  <div class="bg">
    <b-container fluid class="p-4">
      <b-img
        thumbnail
        fluid
        src="https://ca-times.brightspotcdn.com/dims4/default/7aca3f7/2147483647/strip/true/crop/1400x787+0+0/resize/1400x787!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F31%2Fc6%2F2a5734daedec01b22eec03ffdbb9%2Fla-1464985596-snap-photo"
        sizes="sm"
      ></b-img>
    </b-container>
    <h3>Team : Teletubbies</h3>

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

    <b-row>
      <b-col>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm"
            >firstName</span
          >
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            v-model="info.firstName"
          />
        </div>
      </b-col>
      <b-col>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm"
            >LastName</span
          >
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            v-model="info.lastName"
          />
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm"
            >NickName</span
          >
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            v-model="info.nickName"
          />
        </div>
      </b-col>
      <b-col>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">Age</span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            v-model="info.age"
          />
        </div>
      </b-col>
    </b-row>

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
    <b-row>
      <b-col>
        <div class="input-group mb-3">
          <span
            for="timepicker-valid"
            class="input-group-text"
            id="inputGroup-sizing-sm"
            >Time In</span
          >
          <b-form-timepicker
            id="datepicker-valid"
            :state="true"
            v-model="info.timeIn"
            locale="en"
          ></b-form-timepicker>
        </div>
      </b-col>
      <b-col>
        <div class="input-group mb-3">
          <span
            for="timepicker-invalid"
            class="input-group-text"
            id="inputGroup-sizing-sm"
            >Time Out</span
          >
          <b-form-timepicker
            id="datepicker-invalid"
            :state="false"
            v-model="info.timeOut"
            locale="en"
          ></b-form-timepicker>
        </div>
      </b-col>
    </b-row>
    <br />
    <div id="buttonSave">
      <b-button pill variant="success" type="button" v-on:click="save">
        Save
      </b-button>
    </div>
    <br />

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
        nickName: null,
        age: null,
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
        nickName: null,
        age: null,
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

<style>
button.btn.btn-success.rounded-pill {
  width: 256px;
}
img.img-thumbnail.img-fluid {
  height: 40%;
  width: 40%;
}
h3 {
  font-weight: 100;
}
html {
  background-color: rgb(32, 33, 41);
}
.bg {
  background-color: rgb(209, 209, 209);
}
div.p-4.container-fluid {
  background-color: rgb(32, 33, 41);
}
</style>
