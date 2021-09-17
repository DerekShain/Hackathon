import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const PostSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String },
  posScore: { type: Number, default: 0 },
  negScore: { type: Number, default: 0 },
  imgUrl: { type: String, required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
},
{ timestamps: true, toJSON: { virtuals: true } }
)
