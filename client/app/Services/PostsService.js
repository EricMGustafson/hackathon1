import { ProxyState } from '../AppState.js'
import { Post } from '../Models/Post.js'
import { api } from './AxiosService.js'

class PostsService {
  async editPost(postId) {
    await api.put('api/posts/' + postId)
  }

  async deletePost(postId) {
    await api.delete('api/posts/' + postId)
    ProxyState.posts = ProxyState.posts
  }

  async getAllPosts() {
    const res = await api.get('api/posts')
    console.log('res posts', res)
    const posts = res.data.map(p => new Post(p))
    ProxyState.posts = posts
  }
}

export const postsService = new PostsService()
