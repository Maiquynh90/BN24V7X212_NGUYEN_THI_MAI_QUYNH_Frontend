<script>
// ... import ContactService, ContactForm
export default {
    // ...
    methods: {
        async addContact(data) {
            try {
                await ContactService.create(data); // <-- Phải gọi hàm create
                this.$router.push({ name: "contactbook" }); // Chuyển hướng
            } catch (error) {
                // ... Xử lý lỗi
            }
        },
    },
};
</script>