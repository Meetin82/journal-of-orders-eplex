<template>
  <div class="login-container">
    <div class="language-selector-wrapper">
      <LanguageSelector/>
    </div>

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
              <DxRequiredRule :message="$t('login.username_required')"/>
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
              <DxRequiredRule :message="$t('login.password_required')"/>
            </DxValidator>
          </DxTextBox>
        </div>
      </DxValidationGroup>

      <DxButton
          @click="login"
          :elementAttr="{ class: 'button' }"
          :disabled="isSubmitDisabled"
      >
        {{ $t('login.submit') }}
      </DxButton>
    </div>
  </div>
</template>

<script>

import {DxTextBox} from 'devextreme-vue/text-box';
import {DxButton} from 'devextreme-vue/button';
import {DxValidator, DxRequiredRule} from 'devextreme-vue/validator';
import {DxValidationGroup} from 'devextreme-vue/validation-group';
import {useAuthStore} from '../stores/auth';
import LanguageSelector from "@/components/LanguageSelector.vue";

export default {
  name: "LoginForm",
  components: {
    LanguageSelector,
    DxTextBox,
    DxButton,
    DxValidator,
    DxRequiredRule,
    DxValidationGroup
  },

  setup() {
    const authStore = useAuthStore();

    return {
      authStore
    }
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
      this.$refs.validationGroupRef.instance.validate();
    },

    async validateForm() {
      const validationResult = await this.$refs.validationGroupRef.instance.validate();
      return validationResult.isValid;
    },

    async handleLoginError(error) {
      this.username = '';
      this.password = '';

      if (error.response && error.response.status === 417 && error.response.data && error.response.data.err) {
        this.$toast.error(error.response.data.err);
      } else {
        this.$toast.error(this.$t('login.failed'));
      }
    },

    async login() {
      const isValid = await this.validateForm();

      if (isValid) {
        try {
          await this.authStore.login(this.username, this.password);
          this.$router.push('/orders');
          this.$toast.success(this.$t('login.success'));
        } catch (error) {
          await this.handleLoginError(error);
        }
      } else {
        this.$toast.warning(this.$t('login.required_fields'));
      }
    }
  }
};
</script>
