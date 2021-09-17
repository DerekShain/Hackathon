import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CommentsService {
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
