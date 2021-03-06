import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PostSchema = new Schema({
  title: { type: String, required: true, maxlength: 40, minlength: 5 },
  body: { type: String, required: true, maxlength: 400, minlength: 5 },
  image: { type: String, default: 'https://thiscatdoesnotexist.com' },
  signature: { type: String, required: true, maxlength: 30, minlength: 5 },
  totalVotes: { type: Number },
  upVote: { type: Number },
  downVote: { type: Number },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

PostSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
