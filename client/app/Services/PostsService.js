import { ProxyState } from '../AppState.js'
import { Post } from '../Models/Post.js'
import { api } from './AxiosService.js'

class PostsService {
  async createPost(formData) {
    await api.post('api/posts', formData)
    ProxyState.posts = [...ProxyState.posts, new Post(formData)]
  }

  async editPost(formData) {
    const postId = formData.id
    await api.put('api/posts/' + postId, formData)
    const index = ProxyState.posts.findIndex(p => p.id === postId)
    const editedPost = new Post(formData)
    ProxyState.posts.splice(index, 1, editedPost)
    // eslint-disable-next-line no-self-assign
    ProxyState.posts = ProxyState.posts
  }

  async deletePost(postId) {
    await api.delete('api/posts/' + postId)
    // eslint-disable-next-line no-self-assign
    ProxyState.posts = ProxyState.posts.filter(p => p.id !== postId)
  }

  async getAllPosts() {
    const res = await api.get('api/posts')
    const posts = res.data.map(p => new Post(p))
    ProxyState.posts = posts
  }
}

export const postsService = new PostsService()
