import { Post } from '../Models/Post.js'

export function getPostForm(post) {
  post = post || new Post({})
  return `
  <form onsubmit="app.postsController.handleSubmit('${post.id}')">
    <div class="mb-3">
      <label for="title" class="form-label" id="title-label">Title</label>
      <input id="title" name="title" type="text" class="form-control" aria-label="title"
        aria-describedby="inputGroup-sizing-default" placeholder="Title..." value="${post.title}">
    </div>
    <div class="mb-3">
      <div>
        <label for="image" class="form-label">Image Url</label>
        <input type="url" class="form-control" name="image" id="image" aria-describedby="image"
          placeholder="Image Url..." required value="${post.image}">
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="body" class="form-label">body</label>
        <textarea type="text" class="form-control" name="body" id="body"
          aria-describedby="body" placeholder="body..." min="5" max="250"
          required>${post.body}</textarea>
      </div>
    </div>
    <div class="mb-3">
      <label for="signature" class="form-label" id="signature-label">Signature</label>
      <input id="signature" name="signature" type="text" class="form-control" aria-label="signature"
        aria-describedby="inputGroup-sizing-default" placeholder="Signature..." value="${post.signature}">
    </div>
  </form>
  `
}
