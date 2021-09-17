import { ProxyState } from '../AppState'
import { Comment } from '../Models/Comment'
import { api } from './AxiosService'

class CommentService {
  async createComment(formData) {
    const res = await api.post('api/posts/:id/comments', formData)
    ProxyState.comments = [...ProxyState.comments, new Comment(res.data)]
  }
}

export const commentService = new CommentService()
