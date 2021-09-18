import { ProxyState } from '../AppState.js'
import { commentService } from '../Services/CommentsService.js'

function _drawComments() {
  let template = ''
  const comments = ProxyState.comments.filter(c => c.id === ProxyState.activePost.id)
  // eslint-disable-next-line no-return-assign
  comments.forEach(c => template += c.Template)
  document.getElementById('commentsSection').innerHTML = template
}

export class CommentController {
  constructor() {
    ProxyState.on('comments', _drawComments)
    this.getComments()
  }

  toggleForm() {
    document.getElementById('comment-form').classList.toggle('visually-hidden')
  }

  async getComments() {
    const comments = commentService.getComments()
    return comments
  }

  async createComment() {
    // eslint-disable-next-line no-undef
    event.preventDefault()
    // eslint-disable-next-line no-undef
    const form = event.target
    const formData = {
      // @ts-ignore
      comment: form.comment.value
    }
    const Comment = commentService.createComment(formData)
    // @ts-ignore
    form.reset()
    return Comment
  }
}
