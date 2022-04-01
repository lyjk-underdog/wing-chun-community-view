<template>
    <DynamicItem :item="dynamic" />
</template>

<script>
import Vue from "vue";
import DynamicItem from './dynamic-item.vue';
import useFetchOnly from './hooks/fetch-only.js';

export default Vue.extend({
  components: {
    DynamicItem,
  },
  mixins:[useFetchOnly]
});
</script>