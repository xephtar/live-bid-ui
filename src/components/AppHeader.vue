<template>
  <div class="app-header">
    <div class="header-title">
      <h1>
        <span class="header-big title-span">{{ $t("i18n_appName") }}</span
        ><span class="header-sub title-span">{{ $t("i18n_subHeader") }}</span>
      </h1>
    </div>
  </div>
</template>
<style scoped>
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
</style>
