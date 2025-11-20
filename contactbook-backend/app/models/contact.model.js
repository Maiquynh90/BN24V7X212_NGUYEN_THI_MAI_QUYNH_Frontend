const mongoose = require("mongoose");

// Định nghĩa Schema (cấu trúc của một liên hệ)
const ContactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true, // Tên là trường bắt buộc
        },
        email: {
            type: String,
            trim: true, // Loại bỏ khoảng trắng ở đầu/cuối
        },
        address: String,
        phone: String,
        favorite: {
            type: Boolean,
            default: false, // Mặc định không phải là yêu thích
        },
    },
    // Tùy chọn: Tự động thêm trường createdAt và updatedAt
    { timestamps: true }
);

// Export Model để sử dụng trong Controller
module.exports = mongoose.model("contact", ContactSchema);