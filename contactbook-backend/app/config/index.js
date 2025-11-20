// app/config/index.js (HOẶC app/config.js)

const config = {
    app: {
        // Cổng mặc định cho Server
        port: process.env.PORT || 3000,
    },
    db: {
        // Chuỗi kết nối MongoDB
        // THAY 'mongodb://127.0.0.1:27017/contactbook' BẰNG CHUỖI KẾT NỐI THẬT CỦA BẠN NẾU CÓ.
        uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/contactbook",
    },
};

module.exports = config;