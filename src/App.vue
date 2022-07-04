<template>
  <AppHeader />
  <div class="body-container">
    <div class="bid-list"></div>
    <div class="app-container">
      <CategorySelect v-model="categoryId" :categoryTypes="categoryTypes" />
      <div class="flex-div">
        <button
          class="button"
          @click="connect()"
          :disabled="isConnectButtonDisabled"
        >
          {{ $t("i18n_listItems") }}
        </button>
      </div>
      <ListOfItems
        :items="items"
        v-if="isItemListExist"
        @expanded-item-uid="getExpandedItemBids"
      />
    </div>
    <div class="bid-list">
      <ListOfBids :bids="bids" v-if="isBidListExist" />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent, computed } from "vue";
import { newWebSocket } from "./socket";
import { stockApi } from "./apis";
import ListOfItems from "./components/ListOfItems.vue";
import AppHeader from "./components/AppHeader.vue";
import CategorySelect from "./components/CategorySelect.vue";
import ListOfBids from "./components/ListOfBids.vue";
export default defineComponent({
  components: { ListOfItems, AppHeader, CategorySelect, ListOfBids },
  setup() {
    const state = reactive({
      connection: null,
      categoryId: "",
      categoryTypes: [],
      items: {},
      bids: [],
      expandedItemUID: "",
    });

    const connect = () => {
      state.connection = newWebSocket(state.categoryId);

      state.connection.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const item = data.item;
        state.items[item.uid] = item;
      };

      state.connection.onopen = () => {
        getItemsByCategory();
      };
    };

    const isConnectButtonDisabled = computed(() => {
      return state.categoryId === "";
    });

    const isItemListExist = computed(() => {
      return Object.keys(state.items).length !== 0;
    });

    const isBidListExist = computed(() => {
      return state.bids.length !== 0;
    });

    const getCategories = () => {
      stockApi.get("/stock/categories").then((res) => {
        state.categoryTypes = res.data;
      });
    };

    const getExpandedItemBids = (uid) => {
      stockApi.get(`/stock/items/${uid}/get_bids`).then((res) => {
        if (res.data.has_bid) {
          state.bids = res.data.has_bid;
        }
      });
    };

    const getItemsByCategory = () => {
      state.items = {};
      stockApi
        .get("/stock/items", { params: { category_id: state.categoryId } })
        .then((res) => {
          for (const item of res.data) {
            if (item.is_active) {
              state.items[item.uid] = item;
            }
          }
        });
    };

    return {
      ...toRefs(state),
      connect,
      getCategories,
      getItemsByCategory,
      isConnectButtonDisabled,
      isItemListExist,
      isBidListExist,
      getExpandedItemBids,
    };
  },
  mounted() {
    this.getCategories();
  },
});
</script>

<style scoped>
.body-container {
  display: flex;
  flex-direction: row;
}
.bid-list {
  flex: 1;
  margin-top: -2.5%;
}
.app-header {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.header-title {
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  width: 50%;
  text-align: center;
}
.header-big {
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 6.5px;
}
.header-sub {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 3.55px;
  opacity: 0.65;
  transform: translateY(-2px);
}
.app-container {
  margin-top: 20px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex: 1;
  width: 100%;
}

.flex-div {
  width: 100%;
  height: 100%;
  margin: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}

.button {
  font-size: 15px;
  background-color: #000000;
  color: #e8e8e8;
  padding: 5px 10px;
  border-radius: 0.25rem;
  text-transform: uppercase;
  border: 1px solid transparent;
  transition: background-color 0.2s ease-in-out;
}

.button:hover:enabled {
  cursor: pointer;
  background-color: #423f3a;
  border-color: #ffffff;
}

.button[disabled="disabled"],
.button:disabled {
  background-color: #888887;
  color: #e8e8e8;
}
</style>
