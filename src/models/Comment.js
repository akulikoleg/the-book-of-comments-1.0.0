/*
const mongoose = require('mongoose');
const {model, Schema} = require('mongoose');
mongoose.Schema.Types.String.set('trim', true);

const commentSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    title: String,
    description: String

});

module.exports = model('Comment', commentSchema );
*/

const { model, Schema} = require('mongoose')
const mongoose = require("mongoose");
mongoose.Schema.Types.String.set('trim', true);

const commentSchema =

  new Schema({
    _id: mongoose.Schema.Types.ObjectId,

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },

   createdAt: String,

    rating: Number,

    title: String,

    description: String,

  });

module.exports = model('Comment', commentSchema)



