export class Comment {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.signature = data.signature
    this.postId = data.postId
  }
}
