<script setup>
import { onMounted, ref, computed, watch } from 'vue'
import { APIGetBooks } from '@/api/books'
import ProductLoop from '@/components/shop/product/ProductLoop.vue'
import SearchFilter from '@/components/shop/SearchFilter.vue'
import ShopLoader from '@/components/shop/ShopLoader.vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()

// Define variables
const books = ref([])
const isFetching = ref(true)

/**
 * Get all list of books
 */
onMounted(async () => {
    // Set document title
    document.title = "Your Favourite Bookstore - Shop All"

    await APIGetBooks().then((response) => {
        books.value = response.books
    })
    isFetching.value = false
})

/**
 * Watch & Computed for search
 */
const searchQuery = ref(route.query.s || '')
watch(
    () => route.query.s,
    (newVal) => {
        searchQuery.value = newVal || ''
    }
)

const filteredBooks = computed(() => {
    // Filter by title, isbn, or author
    return searchQuery.value !== ''
        ? books.value.filter((item) =>
              [item.title, item.isbn, item.author].some((field) =>
                  field.toLowerCase().includes(searchQuery.value.toLowerCase())
              )
          )
        : books.value
})
</script>

<template>
    <div id="shop-page">
        <div class="container">
            <div class="shop-wrapper p-5 custom-box">
                <div
                    class="d-flex align-items-center justify-content-between mb-5"
                >
                    <h1 class="m-0 p-0">Shop All</h1>
                    <SearchFilter />
                </div>

                <div class="search-title mb-4" v-if="searchQuery !== ''">
                    <h5>
                        <span class="fw-light">Search result for:</span>
                        {{ searchQuery }}
                    </h5>
                    <RouterLink :to="{ name: 'shop' }">
                        Clear filter
                    </RouterLink>
                </div>

                <div v-if="!isFetching">
                    <ProductLoop :items="filteredBooks" />
                </div>
                <div v-else>
                    <!-- Show loader component -->
                    <ShopLoader />
                </div>
            </div>
        </div>
    </div>
</template>
