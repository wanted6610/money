<template>
  <div class="main">
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/common/BaseFooter"

export default {
  name: "default",
  components: {
    Footer,
  }
}
</script>

<style scoped lang="scss">

</style>
