<template>
  <div :key="item.id" class="item-container item-make-up" @click="openItem()">
    <div class="item-div">
      <span class="div-child">
        {{ item.name }}
      </span>
      <span class="div-child div-price">
        {{ item.price }}
      </span>
    </div>
  </div>
  <div v-if="expanded">
    <BidOfferForm :itemUID="item.uid" />
  </div>
</template>
<script>
import { defineComponent, toRefs, reactive } from "vue";
import BidOfferForm from "./BidOfferForm.vue";
export default defineComponent({
  components: { BidOfferForm },
  props: {
    item: Object,
  },
  setup(props, { emit }) {
    const state = reactive({
      expanded: false,
    });
    const openItem = () => {
      state.expanded = !state.expanded;
      emit("expanded-item-uid");
    };

    return { ...toRefs(state), openItem };
  },
  mounted() {},
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
