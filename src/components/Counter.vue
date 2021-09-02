<template>
  <div class="counter">Counter : {{ counter }}</div>
  <button @click="increment(counter)">Increment me !</button>
</template>
<script>
export default {
  name: "Counter",
  methods: {
    increment() {
      this.counter += 1;
    },
  },
  data() {
    return { counter: 0 };
  },
};
</script>
<style scoped>
.counter {
  display: flex;
  justify-content: center;
}
</style>
