(function() {
  document.addEventListener('DOMContentLoaded', function() {
    todoUI.setupTodoApp({
      titleClass: '.js-new-title',
      categoryClass: '.js-new-category',
      todoHolderClass: '.js-todos-items',
      todoCounterClass: '.js-todos-count',
      todoAddClass: '.js-new-add'
    });

    todoUI.handleNewTodo(function(title, category) {
      //doorgeven aan de todoModule, dit omdat we meerdere dingen moeten doen wanneer we een nieuwe todo aanmaken. o.a. opslaan in onze 'backend' localstorage.
      todoModule.addTodo(title, category);
      console.log(category);
    })
  });
})();