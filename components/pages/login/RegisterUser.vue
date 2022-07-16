<template>
  <div class="login">
    <div class="login-buttons">
      <BaseButton
        @btnClick="changeType"
        :styleType="'stroke'"
        title="Авторизация"
      />
      <BaseButton
        :disabled="true"
        :noneOpacity="true"
        :styleType="'fill'"
        title="Регистрация"
      />
    </div>
    <ValidationObserver v-slot="{ invalid }" class="observer">
      <form @submit.prevent class="form">
        <div class="login-data">
          <div class="login__input">
            <BaseInput
              :inputValue.sync="mail"
              :placeholder="'Введите ваш E-mail'"
              rules="email|required"
              :icon="'form_mail'"
            />
          </div>
          <div class="login__input">
            <BaseInput
              :inputValue.sync="password"
              :placeholder="'Введите ваш пароль'"
              rules="required"
              :icon="'form_key'"
            />
          </div>
        </div>
        <div class="login-submit">
          <BaseButton :disabled="invalid" title="Создать учетную запись" />
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: "loginUser",
  data() {
    return {
      mail: '',
      password: '',
    }
  },
  props: {
    isAuth: {
      type: Boolean,
    }
  },
  methods: {
    changeType() {
      this.$emit('changeType', true);
    }
  }
}
</script>

<style scoped lang="scss">
.observer {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.login {
  @include default-block;
  background-color: $white;
  position: absolute;
  left: 20px;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  padding: 15px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  &-buttons {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  &-data {
    flex: 1;
  }
  &-submit {
    margin-top: 20px;
  }
  &__input {
    margin-top: 15px;
    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
