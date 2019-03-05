// constructor pattern
// != class, een class heeft een constructor
// een constructor is géén self-evocing functie.
class Todo {
  constructor({
    title,
    category,
    status
  }) {
    Object.assign(this, {
      title,
      category,
      status
    });
  }
  generateDOMModel(id) {
    let todo = document.createElement('li');
    todo.classList.add('c-todo');
    todo.innerHTML = `<input class="c-input-option c-custom-input-option-hidden o-hide" type="checkbox" id="${this.id}" ${this.status ? 'checked="checked"': ''}>`;

    const todoLabel = document.createElement('label');
    todoLabel.setAttribute('for', id);
    todoLabel.classList.add('c-label', 'c-label--option', 'c-custom-input-option-label');
    todoLabel.innerHTML = `<span class="c-custom-input-option c-custom-input-option--checkbox">
          <svg class="c-custom-input-option__symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6.75">
            <path d="M4.75,9.5a1,1,0,0,1-.707-.293l-2.25-2.25A1,1,0,1,1,3.207,5.543L4.75,7.086,8.793,3.043a1,1,0,0,1,1.414,1.414l-4.75,4.75A1,1,0,0,1,4.75,9.5" transform="translate(-1.5 -2.75) scale(1)"></path>
          </svg>
        </span><div class="c-todo-list__content">
          <p>${this.title}</p>
          <p>${this.category}</p>
        </div>`;
    todo.appendChild(todoLabel);
  };
};