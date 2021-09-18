export class Comment {
  constructor(commentData) {
    this.id = commentData.id
    this.comment = commentData.comment
    this.creatorId = commentData.creatorId
    this.postId = commentData.postId
  }

  get Template() {
    return /* html */ `
    <div class="text-center">
    <div>${this.comment}</div>
    </div>
    `
  }
}
