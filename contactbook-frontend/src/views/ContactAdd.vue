<template>
  <div class="page">
    <h4>Thêm Liên hệ</h4>
    <ContactForm 
      :contact="contact" 
      @submit:contact="createContact" 
    />
    <p>{{ message }}</p>
  </div>
</template>

<script>
// Import các thành phần cần thiết
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
  components: {
    ContactForm, // Đăng ký component ContactForm
  },
  data() {
    return {
      // Khởi tạo contact là một đối tượng rỗng
      // để truyền vào ContactForm làm prop
      contact: {},
      message: "", //
    };
  },
  methods: {
    /**
     * Xử lý khi form được submit (tạo liên hệ mới)
     * Tương tự hàm updateContact ở trang Edit
     */
    async createContact(data) {
      try {
        // Gọi service 'create' thay vì 'update'
        await ContactService.create(data);
        
        // Hiển thị thông báo thành công
        alert("Liên hệ được thêm thành công.");
        
        // Chuyển về trang chủ (danh bạ)
        this.$router.push({ name: "contactbook" });
      } catch (error) {
        // Xử lý lỗi (ví dụ: hiển thị lỗi ra console)
        console.log(error);
      }
    },
  },
  /**
   * Trang "Thêm" không cần 'props' (như id)
   * và không cần 'created()' hook (để lấy dữ liệu) như trang "Edit"
   */
};
</script>

<style scoped>
/* Bạn có thể thêm CSS riêng cho trang này nếu cần */
.page {
  max-width: 400px;
  margin: auto;
}
</style>