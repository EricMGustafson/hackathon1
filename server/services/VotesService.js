
import { dbContext } from '../db/DbContext.js'
import { Forbidden } from '../utils/Errors.js'

class VotesService {
  async getAllVotesByPost(postId) {
    const votes = await dbContext.Comments.find({ postId: postId }).populate('creator')
    return votes
  }

  async createVote(newVote) {
    const foundVote = await dbContext.Votes.findOne({ voteId: newVote.voteId, creatorId: newVote.creatorId })
    // if (foundVote) {
    //   throw new Forbidden('YOU CANNOT VOTE TWICE!')
    // }
    const createVote = await dbContext.Votes.create(newVote)
    return createVote
  }
}
export const votesService = new VotesService()
