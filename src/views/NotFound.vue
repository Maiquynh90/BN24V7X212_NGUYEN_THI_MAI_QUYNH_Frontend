<template>
    <div class="page">
        <p>
            Oops, Không thể tìm thấy trang. Trở về 
            <router-link to="/">Trang chủ.</router-link>
        </p>
    </div>
</template>

<style scoped>
.page {
    text-align: center;
    max-width: 400px;
    margin: auto;
    margin-top: 50px;
}

.page p {
    font-size: 1.25em;
    font-weight: bold;
}
</style>