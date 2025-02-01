<template>
  <div class="orders-view">
    <div class="wrap">
      <div class="refresh-button-container">
        <DxButton
            @click="refreshOrders"
            class="refresh-button"
        >
          {{ $t('actions.refresh') }}
        </DxButton>
      </div>

      <div class="language-selector-wrapper">
        <DxButton
            @click="logout"
            class="logout-button"
        >
          {{ $t('actions.logout') }}
        </DxButton>
        <LanguageSelector/>
      </div>
    </div>

    <div class="table">
      <OrdersTable/>
    </div>
  </div>
</template>
<script>

import OrdersTable from '../components/OrdersTable.vue';
import {useOrdersStore} from '../stores/orders';
import {DxButton} from "devextreme-vue/button.js";
import LanguageSelector from "@/components/LanguageSelector.vue";
import {useAuthStore} from "@/stores/auth.js";

export default {
  name: "OrdersView",
  components: {LanguageSelector, DxButton, OrdersTable},

  methods: {

    refreshOrders() {
      useOrdersStore().refreshOrders();
    },
    logout() {
      useAuthStore().logout();
      this.$router.push('/');
    }
  }
};
</script>
