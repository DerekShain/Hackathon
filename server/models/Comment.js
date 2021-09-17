import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const CommentSchema = new Schema({
  comment: { type: String, required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
  postId: {}
},
{ timestamps: true, toJSON: { virtuals: true } }
)
