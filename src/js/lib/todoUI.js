const todoUI = function(todosArray) {
  let newTodo = {
    title: null,
    category: null
  }

  todoHolder = null,
    todoCounter = null,
    todoAddButton = null;

  const setupTodoApp = function({
    titleClass,
    categoryClass,
    todoHolderClass,
    todoCounterClass,
    todoAddClass
  }) {
    newTodo.title = document.querySelector(titleClass);
    newTodo.category = document.querySelector(categoryClass);
    todoHolder = document.querySelector(todoHolderClass);
    todoCounter = document.querySelector(todoCounterClass);
    todoAddButton = document.querySelector(todoAddClass);
  };

  const handleNewTodo = function(callback) {
    todoAddButton.addEventListener('click',
      function(e) {
        e.preventDefault();
        console.log("callback is being called");
        console.log(newTodo.category.value);
        callback(newTodo.title.value, newTodo.category.value);
      });
  };
  // const showHTML = (todosArray) {
  //   let todoHTML = '';
  //   for (const todo of todosArray) {
  //     todoHTML += todo.view();
  //     todoCounter += 1;
  //   }
  //   todoHolder.innerHTML = todoHTML;
  // };
  return {
    setupTodoApp: setupTodoApp,
    handleNewTodo: handleNewTodo
  };
}();