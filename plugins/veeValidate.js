import Vue from 'vue';
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
import { required, email } from "vee-validate/dist/rules.umd";

extend('email', {
  ...email,
  message: 'Введите допустимый E-mail'
});

extend('required', {
  ...required,
  message: 'Поле обязательно для заполнения'
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

