<template>
  <div>
    <input
      :type="inputType"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ["modelValue", "inputType"],
};
</script>
