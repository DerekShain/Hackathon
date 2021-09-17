import { Auth0Provider } from '@bcwdev/auth0provider'
import { postsService } from '../services/PostsService'
import BaseController from '../utils/BaseController'
import { logger } from '../utils/Logger'

export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getAllPosts)
      .get('/:id', this.getPostById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createPost)
      .delete('/:id', this.deletePost)
  }

  async deletePost(req, res, next) {
    try {
      const post = await postsService.deletePost(req.params.id, req.userInfo.id)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }

  async createPost(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const post = await postsService.createPost(req.body)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }

  async getPostById(req, res, next) {
    try {
      logger.log(req)
      const post = await postsService.getPostById(req.params.id)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }

  async getAllPosts(req, res, next) {
    try {
      const posts = await postsService.getAllPosts(req.query)
      res.send(posts)
    } catch (error) {
      next(error)
    }
  }
}
