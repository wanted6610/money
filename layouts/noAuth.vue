<template>
  <div class="main">
    <div class="portrait">
      <transition name="fade">
        <MountedLoader v-if="!loaded"/>
      </transition>
      <Nuxt />
      <Footer  class="footer"/>
    </div>
    <landscape-blocker />
  </div>
</template>

<script>
import Footer from '@/components/common/BaseFooter';
import LandscapeBlocker from "~/components/common/LandscapeBlocker";

export default {
  name: "noAuth",
  components: {
    LandscapeBlocker,
    Footer,
  },
  data() {
    return {
      loaded: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 1000)
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
  bottom: 20px;
  left: 0;
  width: 100%;
}

.portrait {
  @media screen and (orientation: landscape) {
    display: none;
  }
}

@supports (-webkit-touch-callout: none) {
  .main {
    min-height: -webkit-fill-available;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
