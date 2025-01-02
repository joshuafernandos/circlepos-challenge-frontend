<script setup>
import { RouterLink } from 'vue-router'
import SearchFilter from '@/components/shop/SearchFilter.vue'
</script>

<template>
    <div id="home-page">
        <!-- Banner -->
        <div class="banner">
            <div class="container">
                <div class="banner-wrapper custom-box p-5">
                    <div class="row align-items-center py-5">
                        <div class="col-lg-6 order-lg-0 order-1">
                            <div
                                class="banner-image d-flex justify-content-center justify-content-lg-start"
                            >
                                <img
                                    src="/img/animated-book.png"
                                    alt="Circle POS Bookstore"
                                    class="img-fluid"
                                />
                            </div>
                        </div>
                        <div class="col-lg-6 mb-5 mb-lg-0">
                            <div class="mb-5">
                                <h1 class="banner-title mb-4">
                                    What
                                    <span class="text-success">book</span> are
                                    you looking for?
                                </h1>
                                <p class="banner-description">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nostrum praesentium
                                    quaerat corrupti in recusandae iusto, a ipsa
                                    cum sed. Exercitationem.
                                </p>
                            </div>
                            <div class="banner-action">
                                <RouterLink
                                    class="btn btn-primary px-5 py-2 btn-sm rounded-pill"
                                    :to="{ name: 'shop' }"
                                >
                                    Shop Now
                                </RouterLink>
                                <span> or </span>
                                <!-- Import search filter component -->
                                <SearchFilter />
                                <!-- End search filter component -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Banner -->
    </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;
#home-page {
    // Banner
    .banner {
        .banner-wrapper {
            display: flex;
            align-items: center;
            min-height: 80vh;
            width: 100%;
            h1.banner-title {
                font-size: 4rem;
                line-height: 1;
                @media (max-width: map-get($grid-breakpoints, 'lg')) {
                    font-size: 3rem;
                }
            }
            p.banner-description {
                font-weight: 300;
            }
            .banner-action {
                display: flex;
                align-items: center;
                gap: 20px;
                @media (max-width: map-get($grid-breakpoints, 'md')) {
                    display: block;
                }
                a {
                    @media (max-width: map-get($grid-breakpoints, 'md')) {
                        width: 100%;
                    }
                }
                span {
                    @media (max-width: map-get($grid-breakpoints, 'md')) {
                        text-align: center;
                        display: block;
                        margin-block: 10px;
                    }
                }
            }
            .banner-image {
                img {
                    width: 85%;
                }
            }
        }
    }
}
</style>