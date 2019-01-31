<template>
  <Page class="Page" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <Button text="To Test!" @tap="$navigateTo(VTest)"/>
  </Page>
</template>

<script>
import VTest from "./VTest";

export default {
  name: "VHome",
  data() {
    return {
      VTest: VTest
    };
  }
};
</script>

<style scoped>
.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.description-label {
  margin-bottom: 15;
}
</style>
