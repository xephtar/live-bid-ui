<template>
  <ListTitle title="i18n_listDescription" />
  <div class="list-div">
    <ListHeader />
    <ListItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      @expanded-item-uid="getExpandedItem(item)"
    />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import ListItem from "./ListItem.vue";
import ListHeader from "./ListHeader.vue";
import ListTitle from "./ListTitle.vue";
export default defineComponent({
  components: { ListItem, ListHeader, ListTitle },
  props: {
    items: Array,
  },
  setup(props, { emit }) {
    const getExpandedItem = (item) => {
      emit("expanded-item-uid", item.uid);
    };

    return { getExpandedItem };
  },
});
</script>

<style scoped>
.list-div {
  width: 70%;

  display: flex;
  gap: 5px;
  flex-direction: column;
}
</style>
