const express = require("express");
const {
  createNotice,
  getNotices,
  getNoticeById,
  updateNotice,
  deleteNotice,
} = require("../controller/noticeController");

const router = express.Router();

// CRUD routes
router.post("/", createNotice);       // Create notice
router.get("/", getNotices);          // Get all notices
router.get("/:id", getNoticeById);    // Get single notice
router.put("/:id", updateNotice);     // Update notice
router.delete("/:id", deleteNotice);  // Delete notice

module.exports = router;
