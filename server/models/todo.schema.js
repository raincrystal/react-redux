import mongoose from  "mongoose";
import mongoosePaginate  from "mongoose-paginate-v2";

const Schema = mongoose.Schema;


const todoSchema = new Schema({
        task: String,
        taskExpDate: Date,
        status: {
            type: String,
            enum: ["completed", "incomplete"],
            default: 'incomplete' 
        },
}, { timestamps: { createdAt: 'createdAt' }})

todoSchema.plugin(mongoosePaginate);

export const todoTask = mongoose.model("todoTask", todoSchema);

