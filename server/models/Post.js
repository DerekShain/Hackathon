import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const PostSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  score: { type: Number, default: 0 },
  imgUrl: { type: String, required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
},
{ timestamps: true, toJSON: { virtuals: true } }
)
