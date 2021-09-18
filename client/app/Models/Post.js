
import { ProxyState } from '../AppState.js'
export class Post {
  constructor(postData) {
    this.id = postData.id
    this.name = postData.name
    this.category = postData.category
    this.posScore = postData.posScore
    this.negScore = postData.negScore
    this.imgUrl = postData.imgUrl
    this.creatorId = postData.creatorId
  }

  get Template() {
    return /* html */ `
    <div class=" rounded-top m-2 masonry-with-columns" >
  <img src="${this.imgUrl}" class="card-img-top post-image" alt="..." onclick="app.postsController.getCommentsById('${this.id}', '${this.creatorId}')" data-bs-toggle="modal" data-bs-target="#exampleModal">

    <h5 class="card-title px-3 py-1">${this.name} <i class="fas fa-trash-alt ${this.creatorId !== ProxyState.account.id ? 'visually-hidden' : ''} selectable" onclick="app.postsController.deletePost('${this.id}')"></i></h5>
    
    </div>

`
  }

  get ModalTemplate() {
    return /* html */`
    <div class="modal-content">
    <div class="modal-header" style="background: #F19953">
      <h5 class="modal-title">${this.name}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body flex-wrap text-light" style="background: #374E78">
      <img src="${this.imgUrl}" class="card-img-top" alt="...">
      <div class="col-11">Text goes here</div>
      <i class="col-1 fas selectable fa-plus-circle pt-2" onclick="app.commentsController.toggleForm()"></i>
    </div>
    <div id="comment-form" class="visually-hidden modal-footer text-light " style="background: #374E78">
      <form onsubmit="app.commentsController.createComment()">
        <div class="input-group p-2">
          <input type="text" required class="form-control" name="comment" id="comment" label="Add Comment">
          <button class="btn btn-success justify-self-end" type="submit" style="background: #F19953"><i class="fas fa-plus-circle selectable"></i></button>
          </div>
      </form>
    </div>
    <div class="p-2 text-light" style="background: #374E78" id="commentsSection">
    </div>
  </div>
  `
  }
}
