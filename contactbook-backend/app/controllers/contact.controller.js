// File: app/controllers/contact.controller.js (PHIÊN BẢN SỬ DỤNG MONGODB/MONGOOSE)

const Contact = require("../models/contact.model"); // KHÔNG ĐƯỢC XÓA DÒNG NÀY

// Hàm Thêm mới (POST /api/contacts/)
exports.create = async (req, res, next) => {
    // 1. Kiểm tra dữ liệu bắt buộc (Tên)
    if (!req.body.name) {
        return res.status(400).send({
            message: "Tên (Name) không được để trống.",
        });
    }

    // 2. Tạo đối tượng Contact mới từ dữ liệu gửi lên
    const newContact = new Contact(req.body);

    try {
        // 3. LƯU VÀO DATABASE
        const document = await newContact.save();
        return res.status(201).send(document);
    } catch (error) {
        console.error("LỖI KHI TẠO CONTACT:", error);
        return res.status(500).send({
            message: "Không thể tạo liên hệ do lỗi máy chủ nội bộ. Chi tiết: " + error.message,
        });
    }
};

// Hàm Lấy tất cả (GET /api/contacts/)
exports.findAll = async (req, res, next) => {
    try {
        // Lấy tất cả liên hệ từ MongoDB
        const documents = await Contact.find({});
        return res.send(documents);
    } catch (error) {
        console.error("LỖI KHI LẤY CONTACTS:", error);
        return res.status(500).send({
            message: "Có lỗi xảy ra khi truy xuất danh sách liên hệ.",
        });
    }
};

// Hàm Xem chi tiết (GET /api/contacts/:id)
exports.findOne = async (req, res, next) => {
    try {
        const document = await Contact.findById(req.params.id);
        if (!document) {
            return res.status(404).send({ message: "Không tìm thấy liên hệ." });
        }
        return res.send(document);
    } catch (error) {
        return res.status(500).send({
            message: `Lỗi truy xuất liên hệ có ID=${req.params.id}`,
        });
    }
};

// Hàm Cập nhật (PUT /api/contacts/:id)
exports.update = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Dữ liệu cập nhật không được trống.",
        });
    }

    try {
        const document = await Contact.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // Trả về tài liệu đã được cập nhật
        });

        if (!document) {
            return res.status(404).send({ message: "Không tìm thấy liên hệ." });
        }

        return res.send({ message: "Liên hệ được cập nhật thành công." });
    } catch (error) {
        return res.status(500).send({
            message: `Lỗi cập nhật liên hệ có ID=${req.params.id}`,
        });
    }
};

// Hàm Xóa một liên hệ (DELETE /api/contacts/:id)
exports.delete = async (req, res, next) => {
    try {
        const document = await Contact.findByIdAndDelete(req.params.id);

        if (!document) {
            return res.status(404).send({ message: "Không tìm thấy liên hệ." });
        }

        return res.send({ message: "Liên hệ được xóa thành công." });
    } catch (error) {
        return res.status(500).send({
            message: `Không thể xóa liên hệ có ID=${req.params.id}`,
        });
    }
};

// Hàm Xóa tất cả (DELETE /api/contacts/)
exports.deleteAll = async (req, res, next) => {
    try {
        const result = await Contact.deleteMany({}); // Xóa tất cả
        return res.send({
            message: `${result.deletedCount} liên hệ đã được xóa thành công.`,
        });
    } catch (error) {
        return res.status(500).send({
            message: "Có lỗi xảy ra khi xóa tất cả liên hệ.",
        });
    }
};