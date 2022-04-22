export class Comment {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.signature = data.signature
    this.postId = data.postId
  }

  get Template() {
    return `
    <div class="card card-body" id="${this.id}">
      <div>${this.body}</div>
      <h3>${this.signature}</h3>
    </div>
    `
  }
}
