// contact.route.js
const express = require("express");
const contacts = require("../controllers/contact.controller"); // Trỏ đến file controller

const router = express.Router();

router.route("/")
    .get(contacts.findAll)
    .post(contacts.create) // <-- Route POST cho chức năng Thêm mới
    .delete(contacts.deleteAll);

router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);

module.exports = router;