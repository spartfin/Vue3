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
    box-shadow: 2px 2px 4px gray;
    background-image: url('../assets/img/bg.jpg');
    background-repeat: repeat-x;
    animation: slide 30s linear infinite;
}

@keyframes slide {
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 0%;
    }
    100% {
        background-position: 0% 0%;
    }
}

.navbar__btns {
    margin-left: auto;
}

.navbar__btn {
    margin-right: 16px;
}
</style>