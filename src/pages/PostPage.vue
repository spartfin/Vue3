<template>
    <h2>Страница с постами</h2>

    <my-input v-focus v-model="searchQuery" placeholder="Поиск..." />

    <div class="app__btns">
        <my-button @click="showDialog">Создать пост</my-button>

        <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible">
        <post-form @create="createPost" />
    </my-dialog>

    <post-list v-if="!isPostsLoading" :posts="sortedAndSearchedPosts" @remove="removePost" />

    <div v-else>Идет загрузка...</div>

    <div v-intersection="loadMorePosts" class="observer"></div>

    <!-- <div class="page__wrapper">
        <div 
            class="page" 
            :class="{'current-page': page === pageNumber}"
            v-for="pageNumber in totalPage" 
            :key="pageNumber"
            @click="changePage(pageNumber)"
        >{{ pageNumber }}</div>
    </div> -->
</template>

<script>
import PostForm from "@/сomponents/PostForm.vue";
import PostList from "@/сomponents/PostList.vue";
import axios from "axios";

export default {
    components: {
    PostList,
    PostForm,
},
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostsLoading: false,
            selectedSort: '',
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPage: 0,
            sortOptions: [
                {value: 'title', name: 'По назавнию'},
                {value: 'body', name: 'По содержимому'}
            ]
        }
    },
    mounted() {
        this.fetchPosts();

        /* const options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = (entries, observer) => {
            if(entries[0].isIntersecting && this.page < this.totalPage) {
                this.loadMorePosts();
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer); */
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
    },
    watch: {
        /* page() {
            this.fetchPosts()
        } */
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
        showDialog() {
            this.dialogVisible = true;
        },
        async fetchPosts() {
            try {
                this.isPostsLoading = true;
                const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                this.totalPage = Math.ceil(responce.headers['x-total-count'] / this.limit);
                this.posts = responce.data;
            } catch (error) {
                alert('Ошибка')
            } finally {
                this.isPostsLoading = false;
            }
        },
        async loadMorePosts() {
            this.page +=1;
            try {
                const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                this.totalPage = Math.ceil(responce.headers['x-total-count'] / this.limit);
                this.posts = [...this.posts, ...responce.data];
            } catch (error) {
                alert('Ошибка')
            }
        },
        /* changePage(pageNumber) {
            this.page = pageNumber;
            this.fetchPosts();
        } */
    }
}
</script>

<style scoped>
.app__btns {
    display: flex;
    justify-content: space-between;
    margin: 24px 0 32px;
}

.page__wrapper {
    display: flex;
    justify-content: center;
    margin-top: 15px;
}

.page {
    border: 1px solid black;
    padding: 10px;
    margin: 15px 5px;
    cursor: pointer;
}

.page:hover {
    opacity: 0.4;
}

.current-page {
    border: 2px solid teal;
}
</style>
