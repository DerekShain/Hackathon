export function getPostTemplate() {
  return /* html */ `
  <form class="rounded p-3 shadow visually-hidden" onsubmit="app.carsController.addCar()" id="post-form">
  <div class="form-group">
  <label for="title">Title:</label>
  <input type="text" class="form-control" name="title" id="title" required>
  `
}
