const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema(
  {
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

SpotSchema.virtual("thumbnail_url").get(function () {
  return `http://localhost:3333/files/${this.thumbnail}`;
});

SpotSchema.virtual("thumbnail_mobile_url").get(function () {
  return `http://192.168.1.34:3333/files/${this.thumbnail}`;
});

module.exports = mongoose.model("Spot", SpotSchema);
