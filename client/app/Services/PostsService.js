import { ProxyState } from '../AppState.js'
import { Post } from '../Models/Post.js'
import { api } from './AxiosService.js'
class PostsService {
  async deletePost(postId) {
    await api.delete('api/posts/' + postId)
    ProxyState.posts = ProxyState.posts.filter(c => c.id !== postId)
  }

  async addPost(postData) {
    const res = await api.post('api/posts/', postData)
    ProxyState.posts = [...ProxyState.posts, new Post(res.data)]
  }

  async getPosts() {
    const res = await api.get('api/posts/')
    ProxyState.posts = res.data.map(c => new Post(c))
  }
}

// singleton pattern
export const postsService = new PostsService()