<template>
  <div class="bid-list">
    <ListTitle title="i18n_bidDescription" />
    <div class="list-div">
      <ListItemBid v-for="bid in bids" :key="bid.id" :bid="bid" />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import ListItemBid from "./ListItemBid.vue";
import ListTitle from "./ListTitle.vue";
export default defineComponent({
  components: { ListItemBid, ListTitle },
  props: {
    bids: Array,
  },
});
</script>

<style scoped>
.bid-list {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
}
.list-div {
  width: 70%;
  display: flex;
  gap: 5px;
  flex-direction: column;
}
.list-header {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
</style>
