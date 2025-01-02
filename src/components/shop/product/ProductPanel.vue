<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

/**
 * Define props
 */
defineProps({
    item: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div class="product-panel w-100 rounded">
        <RouterLink :to="{ name: 'shop-product', params: { id: item.id } }">
            <div class="panel-wrapper p-4">
                <h5>
                    {{ item.title }}
                </h5>
                <div class="mb-4">
                    <div class="author">
                        {{ item.author }}
                    </div>
                    <div class="isbn">
                        {{ item.isbn }}
                    </div>
                    <div class="stock">{{ item.availableStock }} in stock</div>
                </div>
                <div class="price fw-bold">${{ item.price }}</div>
            </div>
        </RouterLink>
    </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;

.product-panel {
    background: $white;
    transition: all 0.5s ease;
    a {
        text-decoration: none;
        color: $black;
        .author {
            color: $primary;
        }
        .price {
            color: $success;
        }
    }
    &:hover {
        background: $primary;
        scale: 1.1;
        a {
            color: $light-blue;
            .author, .price {
                color: $light-blue;
            }
        }
    }
}
</style>