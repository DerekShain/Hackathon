export class Comment {
  constructor(commentData) {
    this.id = commentData.id
    this.comment = commentData.comment
    this.creatorId = commentData.creatorId
    this.postId = commentData.postId
  }
}
