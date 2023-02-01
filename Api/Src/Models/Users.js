const { Schema, model, models } = require('mongoose');

// const Category = require("./category.js");
// const Brand = require("./brand.js");
// const Review = require("./review.js"); //Si se borra no funcionará .populate para los arreglos...
// const Question = require("./question.js");

const users = new Schema(
    {
        name:{
            type: String,
            required: true,
            unique: true,
            minLength: 5,
            maxLength: 50
        },
        lastName:{
            type: String,
            required: true,
            minLength: 5,
            maxLength: 50
        },
        kindOfPerson:{
            type: String,
            required: true,
            minLength:5,
            maxLength:15
        },
        eMail:{
            type: String,
            required: true,
            unique: true
        },
        location:{
            type: Schema.Types.ObjectId,
            ref: "Location",
            required: true,
        },
        telephone:{
            type: String,
            required: true,
            unique: true,
            minLength: 10
        },
        roll:{
            type: Boolean,
            default: false
        },
        active:{
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true
    })


    
module.exports = models["Users"] || model("Users", users);