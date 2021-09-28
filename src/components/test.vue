<template>
  <div id="test" :class=color>
      <div v-bind:style="{'background-color': colorBg}">

      v-model

      <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">user</span>
          <input type="text" class="form-control" aria-label="Sizing example input" v-model="userName">
      </div>

      <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">Password</span>
          <input type="text" class="form-control" aria-label="Sizing example input" v-model="userPass">
      </div>

      <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">Background Color</span>
          <input type="text" class="form-control" aria-label="Sizing example input" v-model="colorBg">
      </div>

      


      <div>
        show <br>
        user: {{userName}} <br>
        password: {{userPass}} <br>
        BackgroundColor : {{colorBg}}
      </div>

    <div class="card">
        <div class="class-header">
            ชื่อ : {{myInfo.myName}}
            <button type="button" class="btn btn-secondary" @click="myShowInfo">{{labelButton}}</button>
        </div>
        <div class="class-body" :hidden="!hideShow">
            myNickName: {{myInfo.myNickname}}
            <br>
            myStudentID: {{myInfo.myStudentID}}
        </div>
    </div>

    <p> HelloWorld </p>
    <p> {{show}}</p>
    <img v-bind:src=url
    width="50%" height="50%"/>
    <img :src=url
    width="50%" height="50%"/>
    fname :{{fName}}
    <div>
        <span/>  celsius : {{celsius}}
        <span/>  fahrenheit : {{fahrenheit}}
    </div>
    <div>
        <button class="btn btn-primary" type="button" v-on:click='alertMsg($event)'>Click</button>
        <button class="btn btn-primary" type="button" @dblclick='alertMsgDB'>DoubleClick</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    name : "test",
    data() {
        return {
            fName: "Phumiphat",
            imgName: "cat",
            url: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d"
            ,color: "tmp2",
            celsius : 30,
            dataPumu: ["หัว","ก้อย"],
            myInfo: {
                myName: "Phumiphat",
                myNickname: "Atom",
                myStudentID: 6130203489
            },
            hideShow: true,

            userName: null,
            userPass: null,
            colorBg: null
        }
    },
    computed:{
        fahrenheit(){
            let result = this.celsius *1.8 +32;
            return result;
        },
        random(){
            return Math.random() > 0.5 ? 1 : 0;
        },
        show(){
            return this.dataPumu[this.random];
        },
        labelButton(){
            return this.hideShow ? "Hide" : "Show";
        }
    },
    methods:{
        alertMsg(p1, p2, e){
            alert(`You ${e.type} the button at ${e.clientX}, ${e.clientY}`);
            alert(`parameter ${p1}, ${p2}`)
        },
        alertMsgDB(){
            alert('Hi, ' + this.fName + 'Double Click')
            console.log("DoubleClick Success")
        },
        myShowInfo(){
            this.hideShow = !this.hideShow;
        }
    }
};
</script>

<style>
    .tmp2 {
        background-color: rgb(156, 156, 156);
    }
</style>