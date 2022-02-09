<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
.btn {
    align-self: flex-end;
    padding: 10px 15px;
    color: teal;
    background: white;
    border: 1px solid teal;
    transition: 0.3s;
    cursor: pointer;
}

.btn:hover {
    opacity: 0.4;
}
</style>