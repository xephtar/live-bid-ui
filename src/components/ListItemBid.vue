<template>
  <div :key="bid.id" class="item-container item-make-up">
    <div class="item-div">
      <span class="div-child">
        {{ bid.user_email }}
      </span>
      <span class="div-child div-price">
        {{ bid.amount }}
      </span>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    bid: Object,
  },
});
</script>
<style scoped>
.div-child {
  flex: 1;
  display: flex;
}
.div-price {
  align-items: flex-end;
  justify-content: flex-end;
}
.item-container {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  transition: background-color 0.5s ease-out;
}
.item-div {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}

.item-container:hover {
  cursor: pointer;
  background-color: black;
  color: white;
}

.item-make-up {
  padding: 10px 30px 10px 10px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 1px 2px 0.5px rgba(51, 51, 51, 0.2);
}
</style>
