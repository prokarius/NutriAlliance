<template>
  <StackLayout orientation="horizontal" class="v-top-nav-bar" height="10%">
    <Image src="~/assets/home.png" stretch="aspectFit" @tap="$navigateTo(VHome)"/>
  </StackLayout>
</template>

<script>
import VHome from "./VHome";
export default {
  name: "VTopNavBar",
  data() {
    return {
      VHome: VHome
    };
  }
};
</script>

<style>
.v-top-nav-bar {
  background-color: #8fca27;
}
</style>