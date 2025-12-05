const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    categories: [
      {
        type: String,
        enum: ["Exam", "Events", "Circulars", "General"], // extend as needed
        required: true,
      },
    ],
  },
  {
    timestamps: true, // adds createdAt & updatedAt automatically
  }
);

// ✅ Export model in CommonJS style
const Notice = mongoose.model("Notice", noticeSchema);
module.exports = Notice;
