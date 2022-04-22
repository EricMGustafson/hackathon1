import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from '../utils/BaseController.js'
import { postsService } from '../services/PostsService.js'

export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getAll)
      .get('/:id/comments', this.getAllCommentsByPost)
      .get('/:id/votes', this.getAllVotesByPost)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.remove)
  }
  async getAll(req, res, next) {
    try {
      const posts = await postsService.getAll()
      return res.send(posts)
    } catch (error) {
      next(error)
    }
  }
  async getAllCommentsByPost(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
  async getAllVotesByPost(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const post = await postsService.create(req.body)
      return res.send(post)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
  async remove(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
}