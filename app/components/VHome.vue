<template>
  <Page class="Page" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <StackLayout orientation="vertical">
      <VTopNavBar/>
      <Button text="To Test!" @tap="$navigateTo(VTest)"/>
    </StackLayout>
  </Page>
</template>

<script>
import VTest from "./VTest";
import VTopNavBar from "./VTopNavBar";

export default {
  name: "VHome",
  components: { VTopNavBar },
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
