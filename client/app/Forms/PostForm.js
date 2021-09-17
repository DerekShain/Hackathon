export function getPostTemplate() {
  return /* html */ `
  <form class="rounded p-2 mt-5 mx-3 shadow visually-hidden" onsubmit="app.postsController.addPost()" id="post-form">
  <div class="form-group">
  <label for="name">Title:</label>
  <input type="text" class="form-control" name="name" id="name" required>
  </div>

  <div class="form-group">
  <label for="imgUrl">Image:</label>
  <input type="url" class="form-control" name="imgUrl" id="imgUrl" required>
  </div>
  <div class="button-group my-3">
    <button type="submit" class="btn btn-secondary">Submit</button>
    </div>
  </form>
  `
}
