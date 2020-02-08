<template>
  <div class="dialog">
    <new-group v-if="isNewGroupDialogOpened" />
    <new-gradient v-if="isNewGradientDialogOpened" />
  </div>
</template>

<script>
import NewGradient from "./Dialogs/NewGradient";
import NewGroup from "./Dialogs/NewGroup";
import { mapGetters } from "vuex";
export default {
  components: {
    newGradient: NewGradient,
    newGroup: NewGroup
  },
  computed: {
    ...mapGetters(["isNewGroupDialogOpened", "isNewGradientDialogOpened"])
  }
};
</script>

<style>
.dialog {

}
</style>