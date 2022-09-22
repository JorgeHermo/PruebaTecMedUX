const { Schema, model } = require("mongoose")

const catSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Cat name required"]
        },
        description: {
            type: String,
            required: [true, 'Description required'],
            minlength: [20, 'Min 20 characters']
        },
        breed: {
            type: String,
            required: [true, 'Specify breed']
        },
        imageUrl: {
            type: String,
            required: [true, 'Image required']
        }
    },
    {
        timestamps: true
    }
)

const Cat = model("Cat", catSchema)

module.exports = Cat