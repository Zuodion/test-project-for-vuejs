<template>
  <div class="gradients">
    <h1>Gradients</h1>
    <ol class="gradients-list">
      <gradient-item
        v-for="(gradientModel, index) in gradients"
        :key="index"
        :gradientModel="gradientModel"
        :gradientIndex="index"
        class="gradients-list-item"
      ></gradient-item>
      <button class="new-gradient-button" @click="openNewGradientDialog">+</button>
    </ol>
  </div>
</template>

<script>
import GradientItem from "./GradientItem";
export default {
  components: {
    gradientItem: GradientItem
  },
  props: {
    gradients: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    openNewGradientDialog() {
      this.$store.dispatch("openNewGradientDialog");
    }
  }
};
</script>

<style>
.gradients {
  width: 100%;
  text-align: center;
}
.gradients h1 {
  font-weight: 400;
  font-size: 42px;
}

.gradients-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
}

.new-gradient-button {
  width: 50px;
  height: 50px;
  margin-top: 400px;
  margin-left: 50px;
  background-color: white;
  border: 1px solid rgba(128, 128, 128, 0);
  font-size: 30px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 8px 13px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 8px 13px 0px rgba(0,0,0,0.3);
  box-shadow: 0px 8px 13px 0px rgba(0,0,0,0.3);
}
</style>