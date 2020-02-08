<template>
  <div class="groups">
    <h1>Groups</h1>
    <ul class="groups-list">
      <li
        class="groups-list-item"
        v-for="(group, index) in gradientGroups"
        :key="index"
        
        :class="$store.getters.currentGroupId === group.id ? 'current' : ''"
      >
        <div @click="chooseGroup(group.id)">{{ group.name }}</div>
        <div title="close" class="delete-group" @click="deleteGroup(group.id)"></div>
      </li>
    </ul>
    <button @click="openNewGroupDialog" class="create-group-button">Add new group</button>
  </div>
</template>

<script>
export default {
  props: {
    gradientGroups: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    openNewGroupDialog() {
      this.$store.dispatch("openNewGroupDialog");
    },
    chooseGroup(id) {
      this.$store.dispatch("chooseGroup", id);
    },
    deleteGroup(id) {
      this.$store.dispatch("deleteGroup", id);
    }
  }
};
</script>

<style>
.groups {
  border-right: 3px solid black;
  min-width: 300px;
}

.groups h1 {
  font-weight: 400;
  font-size: 32px;
  text-align: center;
  margin: 40px;
}

.groups-list {
  padding: 0;
}

.groups-list-item {
  position: relative;
  white-space: nowrap;
  list-style-type: none;
  font-size: 24px;
  cursor: pointer;
  width: min-content;
  margin: 5px auto;
}

.groups-list-item div {
  padding: 5px 10px;
}

.groups-list-item:hover,
.groups-list-item.current {
  background-color: black;
  border-radius: 5px;
  color: white;
}

.create-group-button {
  background-color: transparent;
  color: black;
  text-decoration: underline;
  width: 100%;
  display: block;
}

.delete-group {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 5px;
  right: -40px;
  cursor: pointer;
}

.delete-group:before,
.delete-group:after {
  position: absolute;
  content: "";
  height: 20px;
  left: 12px;
  width: 3px;
  background-color: #333;
}
.delete-group:before {
  transform: rotate(45deg);
}
.delete-group:after {
  transform: rotate(-45deg);
}
</style>