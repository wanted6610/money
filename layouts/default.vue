<template>
  <div class="main">
    <div class="portrait">
      <Nuxt />
      <Footer />
    </div>
    <LandscapeBlocker />
  </div>
</template>

<script>
import Footer from "@/components/common/BaseFooter"
import LandscapeBlocker from "~/components/common/LandscapeBlocker";

export default {
  name: "default",
  components: {
    LandscapeBlocker,
    Footer,
  }
}
</script>

<style scoped lang="scss">

.portrait {
  @media screen and (orientation: landscape) {
    display: none;
  }
}

</style>
