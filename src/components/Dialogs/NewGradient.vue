<template>
  <div>
    <div class="modal-background" @click="closeNewGradientDialog"></div>
    <div class="new-gradient-dialog">
      <div title="close" class="close-button" @click="closeNewGradientDialog"></div>
      <h1>New gradient</h1>
      <div class="new-dialog-wrapper">
        <div class="left-column">
          <ol class="colors-list">
            <li class="colors-list-item" v-for="(color, index) in colors" :key="index">
              <span title="Click to delete" @click="deleteColor(index)">color #{{index + 1}}</span>
              <input v-model="colors[index]" />
            </li>
            <button class="new-color-button" @click="addNewColor()">Add new color</button>
          </ol>
        </div>
        <div class="right-column">
          <div class="angle">
            angle
            <input v-model="angle" />
          </div>
          <div class="gradient-preview" v-bind:style="calculateGradient"></div>
          <button @click="addNewGradient()" class="save-gradient-button">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ["#000000", "#000000"],
      angle: 0
    };
  },
  computed: {
    calculateGradient() {
      return `background: linear-gradient(${this.angle}deg, ${this.colors})`;
    }
  },
  methods: {
    closeNewGradientDialog() {
      this.$store.dispatch("closeNewGradientDialog");
    },
    addNewGradient() {
      this.$store.dispatch("addNewGradient", this.calculateGradient);
      this.closeNewGradientDialog();
    },
    addNewColor() {
      this.colors.push("#000000");
    },
    deleteColor(index) {
      this.colors.splice(index, 1);
    }
  }
};
</script>

<style>
.modal-background {
  left: 0;
  top: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 2;
}
.new-gradient-dialog {
  position: fixed;
  width: 500px;
  height: 400px;
  background-color: white;
  z-index: 3;
  top: 25%;
  left: calc(50% - 250px);
  border-radius: 20px;
  padding: 50px;
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

.new-gradient-dialog h1 {
  font-weight: 400;
  font-size: 42px;
  text-align: center;
}

.left-column,
.right-column {
  width: 50%;
}

.left-column {
  margin-right: 20px;
}

.colors-list {
  margin: 0;
  padding: 0;
}

.colors-list-item,
.angle {
  font-size: 18px;
  list-style-type: none;
  margin-bottom: 15px;
}

.colors-list-item input,
.angle input {
  margin-left: 5px;
  width: 100px;
  border: 1px solid black;
  text-align: center;
}

.angle input {
  width: 50px;
}

.new-color-button {
  background-color: transparent;
  color: black;
  text-decoration: underline;
  width: 100%;
  display: block;
  text-align: start;
  padding: 0;
}

.gradient-preview {
  width: 100%;
  height: 100px;
  background-color: white;
  border-radius: 10px;
}

.save-gradient-button {
  display: block;
  margin: 10px auto 0px auto;
  font-size: 24px;
  font-weight: 400;
  width: 100%;
  height: 45px;
  border: 1px solid grey;
  color: white;
  background-color: black;
}

.new-dialog-wrapper {
  display: flex;
}
</style>