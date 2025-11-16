// src/router/index.js
import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
    // BỔ SUNG ĐỊNH TUYẾN: Thêm mới liên hệ
    {
        path: "/contacts/add",
        name: "contact.add",
        component: () => import("@/views/ContactAdd.vue"), // Trỏ đến component ContactAdd.vue
    },
    //-------------------------------------------------
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true // Quan trọng: Cho phép component nhận id từ URL
    },
    // BỔ SUNG ĐỊNH TUYẾN: Xử lý lỗi 404 Not Found (Bất kỳ đường dẫn nào không khớp)
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;