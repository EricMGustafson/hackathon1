import { Comment } from '../Models/Comment.js'

export function getCommentForm(comment) {
  comment = comment || new Comment({})
  return `
  <form onsubmit="app.commentsController.updateComment('${comment.id}')">
    <div class="mb-3">
      <div>
        <label for="body" class="form-label">body</label>
        <textarea type="text" class="form-control" name="body" id="body"
          aria-describedby="body" placeholder="body..." min="5" max="250"
          required>${comment.body}</textarea>
      </div>
    </div>
    <div class="mb-3">
      <label for="signature" class="form-label" id="signature-label">Signature</label>
      <input id="signature" name="signature" type="text" class="form-control" aria-label="signature"
        aria-describedby="inputGroup-sizing-default" placeholder="Signature..." value="${comment.signature}">
    </div>
    <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Save changes</button>
        </div>
  </form>
  `
}
