<template>
    <div>
        <h4>Список постов</h4>

        <post-item :post="post" v-for="post in posts" :key="post.id" />
    </div>
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
</style>
