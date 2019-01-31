<template>
  <Page class="Page" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <Button text="To Home" @tap="$navigateTo(VHome)"/>
  </Page>
</template>

<script>
import VHome from "./VHome";

export default {
  name: "VTest",
  data() {
    return {
      VHome: VHome
    };
  }
};
</script>

<style>
</style>
