const Notice = require("../models/notice");

// Create a new notice
const createNotice = async (req, res) => {
  try {
    const { title, description, categories } = req.body;
    const notice = await Notice.create({ title, description, categories });
    res.status(201).json(notice);
  } catch (error) {
    res.status(500).json({ message: "Error creating notice", details: error.message });
  }
};

const getNotices = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { categories: category } : {};
    const notices = await Notice.find(filter).sort({ createdAt: -1 });
    res.status(200).json(notices);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notices", details: error.message });
  }
};

const getNoticeById = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);
    if (!notice) return res.status(404).json({ message: "Notice not found" });
    res.status(200).json(notice);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notice", details: error.message });
  }
};

const updateNotice = async (req, res) => {
  try {
    const notice = await Notice.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!notice) return res.status(404).json({ message: "Notice not found" });
    res.status(200).json(notice);
  } catch (error) {
    res.status(500).json({ message: "Error updating notice", details: error.message });
  }
};

const deleteNotice = async (req, res) => {
  try {
    const notice = await Notice.findByIdAndDelete(req.params.id);
    if (!notice) return res.status(404).json({ message: "Notice not found" });
    res.status(200).json({ message: "Notice deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting notice", details: error.message });
  }
};

module.exports = {
  createNotice,
  getNotices,
  getNoticeById,
  updateNotice,
  deleteNotice,
};
