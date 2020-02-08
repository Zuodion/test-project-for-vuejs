<template>
  <div class="gradient-generator">
    <groups :gradientGroups="getUserGradientGroups" />
    <gradients v-if="getUserGradientGroups.length > 0 && currentGroupId !== -1" :gradients="getGradientsInCurrentGroup" />
  </div>
</template>

<script>
import Groups from './GradientGenerator/Groups';
import Gradients from './GradientGenerator/Gradients';
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getUserGradientGroups", "getGradientsInCurrentGroup", "currentGroupId"])
  },
  components: {
    groups: Groups,
    gradients: Gradients
  }
}
</script>

<style>

.gradient-generator {
  min-height: 100%;
  display: flex;
}

</style>