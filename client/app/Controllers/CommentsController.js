/* eslint-disable no-console */
import { commentsService } from '../Services/CommentsService.js'

export class CommentsController {
  constructor() {
    console.log('ello from comm c')
    this.getAllComments()
  }

  async getAllComments() {
    try {
      await commentsService.getAllComments()
    } catch (error) {
      console.log('get all c', error)
    }
  }
}
