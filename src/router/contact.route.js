// Thay thế bằng đường dẫn thực tế của bạn
const contacts = require("../controllers/contact.controller");

const express = require("express");
const router = express.Router();

router.route("/")
    .get(contacts.findAll) // GET /api/contacts/
    .post(contacts.create) // POST /api/contacts/ (Thêm mới)
    .delete(contacts.deleteAll); // DELETE /api/contacts/ (Xóa tất cả)

router.route("/favorite")
    .get(contacts.findAllFavorite); // GET /api/contacts/favorite

router.route("/:id")
    .get(contacts.findOne) // GET /api/contacts/:id
    .put(contacts.update) // PUT /api/contacts/:id
    .delete(contacts.delete); // DELETE /api/contacts/:id

module.exports = router;