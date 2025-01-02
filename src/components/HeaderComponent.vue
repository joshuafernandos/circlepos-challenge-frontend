<script setup>
import { useRoute } from 'vue-router';

// Define Route
const route = useRoute();

// List all menu items
const menuItems = [
    {
        title: 'Home',
        target: 'home',
    }
];
</script>

<template>
    <header>
        <div class="container py-4">
            <div class="site-header">
                <div class="site-logo">
                    <router-link :to="{ name: 'home' }">
                        <h3><span class="text-primary">Book</span>Store</h3>
                    </router-link>
                </div>
                <ul class="site-menu">
                    <li v-for="menuItem in menuItems" :key="menuItem.title">
                        <router-link
                            :to="{ name: menuItem.target }"
                            :class="{ active: route.name === menuItem.target }"
                        >
                            {{ menuItem.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
@use '@/assets/styles/variables.scss' as *;
header {
    .site-header {
        display: flex;
        justify-content: space-between;
        align-content: space-between;
        .site-logo {
            a {
                text-decoration: none;
                color: $black;
                h3 {
                    margin: 0;
                    padding: 0;
                }
            }
        }
        ul.site-menu {
            display: flex;
            align-content: center;
            margin: 0;
            padding: 0;
            li {
                list-style-type: none;
                &:not(:last-child) {
                    margin-right: 60px;
                }
                a {
                    text-transform: uppercase;
                    font-weight: 400;
                    color: $grey;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    &.active,
                    &:hover {
                        color: $primary;
                        font-weight: 700;
                    }
                }
            }
        }
    }
}
</style>
