<template>
    <form class="form" @submit.prevent>
        <h4>Создание поста</h4>

        <my-input v-focus v-model="post.title" placeholder="Название"></my-input>

        <my-input v-model="post.body" placeholder="Описание"></my-input>

        <my-button class="btn" @click="creatPost">Создать</my-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        creatPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post);
            this.title = '';
            this.body = '';
            this.post = {
                title: '',
                body: '',
            };
        },
    }
}
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
}

.btn {
    margin: 15px 0 0 0;
}
</style>
