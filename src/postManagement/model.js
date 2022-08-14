const mongoose = require("mongoose");
const paginate = require('mongoose-paginate');

const PostSchema = new mongoose.Schema({
    postId : { type: String, unique: true, required: true },
    postName : { type: String, required: true  },
    creadtedBy : { type: String },
    source: { type: String },
}, {
    timestamps: true,
    collection: "posts"
});

Schema.plugin(paginate);

module.exports = mongoose.model("PostSchema", PostSchema);