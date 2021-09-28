<template>
  <div id="faculty">
      <h1>{{Faculty}}</h1>
      <h4>{{major[1]}}</h4>
      <h4>{{major[2]}}</h4>
      <h4>{{major[3]}}</h4>
      <h4>{{major[4]}}</h4>
      <h4>{{major[5]}}</h4>
      <h4>{{major[6]}}</h4>
      <h4>{{major[7]}}</h4>
      
  </div>
</template>

<script>
export default {
  name :  "faculty",
  data() {
    return {
      Faculty : "Faculty Of Science at Sriracha",
      major : ["สาขาวิทยาการคอมพิวเตอร์", "สาขาเทคโนโลยีสารสนเทศ", "สาขาวิทยาศาสตร์สิ่งแวดล้อมและ เทคโนโลยีสิ่งแวดล้อม", "สาขาเคมี", "สาขาคณิตศาสตร์ประยุกต์", "สาขาฟิสิกส์","สาขาวิชาพลศึกษา"],

    };
  }
};
</script>

<style>
    #faculty {
        background-color: indianred;
        color: goldenrod;
    }
</style>