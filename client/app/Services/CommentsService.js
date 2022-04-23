import { api } from './AxiosService.js'
import { Comment } from '../Models/Comment.js'
import { ProxyState } from '../AppState.js'

class CommentsService {
  async getAllComments() {
    const res = await api.get('api/comments')
    // eslint-disable-next-line no-console
    const comments = res.data.map(c => new Comment(c))
    ProxyState.comments = comments
  }
}

export const commentsService = new CommentsService()
