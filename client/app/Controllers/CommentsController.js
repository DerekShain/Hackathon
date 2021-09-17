import { ProxyState } from '../AppState.js'
import { commentService } from '../Services/CommentsService.js'

function _drawComments() {
  const template = ''
  document.getElementById('commentsSection').innerHTML = template
}

export class CommentController {
  constructor() {
    ProxyState.on('comments', _drawComments)
  }

  toggleForm() {
    document.getElementById('comment-form').classList.toggle('visually-hidden')
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
