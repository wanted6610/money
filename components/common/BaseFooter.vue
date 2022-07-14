<template>
  <footer class="footer">
    <p :class="color === 'black' ? 'black' : 'white'" class="footer__copy">Money - 2022</p>
  </footer>
</template>

<script>
export default {
  name: "BaseFooter",
  props: {
    color: {
      type: String,
      default: 'white',
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  &__copy {
    font-size: $small;
    &.white {color: $white;}
  }
}
</style>
