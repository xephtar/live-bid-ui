<template>
  <form class="form-container" @submit="submitBid" v-if="!isOfferSucceeded">
    <div class="input-field-div">
      <div>{{ $t("i18n_userEmailLabel") }}</div>
      <CustomInput v-model="userEmail" inputType="email" />
    </div>
    <div class="input-field-div">
      <div>{{ $t("i18n_bidAmountLabel") }}</div>
      <CustomInput v-model="bidAmount" inputType="number" />
    </div>
    <div class="button-field-div">
      <button class="button" :disabled="canBidOffer" type="submit">
        {{ $t("i18n_offerBidButton") }}
      </button>
    </div>
  </form>
  <div class="icon-container" v-if="isOfferSucceeded">
    <img :src="ThumbsUpIcon" height="32" />
  </div>
  <div class="icon-container" v-if="error">
    <img :src="ErrorIcon" height="32" />
    <div>
      {{ $t("i18n_error") }}
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, computed, toRefs } from "vue";
import CustomInput from "./CustomInput.vue";
import { stockApi } from "../apis/index";
import ThumbsUpIcon from "../assets/thumbs-up.svg";
import ErrorIcon from "../assets/error.svg";
export default defineComponent({
  components: { CustomInput },
  props: {
    itemUID: String,
  },
  setup(props) {
    const state = reactive({
      userEmail: "",
      bidAmount: 0,
      isOfferSucceeded: false,
      error: false,
    });
    const submitBid = (e) => {
      e.preventDefault();

      const data = {
        user_email: state.userEmail,
        amount: state.bidAmount,
      };

      stockApi
        .post(`/stock/items/${props.itemUID}/create_bid`, data)
        .then(() => {
          state.bidAmount = 0;
          state.userEmail = "";
          state.isOfferSucceeded = true;
          state.error = false;
        })
        .catch(() => {
          state.error = true;
          state.isOfferSucceeded = false;
        });
    };
    const canBidOffer = computed(() => {
      return state.userEmail == "" || state.bidAmount == 0;
    });
    return {
      ...toRefs(state),
      canBidOffer,
      submitBid,
      ThumbsUpIcon,
      ErrorIcon,
    };
  },
});
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.input-field-div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.button-field-div {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.icon-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}
</style>
