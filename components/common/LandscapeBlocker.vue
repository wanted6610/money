<template>
  <div class="blocker">
    <div class="blocker-content">
      <svg-icon class="blocker-content__icon" name="phone-rotate" width="50" height="50" />
      <p class="blocker-content__text">Для продолжения переверните устройство в положение "Портрет"</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandscapeBlocker"
}
</script>

<style scoped lang="scss">
  .blocker {
    display: none;
    @media screen and (orientation: landscape) {
      display: block;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 1000;
      background: -webkit-linear-gradient(90deg, #00a49b,#026773,#092c4e);
      background: linear-gradient(90deg, #00a49b,#026773,#092c4e);
    }
    &-content {
      position: absolute;
      left: 20px;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      &__text {
        margin-top: 20px;
        color: $white;
        font-size: 18px;
        text-align: center;
      }
      &__icon {
        animation: phone 1.5s ease-in-out infinite;
      }
    }
  }

@keyframes phone {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-90deg);
  }
}
</style>
