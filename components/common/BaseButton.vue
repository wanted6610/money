<template>
  <button
    @click="buttonClick"
    :disabled="disabled"
    :class="{disabled: disabled, fill: styleType === 'fill', stroke: styleType === 'stroke', 'none-opacity':noneOpacity}"
    class="button"
    :type="type"
    >{{title}}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    type: {
      type: String,
      default: 'button',
    },
    title: {
      type: String,
      default: 'Кнопка'
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    styleType: {
      type: String,
      default: 'fill'
    },
    noneOpacity: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    buttonClick() {
      if (this.disabled) return;
      this.$emit('btnClick')
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  @include default-block;
  min-height: 40px;
  width: 100%;
  &.disabled {
    opacity: 0.4;
  }
  &.fill {
    background-color: $darkGreen;
    color: $white;
  }
  &.stroke {
    border: 2px solid $darkGreen;
    color: $darkGreen;
    background-color: inherit;
  }
  &.none-opacity {
    opacity: 1;
  }
}
</style>
