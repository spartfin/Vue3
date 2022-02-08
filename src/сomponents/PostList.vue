<template>
    <div v-if="posts.length > 0">
        <h4>Список постов</h4>

        <transition-group name="post-list">
            <post-item :post="post" v-for="post in posts" :key="post.id" @remove="$emit('remove', post)" />
        </transition-group>
    </div>

    <h3 v-else class="title">Список постов пуст</h3>
</template>

<script>
import PostItem from "./PostItem.vue"

export default {
    components: {
        PostItem,
    },
    props: {
        posts: {
            type: Array,
            require: true
        }
    },
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },
}
</script>

<style scoped>
.post-list-item {
    display: inline-block;
    margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
    transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.post-list-move {
    transition: transform 0.8s ease;
}

.title {
    font-size: 32px;
    color: red;
    text-align: center;
    margin-top: 48px;
}
</style>
