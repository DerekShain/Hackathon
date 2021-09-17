import { ProxyState } from '../AppState.js'
import { Comment } from '../Models/Comment.js'
import { api } from './AxiosService.js'

class CommentService {
  async getComments() {

  }

  async createComment(formData) {
    formData.postId = ProxyState.activePost.id
    const res = await api.post('api/posts/:id/comments', formData)
    ProxyState.comments = [...ProxyState.comments, new Comment(res.data)]
  }
}

export const commentService = new CommentService()
