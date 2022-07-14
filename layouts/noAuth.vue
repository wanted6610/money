<template>
  <div class="main">
    <p>noauth</p>
    <Nuxt />
    <Footer  class="footer"/>
  </div>
</template>

<script>
import Footer from '@/components/common/BaseFooter';

export default {
  name: "noAuth",
  components: {
    Footer,
  }
}
</script>

<style scoped lang="scss">
.main {
  position: relative;
  min-height: 100vh;
  background: -webkit-linear-gradient(90deg, #00a49b,#026773,#092c4e);
  background: linear-gradient(90deg, #00a49b,#026773,#092c4e);
}
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
