<template>
  <div class='container mx-auto p-4'>
    <button @click='refreshOrders' class='bg-green-500 text-white p-2 mb-4'>{{$t('actions.refresh')}}</button>
    <OrdersTable />
  </div>
</template>
<script>
import OrdersTable from '../components/OrdersTable.vue';
import { useOrdersStore } from '../stores/orders';
export default {
  components: { OrdersTable },
  methods: {
    refreshOrders() { useOrdersStore().refreshOrders(); }
  }
};
</script>
