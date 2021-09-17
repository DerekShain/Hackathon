import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class PostsService {
  async deletePost(postId, userId) {
    const post = await this.getPostById(postId)
    if (post.creatorId.toString() !== userId) {
      throw new Forbidden('This is not your Soup, bruh')
    }
    await dbContext.Posts.remove(post)
    return post
  }

  async createPost(body) {
    const post = await dbContext.Posts.create(body)
    return post
  }

  async getPostById(postId) {
    const post = dbContext.Posts.findById(postId)
    if (!post) {
      throw new BadRequest('Unable to find post')
    }
    return post
  }

  async getAllPosts(query) {
    const posts = await dbContext.Posts.find(query)
    return posts
  }
}
export const postsService = new PostsService()
