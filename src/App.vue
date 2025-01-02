<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <div id="app">
    <HeaderComponent />
    <RouterView></RouterView>
    <FooterComponent />
  </div>
</template>
