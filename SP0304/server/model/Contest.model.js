import mongoose from "mongoose";

export const ContestSchema = new mongoose.Schema({

    contestId : {
        type: String,
        required: [true, "Please provide a contestId"]

    }, ques1d : {
        type: String,
        required: [true, "Please provide a ques1d"]

    }, ques1i : {
        type: String,
        required: [true, "Please provide a ques1i"]

    }, ques1o : {
        type: String,
        required: [true, "Please provide a ques1o"]

    }, ques2d : {
        type: String,
        required: [true, "Please provide a ques2d"]

    }, ques2i : {
        type: String,
        required: [true, "Please provide a ques2i"]

    }, ques2o : {
        type: String,
        required: [true, "Please provide a ques2o"]

    }, ques3d : {
        type: String,
        required: [true, "Please provide a ques3d"]

    }, ques3i : {
        type: String,
        required: [true, "Please provide a ques3i"]

    }, ques3o : {
        type: String,
        required: [true, "Please provide a ques3o"]

    }, start : {
        type: Date,

    }, end : {
        type: Date,
        
    }
});

export default mongoose.model.Contest || mongoose.model('Contest', ContestSchema);