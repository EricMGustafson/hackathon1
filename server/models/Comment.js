import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const CommentSchema = new Schema({
  body: { type: String, required: true, minlength: 5, maxlength: 200 },
  signature: { type: String, required: true, minlength: 3, maxlength: 40 },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
  postId: { type: Schema.Types.ObjectId, required: true }
},
{ timestamps: true, toJSON: { virtuals: true } }
)

CommentSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
