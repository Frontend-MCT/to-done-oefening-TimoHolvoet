const todoModule = (function(title, category) {
  const addTodo = function(title, category) {
    console.log(title, category);
    const todo = new Todo({
      title: title,
      category: category
    });
    dataAccess.addItem(todo);
    //id = 0;
    //todoUI.appendTodo(todo.generateDOMModel(id));
  };

  return {
    addTodo: addTodo
  }
})();