import { dbContext } from '../db/DbContext.js'
import { BadRequest, Forbidden } from '../utils/Errors.js'
class PostsService {
  async create(body) {
    const post = await dbContext.Posts.create(body)
    await post.populate('creator', 'picture name')
    return post
  }
  async getAll() {
    return await dbContext.Posts.find({}).populate('creator', 'picture name')
  }

}

export const postsService = new PostsService()