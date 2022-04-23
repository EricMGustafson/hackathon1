import { api } from './AxiosService.js'
import { Comment } from '../Models/Comment.js'
import { ProxyState } from '../AppState.js'

class CommentsService {
  async createComment(formData) {
    await api.post('api/comments', formData)
    ProxyState.comments = [...ProxyState.comments, new Comment(formData)]
  }

  async editComment(formData) {
    const commentId = formData.id
    await api.put('api/comments/' + commentId, formData)
    const index = ProxyState.comments.findIndex(c => c.id === commentId)
    const editedComment = new Comment(formData)
    ProxyState.comments.splice(index, 1, editedComment)
    // eslint-disable-next-line no-self-assign
    ProxyState.comments = ProxyState.comments
  }

  async getAllComments() {
    const res = await api.get('api/comments')
    // eslint-disable-next-line no-console
    const comments = res.data.map(c => new Comment(c))
    ProxyState.comments = comments
  }
}

export const commentsService = new CommentsService()
