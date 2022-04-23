/* eslint-disable no-console */
import { ProxyState } from '../AppState.js'
import { getPostForm } from '../Components/PostForm.js'
import { commentsService } from '../Services/CommentsService.js'
import { postsService } from '../Services/PostsService.js'

async function _drawPosts() {
  const posts = await ProxyState.posts.sort((a, z) => { return a.upVote - z.upVote })
  let template = ''
  // eslint-disable-next-line no-return-assign
  posts.forEach(p => template += p.Template)
  document.getElementById('post-draw').innerHTML = template
  document.getElementById('create-edit-form').innerHTML = getPostForm()
}

// async function _drawAllComments(postId) {
//   // let template = ''
//   const comments = ProxyState.comments.filter(c => c.id === postId)
//   console.log(comments, 'draw c')
// }

// async function _getControversial() {
//   let totalVote = await ProxyState.posts
//   console.log(totalVote, 'totalvotes');
//   // let voteScore = 0
// }

export class PostsController {
  constructor() {
    ProxyState.on('posts', _drawPosts)
    // ProxyState.on('comments', _drawPosts)
    _drawPosts()
    this.getAllPosts()
    // _getControversial()
  }

  async openModal(postId) {
    try {
      const postData = await ProxyState.posts.find(p => p.id === postId)
      document.getElementById('create-edit-form').innerHTML = getPostForm(postData)
    } catch (error) {
      console.log('open modal error', error)
    }
  }

  async getAllPosts() {
    try {
      await postsService.getAllPosts()
    } catch (error) {
      console.log('get all error', error)
    }
  }

  async getAllComments() {
    try {
      await commentsService.getAllComments()
    } catch (error) {
      console.log('get all comments', error)
    }
  }

  async deletePost(postId) {
    try {
      await postsService.deletePost(postId)
    } catch (error) {
      console.log('Delete Post error', error)
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
        title: formElem.title.value,
        body: formElem.body.value,
        image: formElem.image.value,
        signature: formElem.signature.value
      }
      if (postId === 'undefined') {
        await postsService.createPost(formData)
      } else {
        formData.id = postId
        await postsService.editPost(formData)
      }
    } catch (error) {
      console.log('Edit Post error', error)
    }
  }
}
