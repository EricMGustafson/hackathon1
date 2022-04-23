import { ProxyState } from '../AppState.js'

export class Post {
  constructor(data) {
    this.title = data.title
    this.id = data._id
    this.body = data.body
    this.image = data.image
    this.signature = data.signature
    this.upVote = data.upVote
    this.downVote = data.downVote
    this.totalVotes = data.totalVotes
  }

  get Comments() {
    const comments = ProxyState.comments.filter(c => c.postId === this.id)
    let commentTemplate = ''
    // eslint-disable-next-line no-return-assign
    comments.forEach(c => commentTemplate += c.Template)
    return commentTemplate
  }

  get Template() {
    return `
    <div class="row text-center shadow border border-dark post-card mt-3">
      <div class="col-12">
        <h3>${this.title}</h3>
      </div>
      <div class="col-12">
        <h1>${this.body}</h1>
      </div>
      <div class="col-12">
        <h1><i class="mdi mdi-comment selectable text-dark"  data-bs-toggle="collapse" data-bs-target="#collapseExample" onclick="app.postsController.getAllComments('${this.id}')"></i></h1>
        <h1><i class="mdi mdi-delete selectable text-dark" onclick="app.postsController.deletePost('${this.id}')" ></i></h1>
        <h1><i class="mdi mdi-wrench selectable text-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="app.postsController.openModal('${this.id}')" ></i></h1>
      </div>
      <div class="col-12">
        <div class="collapse" id="collapseExample">
          ${this.Comments}
        </div>
      </div>
    </div>




    `
  }
}
