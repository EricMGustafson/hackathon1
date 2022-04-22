import mongoose, { SchemaTypes } from 'mongoose'
const Schema = mongoose.Schema
export const CommentSchema = new Schema({
  body: { type: String, required: true, minlength: 5, maxlength: 75 },
  signature: { type: String, required: true, minlength: 3, maxlength: 10 },
  creatorId: {type: SchemaTypes.ObjectId, ref: 'Account', required: true}
  



})
CommentSchema.virtual('creator',{
  localField: 'creator'
})