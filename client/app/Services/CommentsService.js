import { api } from './AxiosService.js'

class CommentsService {
  async getAllComments() {
    const res = await api.get('api/comments')
    // eslint-disable-next-line no-console
    console.log(res, 'comments')
  }
}

export const commentsService = new CommentsService()
