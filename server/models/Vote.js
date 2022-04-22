import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const VoteSchema = new Schema(
  {
    voted: { type: Boolean, default: true },
    postId: { type: Schema.Types.ObjectId, required: true, ref: 'Post' },
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

VoteSchema.index({ creatorId: 1, postId: 1 }, { unique: true })
