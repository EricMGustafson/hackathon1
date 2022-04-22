import { dbContext } from '../db/DbContext.js'
class CommentsService {
  async createComment(newComment) {
    return await dbContext.Comments.create(newComment)
  }
}
export const commentsService = new CommentsService()
