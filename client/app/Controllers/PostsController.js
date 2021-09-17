import { ProxyState } from '../AppState.js'
import { postsService } from '../Services/PostsService.js'
import { getPostTemplate } from '../Forms/PostForm.js'
import { logger } from '../Utils/Logger.js'
// import { Post } from '../Models/Post.js'

function _drawPosts() {
  let template = ''
  ProxyState.posts.forEach((post) => (template += post.Template))
  document.getElementById('postings').innerHTML = template
}
export class PostsController {
  constructor() {
    ProxyState.on('posts', _drawPosts)
    ProxyState.on('account', _drawPosts)
    this.showPosts()
  }

  async addPost() {
    // eslint-disable-next-line no-undef
    event.preventDefault()
    /**
     * @type {HTMLFormElement}     *
     */
    // @ts-ignore
    // eslint-disable-next-line no-undef
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
    // eslint-disable-next-line no-undef
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
    // eslint-disable-next-line no-undef
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
        // eslint-disable-next-line no-undef
        Swal.fire({
          imageUrl: 'https://c.tenor.com/LFr4p6u51eUAAAAM/no-soup-for-you-seinfield.gif',
          imageWidth: 400,
          imageHeight: 200,
          showConfirmButton: false,
          timer: 2000
        })
      }
    })
  }

  async drawModal(postId, creatorId) {
    const post = await ProxyState.posts.find(p => p.id === postId)
    ProxyState.activePost = post
    // document.getElementById('soupModal').innerHTML = Post.ModalTemplate
  }
}
