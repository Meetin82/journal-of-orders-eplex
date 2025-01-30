<template>
  <DxDataGrid
      :data-source="orders"
      :columns="columns"
      key-expr="id"
      :grouping="{ autoExpandAll: false }"
      :group-panel="{ visible: true }"
  >
    <DxColumn data-field="ok" :caption="$t('orders_table.source')" group-index="0" />
    <DxColumn data-field="id" :caption="$t('orders_table.order_id')" />
    <DxColumn data-field="cd" :caption="$t('orders_table.order_date')" data-type="date" />
    <DxColumn data-field="ar" :caption="$t('orders_table.article')" />
    <DxColumn data-field="br" :caption="$t('orders_table.brand')" />
    <DxColumn data-field="na" :caption="$t('orders_table.product_name')" />
    <DxColumn data-field="dQ" :caption="$t('orders_table.quantity')" data-type="number" />
    <DxColumn data-field="pr" :caption="$t('orders_table.price')" data-type="number" format="currency" />
    <DxColumn data-field="sum" :caption="$t('orders_table.total')" data-type="number" format="currency" />
    <DxColumn data-field="ss" :caption="$t('orders_table.status')" />
    <DxColumn data-field="sQ" :caption="$t('orders_table.received')" />
    <DxColumn data-field="rQ" :caption="$t('orders_table.rejected')" />
    <DxColumn data-field="oQ" :caption="$t('orders_table.in_delivery')" />
    <DxColumn data-field="dd" :caption="$t('orders_table.expected_delivery')" data-type="date" />
    <DxColumn data-field="ddg" :caption="$t('orders_table.guaranteed_delivery')" data-type="date" />
    <DxColumn data-field="com" :caption="$t('orders_table.comment')" />
    <DxColumn data-field="wh" :caption="$t('orders_table.supplier')" />
    <DxColumn data-field="ok" :caption="$t('orders_table.user')" />
  </DxDataGrid>
</template>

<script>
import { DxDataGrid, DxColumn } from "devextreme-vue/data-grid";
import { useOrdersStore } from "../stores/orders";

export default {
  components: { DxDataGrid, DxColumn },
  computed: {
    orders() {
      return useOrdersStore().orders.map(order => ({
        ...order,
        cd: order.cd ? new Date(order.cd) : null,
        dd: order.dd ? new Date(order.dd) : null,
        ddg: order.ddg ? new Date(order.ddg) : null,
      }));
    },
  },
  mounted() {
    useOrdersStore().fetchOrders();
  }
};
</script>
