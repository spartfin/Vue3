<template>
    <h1>Добро пожаловать во Vue 3</h1>

    <div class="links">
        <router-link to="/posts">
            <my-button>Посты</my-button>
        </router-link>

        <router-link to="/about">
            <my-button>О приложении</my-button>
        </router-link>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.links {
    margin-top: 48px;
    display: flex;
    justify-content: space-around;
}
</style>