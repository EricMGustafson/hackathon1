import { dbContext } from '../db/DbContext.js'
import { BadRequest } from '../utils/Errors.js'
class CommentsService {
  async getAllComments() {
    const comments = await dbContext.Comments.find({}).populate('creator')
    return comments
  }

  async editComment(editedComment) {
    const original = await this.getCommentById(editedComment.id)
    original.body = editedComment.body || original.body
    await original.save()
    return original
  }

  async getCommentById(commentId) {
    const foundComment = await dbContext.Comments.findById(commentId)
    if (!foundComment) {
      throw new BadRequest('Dang comment aint there')
    }
    return foundComment
  }

  async deleteComment(commentId, userId) {
    const commentToDelete = await this.getCommentById(commentId)
    if (commentToDelete.creatorId.toString() !== userId) {
      throw new BadRequest('You aint the poster')
    }
    await commentToDelete.remove()
    return commentToDelete
  }

  async getAllCommentsByPost(postId) {
    const comments = await dbContext.Comments.find({ postId: postId }).populate('creator')
    return comments
  }

  async createComment(newComment) {
    return await dbContext.Comments.create(newComment)
  }
}
export const commentsService = new CommentsService()
