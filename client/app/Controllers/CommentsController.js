export class CommentController {
  constructor() {
    console.log('Hello From the Comment Controller')
  }

  toggleForm() {
    document.getElementById('comment-form').classList.toggle('visually-hidden')
  }
}
