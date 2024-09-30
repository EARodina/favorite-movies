<template>
    <main>
        <header class="header">
            <router-link :to="'/'">
                <img src="/logo.svg" alt="Logo Watch" class="header-logo">
            </router-link>
        </header>
        <div class="tabs">
            <router-link :to="'/movies'">
                <button class="btn">Favorite</button>
            </router-link>
            <router-link :to="'/'">
                <button class="btn">Search</button>
            </router-link>
        </div>
        <div class="content">
            <RouterView />
        </div>
    </main>
</template>