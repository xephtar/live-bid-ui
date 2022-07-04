<template>
  <div>
    <h2>
      <span class="list-item-title"> {{ $t(title) }} </span>
    </h2>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: { title: String },
  setup() {},
});
</script>

<style scoped>
.list-item-title {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 3.55px;
  opacity: 0.65;
  transform: translateY(-2px);
}
</style>
