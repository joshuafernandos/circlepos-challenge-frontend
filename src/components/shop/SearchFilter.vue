<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const searchInput = ref('')

/**
 * Method on filter submit
 */
const actionSubmitFilter = (e) => {
    e.preventDefault()
    // Push to shop page and add "s" query
    router.push({
        name: 'shop',
        query: { s: searchInput.value },
    })
}
</script>

<template>
    <div class="search-wrapper">
        <form @submit="actionSubmitFilter">
            <input
                type="search"
                class="form-control"
                placeholder="Search book.."
                v-model="searchInput"
            />
            <button type="submit" class="btn btn-dark btn-sm">
                <i class="fa fa-search" aria-hidden="true"></i>
            </button>
        </form>
    </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;
.search-wrapper {
    max-width: 50%;
    position: relative;
    @media (max-width: map-get($grid-breakpoints, 'md')) {
        max-width: 100%;
    }
    input[type='search'] {
        padding: 8px 45px 8px 20px;
        border-radius: 50px;
    }
    button {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        aspect-ratio: 1/1;
        border-radius: 50px;
    }
}
</style>