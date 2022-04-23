/* eslint-disable no-console */

import { ProxyState } from '../AppState.js'
import { getCommentForm } from '../Components/CommentForm.js'
import { commentsService } from '../Services/CommentsService.js'

export class CommentsController {
  constructor() {
    console.log('ello from comm c')
    this.getAllComments()
  }

  async openCommentModal(commentId) {
    try {
      const commentData = await ProxyState.comments.find(p => p.id === commentId)
      document.getElementById('comment-create-edit-form').innerHTML = getCommentForm(commentData)
    } catch (error) {
      console.log('open modal error', error)
    }
  }

  async getAllComments() {
    try {
      await commentsService.getAllComments()
    } catch (error) {
      console.log('get all c', error)
    }
  }

  async handleSubmit(postId) {
    try {
      window.event.preventDefault()
      /** @type {HTMLFormElement} */
      // @ts-ignore
      const formElem = window.event.target
      const formData = {
        // @ts-ignore
        body: formElem.body.value,
        signature: formElem.signature.value
      }
      if (postId === 'undefined') {
        await commentsService.createComment(formData, postId)
      } else {
        formData.id = postId
        await commentsService.editComment(formData)
      }
    } catch (error) {
      console.log('Edit Post error', error)
    }
  }
}
