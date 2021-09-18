import { ProxyState } from '../AppState.js'

export class Comment {
  constructor(commentData) {
    this.id = commentData.id
    this.comment = commentData.comment
    this.creatorId = commentData.creatorId
    this.postId = commentData.postId
    this.commentId = commentData.commentId
  }

  get Template() {
    return /* html */ `
    <div class="d-flex justify-content-between px-5 py-1 text-light" style="background: #374E78">
    <div>${this.comment}</div>
    <!--<button class="btn btn-danger" onclick="app.commentsController.deleteComment('${this.id}')">-</button>-->
    <i class="fas fa-trash-alt ${this.creatorId !== ProxyState.account.id ? 'visually-hidden' : ''} selectable" onclick="app.commentsController.deleteComment('${this.id}')"></i>
    </div>
    `
  }
}
