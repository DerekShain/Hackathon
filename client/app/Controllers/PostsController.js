import { ProxyState } from '../AppState.js'
import { postsService } from '../Services/PostsService.js'
import { getPostTemplate } from '../Forms/PostForm.js'
import { logger } from '../Utils/Logger.js'

function _drawPosts() {
  let template = ''
  ProxyState.posts.forEach((post) => (template += post.Template))
  document.getElementById('postings').innerHTML = template
}
export class PostsController {
  constructor() {
    ProxyState.on('posts', _drawPosts)
    this.showPosts()
  }

  async addPost() {
    event.preventDefault()
    /**
     * @type {HTMLFormElement}     *
     */
    // @ts-ignore
    const form = event.target
    const postData = {
      // @ts-ignore
      id: form.id.value,
      // @ts-ignore
      name: form.name.value,
      // category: form.category.value,
      // posScore: form.posScore.value,
      // negScore: form.negScore.value,
      imgUrl: form.imgUrl.value
    }
    try {
      await postsService.addPost(postData)
    } catch (error) {
      logger.log(error)
    }
    // @ts-ignore
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      // @ts-ignore
      title: 'New Soup Posted',
      showConfirmButton: false,
      timer: 1500
    })
    form.reset()
  }

  showPosts() {
    _drawPosts()
    document.getElementById('form').innerHTML = getPostTemplate()
    postsService.getPosts()
    logger.log('showing posts')
  }

  toggleForm() {
    document.getElementById('post-form').classList.toggle('visually-hidden')
  }

  async deletePost(postId) {
    // @ts-ignore
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async(result) => {
      if (result.isConfirmed) {
        await postsService.deletePost(postId)
        // @ts-ignore
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
      }
    })
  }
}
