class ResultView {
  #parentElement = document.querySelector('.results');
  #data;
  render(data) {
    this.#data = data;
  }
  clear() {
    this.#parentElement.innerHTML = '';
  }
  RenderHtml() {
    const recipe = this.#data;
    recipe = this.#data;
    recipe.forEach(item => {
      let html = `<li class="preview">
      <a class="preview__link" href="#23456">
        <figure class="preview__fig">
          <img src="src/img/test-1.jpg" alt="Test" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__name">
            Pasta with Tomato Cream ...
          </h4>
          <p class="preview__publisher">The Pioneer Woman</p>
        </div>
      </a>
    </li>`;

      this.#parentElement.insertAdjacentHTML('afterbegin', html);
    });
  }
}
