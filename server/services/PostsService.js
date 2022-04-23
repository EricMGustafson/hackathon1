import { dbContext } from '../db/DbContext.js'
import { BadRequest, Forbidden } from '../utils/Errors.js'
class PostsService {
  async edit(editedPost) {
    const orginal = await this.getById(editedPost.id)
    if (orginal.creatorId.toString() !== editedPost.creatorId) {
      throw new Forbidden('Not yours to edit')
    }
    orginal.image = editedPost.image || 'thiscatdoesnotexist.com'
    orginal.title = editedPost.title || orginal.title
    orginal.body = editedPost.body || orginal.body
    orginal.image = editedPost.image || orginal.image
    orginal.signature = editedPost.signature || orginal.signature
    await orginal.save()
    return orginal
  }

  async remove(id, userid) {
    const post = await this.getById(id)
    if (post.creatorId.toString() !== userid) {
      throw new Forbidden('Not yours to delete')
    }
    await dbContext.Posts.findByIdAndDelete(id)
  }

  async getById(id) {
    const post = await dbContext.Posts.findById(id).populate('creator')
    if (!post) {
      throw new BadRequest('Invalid Id')
    }
    return post
  }

  async create(body) {
    const post = await dbContext.Posts.create(body)
    await post.populate('creator')
    return post
  }

  async getAll() {
    return await dbContext.Posts.find({}).populate('creator')
  }
}

export const postsService = new PostsService()
