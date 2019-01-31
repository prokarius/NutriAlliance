<template>
  <Page class="Page" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <StackLayout orientation="vertical">
      <VTopNavBar/>
      <Button text="To Home" @tap="$navigateTo(VHome)"/>
    </StackLayout>
  </Page>
</template>

<script>
import VHome from "./VHome";
import VTopNavBar from "./VTopNavBar";

export default {
  name: "VTest",
  components: { VTopNavBar },
  data() {
    return {
      VHome: VHome
    };
  }
};
</script>

<style>
</style>
