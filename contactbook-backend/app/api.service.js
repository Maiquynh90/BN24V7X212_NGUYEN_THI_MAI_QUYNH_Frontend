import axios from "axios";

// Khởi tạo một instance Axios với cấu hình cơ sở
const commonConfig = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};

export default (baseURL) => {
    return axios.create({
        baseURL,
        ...commonConfig,
    });
}; 