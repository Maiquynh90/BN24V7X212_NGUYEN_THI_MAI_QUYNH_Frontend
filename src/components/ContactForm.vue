<template>
    <Form
        @submit="submitContact"
        :validation-schema="contactFormSchema"
    >
        <div class="form-group">
            <label for="name">Tên</label>
            <Field
                name="name"
                type="text"
                class="form-control"
                v-model="contactLocal.name"
            />
            <ErrorMessage name="name" class="error-feedback" />
        </div>

        <div class="form-group">
            <label for="email">E-mail</label>
            <Field
                name="email"
                type="email"
                class="form-control"
                v-model="contactLocal.email"
            />
            <ErrorMessage name="email" class="error-feedback" />
        </div>

        <div class="form-group">
            <label for="address">Địa chỉ</label>
            <Field
                name="address"
                type="text"
                class="form-control"
                v-model="contactLocal.address"
            />
            <ErrorMessage name="address" class="error-feedback" />
        </div>

        <div class="form-group">
            <label for="phone">Điện thoại</label>
            <Field
                name="phone"
                type="tel"
                class="form-control"
                v-model="contactLocal.phone"
            />
            <ErrorMessage name="phone" class="error-feedback" />
        </div>

        <div class="form-group form-check">
            <input
                name="favorite"
                type="checkbox"
                class="form-check-input"
                v-model="contactLocal.favorite"
            />
            <label for="favorite" class="form-check-label">
                <strong>Liên hệ yêu thích</strong>
            </label>
        </div>

        <div class="form-group">
            <button class="btn btn-primary">
                <i class="fas fa-save"></i> Lưu
            </button>
            
            <button
                v-if="contactLocal._id"
                type="button"
                class="ml-2 btn btn-danger"
                @click="deleteContact"
            >
                <i class="fas fa-trash"></i> Xóa
            </button>
        </div>
    </Form>
</template>

<script>
// Import các thành phần của thư viện form validation
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    // Nhận dữ liệu contact (nếu có) từ component cha (ContactEdit.vue)
    props: {
        contact: { type: Object, required: true }
    },
    emits: ["submit:contact", "delete:contact"],
    data() {
        // Định nghĩa Schema validation sử dụng yup
        const contactFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            email: yup
                .string()
                .email("E-mail không đúng định dạng.")
                .max(50, "E-mail có nhiều nhất 50 ký tự."),
            address: yup.string().max(100, "Địa chỉ có nhiều nhất 100 ký tự."),
            phone: yup
                .string()
                .matches(
                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    "Số điện thoại không hợp lệ."
                ),
        });

        // Tạo bản sao cục bộ từ prop contact để có thể thay đổi (dùng v-model)
        this.contactLocal = JSON.parse(JSON.stringify(this.contact));

        return {
            contactLocal: this.contactLocal,
            contactFormSchema,
        };
    },
    methods: {
        submitContact() {
            // Phát sự kiện 'submit:contact' kèm dữ liệu form
            this.$emit("submit:contact", this.contactLocal);
        },
        deleteContact() {
            // Phát sự kiện 'delete:contact'
            this.$emit("delete:contact", this.contactLocal.id);
        },
    },
};
</script>

<style scoped>
@import "@/assets/form.css"; /* Import CSS riêng cho form (nếu có) */

.error-feedback {
    color: red;
}
</style>

---

### Các bước tiếp theo

1.  **Lưu file `ContactForm.vue`** vào thư mục **`src/components/`**.
2.  **Khởi động lại IDE** (VS Code) để nó nhận dạng component mới.
3.  **Chạy ứng dụng** bằng lệnh `npm run dev` (sau khi `cd vue-project`).

Lúc này, lỗi "báo đỏ" trong `ContactEdit.vue` sẽ biến mất và bạn có thể kiểm tra chức năng Thêm mới, Chỉnh sửa và Xóa trên trình duyệt.