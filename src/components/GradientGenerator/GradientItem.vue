<template>
  <div class="gradient-item">
    <div title="close" class="close-button" @click="deleteGradient()"></div>
    <div class="gradient-preview" v-bind:style="gradientModel.gradient"></div>
    <p class="gradient-title">Gradient {{gradientIndex + 1}}</p>
    <div class="css-title">CSS</div>
    <div class="css-property">{{gradientModel.gradient}}</div>
  </div>
</template>

<script>
export default {
  props: {
    gradientModel: {
      type: Object,
      default: () => {}
    },
    gradientIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    deleteGradient() {
      this.$store.dispatch('deleteGradient', this.gradientModel.id)
    }
  }
};
</script>

<style focused>
.gradient-item {
  position: relative;
  border-radius: 15px;
  -webkit-box-shadow: 0px 8px 13px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 8px 13px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 8px 13px 0px rgba(0, 0, 0, 0.3);
  min-height: 400px;
  width: 420px;
  padding: 40px;
  margin: 50px;
}

.gradient-item .gradient-preview {
  width: 100%;
  height: 150px;
}

.gradient-title {
  font-size: 24px;
}

.css-title,
.css-property {
  background-color: black;
  text-align: start;
  color: white;
  padding: 7px;
}

.css-title {
  font-weight: 700;
  width: min-content;
  border-radius: 10px 10px 0 0;
}

.css-property {
  border-radius: 0px 10px 10px 10px;
}

.close-button {
  position: absolute;
  right: 25px;
  width: 20px;
  height: 20px;
  top: 25px;
  cursor: pointer;
}

.close-button:before,
.close-button:after {
  position: absolute;
  content: "";
  height: 20px;
  left: 12px;
  width: 3px;
  background-color: #333;
}
.close-button:before {
  transform: rotate(45deg);
}
.close-button:after {
  transform: rotate(-45deg);
}
</style>