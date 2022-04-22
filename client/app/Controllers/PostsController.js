import { ProxyState } from '../AppState.js'
import { postsService } from '../Services/PostsService.js'

async function _drawPosts() {
  const posts = await ProxyState.posts.sort((a, z) => { return a.upVote - z.upVote })
  let template = ''
  // eslint-disable-next-line no-return-assign
  posts.forEach(p => template += p.Template)
  document.getElementById('post-draw').innerHTML = template
}

// async function _getControversial() {
//   let totalVote = await ProxyState.posts
//   console.log(totalVote, 'totalvotes');
//   // let voteScore = 0 


// }

export class PostsController {
  constructor() {
    ProxyState.on('posts', _drawPosts)
    _drawPosts()
    this.getAllPosts()
    // _getControversial()

  }

  async getAllPosts() {
    try {
      await postsService.getAllPosts()
    } catch (error) {
      console.log('get all error', error)
    }
  }

  async deletePost(postId) {
    try {
      await postsService.deletePost(postId)
    } catch (error) {
      console.log('Delete Post error', error)
    }
  }

  async editPost(postId, body) {
    try {
      await postsService.editPost(postId)
    } catch (error) {
      console.log('Edit Post error', error)
    }
  }
}
