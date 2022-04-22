import { Auth0Provider } from '@bcwdev/auth0provider'
import { votesService } from '../services/VotesService.js'
import BaseController from '../utils/BaseController.js'

export class VotesController extends BaseController {
  constructor() {
    super('api/votes')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createVote)
  }

  async createVote(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const createdVote = await votesService.createVote(req.body)
      res.send(createdVote)
    } catch (error) {
      next(error)
    }
  }
}
