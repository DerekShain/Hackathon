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
    <div class="d-flex justify-content-between px-5 py-1">
    <div>${this.comment}</div>
    <button class="btn btn-danger" onclick="app.commentsController.deleteComment('${this.id}')">-</button>
    </div>
    `
  }
}
