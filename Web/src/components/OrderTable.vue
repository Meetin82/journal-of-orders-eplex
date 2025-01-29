<template>
  <div>
    <DxDataGrid
        :data-source="orders"
        :columns="columns"
        :show-borders="true"
    />
  </div>
</template>

<script>
import { useOrdersStore } from "@/stores/orders";
import { DxDataGrid } from "devextreme-vue/data-grid";
export default {
  name: "OrderTable",
  components: { DxDataGrid },
  data() {
    return {
      columns: [
        {dataField: "id", caption: "Номер заказа"},
        {dataField: "cd", caption: "Дата заказа"},
        {dataField: "ar", caption: "Артикул"},
        {dataField: "br", caption: "Бренд"},
        {dataField: "na", caption: "Наименование товара"},
        {dataField: "q", caption: "Количество"},
        {dataField: "pr", caption: "Цена за ед."},
        {dataField: "sum", caption: "Сумма"},
        {dataField: "ss", caption: "Статус"},
        {dataField: "dQ", caption: "Кол-во в доставке"},
        {dataField: "dd", caption: "Ожидаемая дата доставки"},
        {dataField: "ddg", caption: "Гарантируемая дата доставки"},
        {dataField: "com", caption: "Комментарий"},
        {dataField: "wh", caption: "Поставщик"},
        {dataField: "ok", caption: "Пользователь"}
      ],
    };
  },
  computed: {
    orders() {
      return useOrdersStore().orders;
    },
  },
  mounted() {
    useOrdersStore().fetchOrders();
  },
};
</script>