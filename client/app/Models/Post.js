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
    <div class="flex-row row text-center d-flex text-wrap shadow border border-dark post-card mt-3">
      <div class="col-12 text-wrap">
        <img class="m-2" src="assets/img/Untitled_Artwork.png" height="150" alt="">
        <img class="post-img m-2 rounded-circle" src="${this.image}">
        <h3 class="text-wrap">${this.title}</h3>
        <h1 class="text-wrap">${this.body}</h1>
            <marquee direction="down" width="350" height="100" behavior="alternate">
            <marquee behavior="alternate">
              <h1><i class="text-wrap mdi mdi-comment selectable text-dark"  data-bs-toggle="collapse" data-bs-target="#collapseExample" onclick="app.postsController.getAllComments('${this.id}')"></i></h1>
              </marquee>
              </marquee>
              <marquee direction="down" width="450" height="100" behavior="alternate">
        <marquee behavior="alternate">
              <h1><i class="mdi mdi-delete selectable text-dark" onclick="app.postsController.deletePost('${this.id}')" ></i></h1>
              </marquee>
              </marquee>
              <marquee direction="down" width="150" height="100" behavior="alternate">
        <marquee behavior="alternate">
              <h1><i class="mdi mdi-wrench selectable text-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="app.postsController.openModal('${this.id}')" ></i></h1>
              </marquee>
              </marquee>
              <marquee direction="down" width="350" height="100" behavior="alternate">
        <marquee behavior="alternate">
              <h1><i class="mdi mdi-plus selectable text-dark" data-bs-toggle="modal" data-bs-target="#comment-exampleModal" onclick="app.commentsController.openCommentModal('${this.id}')"></i></h1>
              </marquee>
              </marquee>
        <p> ${this.signature} </p>

        </div>
        </div>
        </div>
        </div>
       
        <div class="collapse row" id="collapseExample">
          ${this.Comments}
          </div>
          </div>
        `
  }
}
