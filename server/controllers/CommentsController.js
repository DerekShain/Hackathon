import { Auth0Provider } from '@bcwdev/auth0provider'
import { commentsService } from '../services/CommentsService'
import BaseController from '../utils/BaseController'

export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .get('', this.getComments)
      .get('/:id', this.getComment)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.addComment)
      .delete('/:id', this.deleteComment)
  }

  async addComment(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const comment = await commentsService.addComment(req.body)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async deleteComment(req, res, next) {
    try {
      const comment = await commentsService.deleteComment(req.params.id, req.userInfo.id)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async getComment(req, res, next) {
    try {
      const comment = await commentsService.getComment(req.params.id)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async getComments(req, res, next) {
    try {
      const comments = await commentsService.getComments(req.query)
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }
}
