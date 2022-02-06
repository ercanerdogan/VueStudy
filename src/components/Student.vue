<template>
  <div class="student">
    <div>
      {{ data.name }}
    </div>
    <div>
      {{ data.score }}
    </div>
    <button @click="addPoint">Add 10 Point</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  props: {
    data: Object,
  },
  mounted() {
    console.log("in student component data : " + this.data);

    setTimeout(() => {
      this.$emit("foo", this.data);
    }, 5000);
  },
  methods: {
    addPoint() {
      var newScore=this.data.score + 10 <=100 ? this.data.score + 10 : 100;

      this.$emit("foo", this.data.id, newScore);
    },
  },
};
</script>

<style scoped>
.student{
    margin-top: 10px;
    display: flex;
    justify-content: space-evenly;
}
</style>
