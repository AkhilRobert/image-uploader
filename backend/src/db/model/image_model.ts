import { Document, model, Schema, Model } from "mongoose";

export interface ImageDoc extends Document {
    name: string;
    added: Date;
    url: string;
}

const imageSchema: Schema = new Schema({
    name: String,
    added: Date,
    url: String,
});

const imageModel: Model<ImageDoc> = model("image", imageSchema);

export default imageModel;
