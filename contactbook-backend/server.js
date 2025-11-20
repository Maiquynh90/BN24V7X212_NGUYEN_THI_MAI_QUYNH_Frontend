const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // DÒNG MỚI: Thêm Mongoose
const config = require("./app/config"); // DÒNG MỚI: Thêm Config DB

// === BẮT ĐẦU PHẦN KHẮC PHỤC LỖI 404 ===
const contactsRouter = require("./app/routes/contact.route");
// === KẾT THÚC PHẦN KHẮC PHỤC LỖI 404 ===

const app = express();

app.use(cors());
app.use(express.json());

// Tuyến đường cơ bản
app.get("/", (req, res) => {
    res.json({ message: "Welcome to contactbook application." });
});

// === BẮT ĐẦU PHẦN KHẮC PHỤC LỖI 404: MOUNT ROUTER ===
app.use("/api/contacts", contactsRouter);
// === KẾT THÚC PHẦN KHẮC PHỤC LỖI 404 ===


// --- KHỐI KẾT NỐI MONGODB BẮT BUỘC THÊM VÀO ĐÂY ---
mongoose.connect(config.db.uri)
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((error) => {
        console.error("Cannot connect to the database!", error);
        // Tùy chọn: process.exit() để dừng nếu kết nối thất bại
    });
// ---------------------------------------------------


// Port chạy server
const PORT = config.app.port || 3000; // Sửa PORT để lấy từ config
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});