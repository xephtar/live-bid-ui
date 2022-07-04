<template>
  <div class="list-header">
    <div class="div-header div-name">{{ $t("i18n_nameColumnHeader") }}</div>
    <div class="div-header div-price">
      {{ $t("i18n_priceColumnHeader") }}
    </div>
  </div>
</template>
<style scoped>
.div-header {
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 2px;
  text-decoration: underline;
  flex: 1;
  display: flex;
}
.div-price {
  padding-right: 30px;
  align-items: flex-end;
  justify-content: flex-end;
}
.div-name {
  padding-left: 10px;
  align-items: flex-end;
  justify-content: flex-start;
}
.list-header {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
</style>
