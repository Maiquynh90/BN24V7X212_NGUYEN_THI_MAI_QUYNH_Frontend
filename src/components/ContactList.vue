<script>
export default {
    props: {
        contacts: { type: Array, default: [] }, 
        activeIndex: { type: Number, default: -1 }, 
    },
    emits: ["update:activeIndex"], 
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
    },
};
</script>

<template>
    <ul class="list-group">
        <li
            class="list-group-item"
            v-for="(contact, index) in contacts"
            :key="contact._id"
            :class="{ active: index === activeIndex }"
            @click="updateActiveIndex(index)"
        >
            {{ contact.name }}
        </li>
    </ul>
</template>
<style scoped>
/* Xóa viền ngoài của container List Group */
.list-group {
    border: none;
}

/* Tùy chỉnh các mục danh sách */
.list-group-item {
    /* Giảm padding để làm mục danh sách mỏng hơn */
    padding: 0.5rem 1rem; 
    cursor: pointer;
    transition: background-color 0.2s;
    /* Xóa viền giữa các mục */
    border: none; 
    margin-bottom: 2px;
    border-radius: 0;
}

/* Định kiểu cho mục đang được chọn (active) */
.list-group-item.active {
    /* Màu xanh đậm theo hình hướng dẫn */
    background-color: #007bff; 
    border-color: #007bff;
    color: white;
    font-weight: 600; 
}
</style>