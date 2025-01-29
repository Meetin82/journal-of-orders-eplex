<template>
  <div v-if="isAuthenticated" class="container mx-auto mt-10">
    <h2 class="text-2xl font-bold mb-4">Журнал заказов</h2>
    <OrderTable />
  </div>
</template>

<script>
import OrderTable from "@/components/OrderTable.vue";
import { useAuthStore } from "@/stores/auth";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "OrdersView",
  components: {
    OrderTable,
  },
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    // Реактивная проверка авторизации
    const isAuthenticated = computed(() => authStore.isAuthenticated);

    // Перенаправление на логин, если нет авторизации
    if (!isAuthenticated.value) {
      router.push("/");
    }

    return {isAuthenticated};
  },
};
</script>
