/*
Author: Nishant Kumar
Description: This file is used to create a schema and a model, which is then exported to an another file.
*/

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    physics: { type: Number, required: true},
    chemistry: { type: Number, required: true},
    maths: { type: Number, required: true},
    biology: { type: Number, required: true},
    english: { type: Number, required: true}

});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema); // model

module.exports = BlogPost;