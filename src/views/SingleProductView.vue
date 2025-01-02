<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { APIGetBook, APIPurchaseBook } from '@/api/books'
import { ref } from 'vue'
import ShopLoader from '@/components/shop/ShopLoader.vue'
import { showToast } from '@/tools/helpers'

// Define route and variables
const route = useRoute()
const router = useRouter()

const bookId = route.params.id || null
const isFetching = ref(true)
const book = ref({})

const isPurchasing = ref(false)

/**
 * Get book detail from bookId
 */
onMounted(async () => {
    // If there is no book id return to shop
    if (bookId === null) {
        redirectToShop()
    }
    await APIGetBook(bookId).then((response) => {
        if (response.book) {
            book.value = response.book
            // Set document title
            document.title = `Your Favourite Bookstore - ${ book.value.title }`
        } else {
            redirectToShop()
        }
    })
    isFetching.value = false
})

/**
 * Purchase Book
 */
const purchaseBook = async () => {
    isPurchasing.value = true
    await APIPurchaseBook(bookId).then((response) => {
        if (response.book) {
            book.value = response.book
            showToast('success', 'Successfully purchased the book') // Show the toast
        }
    })
    isPurchasing.value = false
}

/**
 * Redirect to shop
 */
const redirectToShop = () => {
    router.push({ name: 'shop' })
}
</script>

<template>
    <div id="single-product">
        <div class="container">
            <div class="single-product-wrapper custom-box p-5">
                <div v-if="!isFetching">
                    <div class="row align-items-center">
                        <div class="col-lg-5 col-md-6 mb-4 mb-md-0">
                            <div class="product-image">
                                <img src="/img/no-img.jpeg" alt="No image" />
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-6">
                            <div class="product-detail">
                                <h1 class="fs-2">
                                    {{ book.title }}
                                </h1>
                                <div class="mb-lg-5 mb-4">
                                    <div class="author text-primary fs-4">
                                        {{ book.author }}
                                    </div>
                                    <div class="isbn">
                                        {{ book.isbn }}
                                    </div>
                                    <div class="stock">
                                        {{ book.availableStock }} in stock
                                    </div>
                                </div>
                                <div
                                    class="price fs-4 text-success fw-bold mb-2"
                                >
                                    ${{ book.price }}
                                </div>
                                <button
                                    class="btn rounded-0 px-5 py-2 btn-dark"
                                    @click="purchaseBook"
                                    :disabled="isPurchasing"
                                >
                                    {{
                                        isPurchasing
                                            ? 'Processing..'
                                            : 'Buy Now'
                                    }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <!-- Show loader component -->
                    <ShopLoader />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#single-product {
    .single-product-wrapper {
        .product-image {
            img {
                width: 100%;
            }
        }
    }
}
</style>
