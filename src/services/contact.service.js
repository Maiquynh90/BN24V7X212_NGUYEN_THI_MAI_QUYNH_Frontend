// src/services/contact.service.js
import createApiClient from "./api.service";

class ContactService {
    constructor(baseUrl = "/api/contacts") {
        this.api = createApiClient(baseUrl);
    }

    // 1. Lấy tất cả (đã có)
    async getAll() {
        return (await this.api.get("/")).data;
    }

    // 2. TẠO MỚI (Cần cho ContactAdd.vue)
    async create(data) {
        return (await this.api.post("/", data)).data;
    }

    // 3. XÓA TẤT CẢ (Cần cho ContactBook.vue)
    async deleteAll() {
        return (await this.api.delete("/")).data;
    }

    // 4. LẤY MỘT CONTACT (Cần cho ContactEdit.vue)
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }

    // 5. CẬP NHẬT (Cần cho ContactEdit.vue)
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }

    // 6. XÓA MỘT CONTACT (Cần cho ContactEdit.vue)
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
}

export default new ContactService();