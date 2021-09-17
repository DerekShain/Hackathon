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
    <div class="card m-2 masonry-with-columns" style="width: 18rem; background: #F19953">
  <img src="${this.imgUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${this.name}</h5>
    <i class="fas fa-trash-alt ${this.creatorId !== ProxyState.account.id ? 'visually-hidden' : ''} selectable" onclick="app.postsController.deletePost('${this.id}')"></i>
    </div>
    </div>
  </div>
`
  }
}