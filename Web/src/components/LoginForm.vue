<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="form-title">{{ $t('login.title') }}</h2>

      <DxValidationGroup ref="validationGroupRef" name="login-group">
        <div class="input-group">
          <DxTextBox
              v-model="username"
              :placeholder="$t('login.username')"
              class="input-field"
              name="username"
              value-change-event="input"
              @value-changed="validateField('username')"
          >
            <DxValidator>
              <DxRequiredRule :message="$t('login.username_required')" />
            </DxValidator>
          </DxTextBox>
        </div>
        <div class="input-group">
          <DxTextBox
              v-model="password"
              :placeholder="$t('login.password')"
              mode="password"
              class="input-field"
              name="password"
              value-change-event="input"
              @value-changed="validateField('password')"
          >
            <DxValidator>
              <DxRequiredRule :message="$t('login.password_required')" />
            </DxValidator>
          </DxTextBox>
        </div>
      </DxValidationGroup>

      <DxButton
          @click="login"
          class="button"
          :disabled="isSubmitDisabled"
      >
        {{ $t('login.submit') }}
      </DxButton>
    </div>
  </div>
</template>

<script>
import { DxTextBox } from 'devextreme-vue/text-box';
import { DxButton } from 'devextreme-vue/button';
import { DxValidator, DxRequiredRule } from 'devextreme-vue/validator';
import { DxValidationGroup } from 'devextreme-vue/validation-group';
import { useAuthStore } from '../stores/auth';

export default {
  components: {
    DxTextBox,
    DxButton,
    DxValidator,
    DxRequiredRule,
    DxValidationGroup
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    isSubmitDisabled() {
      return !(this.username && this.password);
    }
  },
  methods: {
    validateField(field) {
      // Валидировать поле при изменении
      this.$refs.validationGroupRef.instance.validate();
    },
    async login() {
      // Проверка валидности всей формы
      const validationResult = await this.$refs.validationGroupRef.instance.validate();

      if (validationResult.isValid) {
        try {
          await useAuthStore().login(this.username, this.password);
          this.$router.push('/orders');
          this.$toast.success(this.$t('login.success'));
        } catch (error) {
          console.error('Login failed:', error);
          this.username = '';
          this.password = '';
          this.$toast.error(this.$t('login.failed'));
        }
      } else {
        this.$toast.warning(this.$t('login.required_fields'));
      }
    }
  }
};
</script>
