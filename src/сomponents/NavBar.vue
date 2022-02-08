<template>
    <div class="navbar">
        <div @click="$router.push('/')">Vue 3</div>
        
        <div class="navbar__btns">
            <my-button class="navbar__btn" @click="$router.push('/posts')">Посты</my-button>

            <my-button class="navbar__btn" @click="$router.push('/about')">О приложении</my-button>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 15px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
}

.navbar__btns {
    margin-left: auto;
}

.navbar__btn {
    margin-right: 16px;
}
</style>