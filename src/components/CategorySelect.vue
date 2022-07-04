<template>
  <select
    v-model="categoryId"
    @input="$emit('update:categoryId', $event.target.value)"
  >
    <option value="" disabled selected hidden>
      {{ $t("i18n_categoryType") }}
    </option>
    <option
      v-for="category in categoryTypes"
      :key="category.uid"
      :value="category.id"
    >
      {{ category.name }}
    </option>
  </select>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    categoryTypes: Array,
  },
  setup() {
    const categoryId = ref("");
    return { categoryId };
  },
});
</script>
<style scoped></style>
