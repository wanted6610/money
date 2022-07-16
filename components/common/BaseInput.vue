<template>
  <ValidationProvider name="E-mail" :rules="rules" v-slot="{ errors }">
    <div class="input" :class="{'exeption':errors.length}">
      <input :placeholder="placeholder" class="input__input" :class="{'exeption':errors.length}" v-model="localValue" @input="changeInput" type="text">
      <svg-icon class="input__icon" v-if="icon !== ''" :name="icon" width="25" height="25" />
    </div>
    <span v-if="errors.length" class="input__error">{{ errors[0] }}</span>
  </ValidationProvider>
</template>

<script>
export default {
  name: "BaseInput",
  data() {
    return {
      localValue: '',
    }
  },
  props: {
    inputValue: {
      type: String,
      default: '',
    },
    rules: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    }
  },
  watch: {
    inputValue() {
      this.localValue = this.inputValue;
    }
  },
  methods: {
    changeInput(e) {
      this.$emit('update:inputValue', e.target.value)
    }
  },
}
</script>

<style scoped lang="scss">
.input {
  display: flex;
  flex-direction: column;
  position: relative;
  &.exeption {margin-bottom: 10px;}
  &__error {
    color: $error;
    font-weight: 500;
  }
  &__input {
    font-size: 16px;
    min-height: 40px;
    padding: 0 10px 0 40px;
    border-radius: 6px;
    border: 1px solid #B5B5B5;
    transition: 0.3s border-color ease;
    &:focus {
      border-color: $green;
      outline: none;
    }
    &.exeption {
      border-color: $error;
    }
  }
  &__icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
