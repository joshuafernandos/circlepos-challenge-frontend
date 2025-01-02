<script setup>
import { defineProps } from 'vue'
import ProductPanel from '@/components/shop/product/ProductPanel.vue'

/**
 * Define props
 */
defineProps({
    items: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <div class="row">
        <div class="col-lg-3 col-md-6 col-12 mb-4 equal" v-for="(item, index) in items" v-bind:key="index">
            <ProductPanel :item="item"/>
        </div>
    </div>
</template>

<style scoped>
.equal {
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
}
</style>
