export class Post {
  constructor(data) {
    this.title = data.title
    this.id = data.id
    this.body = data.body
    this.image = data.image
    this.signature = data.signature
    this.upVote = data.upVote
    this.downVote = data.downVote
    this.totalVotes = data.totalVotes
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
        BUttons n stuff
      </div>
    </div>
    `
  }
}
