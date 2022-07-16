<template>
  <div class="loader">

  </div>
</template>

<script>
export default {
  name: "MounedLoader"
}
</script>

<style scoped lang="scss">
  .loader{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: $white;
    z-index: 100;
  }
</style>
