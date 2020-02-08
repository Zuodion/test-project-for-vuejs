<template>
  <div>
    <div class="modal-background" @click="closeNewGroupDialog"></div>
    <div class="new-group-dialog">
      <div title="close" class="close-button" @click="closeNewGroupDialog"></div>
      <h1>New group</h1>
      <form @submit.prevent="addNewGroup">
        <input placeholder="New group name" v-model="newGroup" required />
        <button class="save-group-button">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newGroup: ""
    };
  },
  methods: {
    closeNewGroupDialog() {
      this.$store.dispatch("closeNewGroupDialog");
    },
    addNewGroup() {
      this.$store.dispatch("addNewGroup", this.newGroup);
      this.closeNewGroupDialog();
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
.new-group-dialog {
  text-align: center;
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

.new-group-dialog h1 {
  font-weight: 400;
  font-size: 48px;
}
.new-group-dialog input {
  text-align: center;
  width: 80%;
  margin: 30px;
  border: 1px solid black;
  line-height: 24px;
}

.save-group-button {
  display: block;
  margin: 10px auto 0px auto;
  font-size: 24px;
  font-weight: 400;
  height: 50px;
  border: 1px solid grey;
  width: 250px;
  color: white;
  background-color: black;
}
</style>