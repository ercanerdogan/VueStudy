<template>
  <div>
    <div v-html="foo"></div>
    <div>{{ count }}</div>
    <p>
      <button 
        v-if="canIncrease"
        @click="Increase"
      >increase</button>
    </p>

    <p>
      <input v-model="count" type="text" />
    </p>

    <p>
      <button v-if="canDecrease" @click="Decrease">Decrase</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      count: 99,
      foo: "<h1> my first vue project </h1>",
      canIncrease : true,
      canDecrease : true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.foo = "<h2> my first vue project</h2>";
    }, 3000);
  },

  methods :{
    Increase() {
      this.count++;
    },

    Decrease(){
      this.count--;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
