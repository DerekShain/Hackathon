import { ProxyState } from '../AppState.js'
import { commentService } from '../Services/CommentsService.js'
import { logger } from '../Utils/Logger.js'

function _drawComments() {
  let template = ''
  // eslint-disable-next-line no-return-assign
  ProxyState.activeComments.forEach(c => template += c.Template)
  document.getElementById('commentsSection').innerHTML = template
}

export class CommentsController {
  constructor() {
    ProxyState.on('activeComments', _drawComments)
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
    try {
      await commentService.createComment(formData)
    } catch (error) {
      logger.log(error)
    }
    // @ts-ignore
    form.reset()
  }

  async deleteComment(commentId) {
    await commentService.deleteComment(commentId)
  }
}
