<template>
  <VueLoading
      :active="true"
      :is-full-page="false"
      :spinner="spinner"
      :background="'rgba(255, 255, 255, 0.7)'"
  ></VueLoading>
</template>

<script>

import VueLoading from "vue-loading-overlay";
import 'vue-loading-overlay/dist/css/index.css';

export default {
  name: "Loader",
  components: {VueLoading},

  props: {

    spinner: {
      type: String,
      default: "circle"
    }
  }
};
</script>
