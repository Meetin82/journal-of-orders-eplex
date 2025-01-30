<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="form-title">{{ $t('login.title') }}</h2>
      <div class="form-group">
        <label class="label">{{ $t('login.username') }}</label>
        <DxTextBox
            v-model="username"
            :placeholder="$t('login.enter_username')"
            class="input-field"
        />
      </div>
      <div class="form-group">
        <label class="label">{{ $t('login.password') }}</label>
        <DxTextBox
            v-model="password"
            type="password"
            :placeholder="$t('login.enter_password')"
            class="input-field"
        />
      </div>
      <DxButton @click="login" class="button">{{ $t('login.submit') }}</DxButton>
    </div>
  </div>
</template>

<script>
import {DxTextBox} from 'devextreme-vue/text-box';
import {DxButton} from 'devextreme-vue/button';
import {useAuthStore} from '../stores/auth';

export default {
  components: {
    DxTextBox,
    DxButton,
  },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      if (!this.username || !this.password) {
        alert('Both username and password are required.');
        return;
      }

      try {
        await useAuthStore().login(this.username, this.password);
        this.$router.push('/orders');
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed, please try again.');
      }
    }
  }
};
</script>
