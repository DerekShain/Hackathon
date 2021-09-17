import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class CommentsService {
  async deleteComment(commentId, userId) {
    const comment = await this.getComment(commentId)
    if (comment.creatorId.toString() !== userId) {
      throw new Forbidden("this ain't your comment, chief")
    }
    await dbContext.Comments.remove(comment)
    return comment
  }

  async addComment(body) {
    const comment = await dbContext.Comments.create(body)
    return comment
  }

  async getComment(commentId) {
    const comment = await dbContext.Comments.findById(commentId)
    if (!comment) {
      throw new BadRequest('No comment found')
    }
    return comment
  }

  async getComments(query) {
    const comments = await dbContext.Comments.find(query)
    return comments
  }
}

export const commentsService = new CommentsService()
