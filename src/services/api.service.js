// src/services/api.service.js
import axios from "axios";

// ----------------------------------------------------
// ĐÃ SỬA LỖI: KHAI BÁO BASE URL TRỎ ĐẾN CỔNG BACKEND (3000)
// ----------------------------------------------------
const commonConfig = {
    // Địa chỉ cơ sở cho tất cả các cuộc gọi API
    // Giả sử Backend của bạn chạy trên http://localhost:3000
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};

export default (baseURL) => {
    return axios.create({
        ...commonConfig,
        // Ghép BASE_URL cố định (http://localhost:3000) với path cụ thể (ví dụ: /api/contacts)
        baseURL: commonConfig.baseURL + baseURL,
    });
};