console.log("hello dataAccess");
// localstorage toevoegen, getallitems alle dingen van de landen
// const dataacces selfevocing fucntnio en gaan
const localKey = "todo";
console.log(localStorage.getItem(localKey));
let todoArr = JSON.parse(localStorage.getItem(localKey));
console.log(todoArr);
if (todoArr === null) {
  todoArr = [];
}
const dataAccess = (function() {
  // module om te goan
  const addItem = function(todo) {
    todoArr.push(todo);
    localStorage.setItem(localKey, JSON.stringify(todoArr));
    console.log(localStorage.getItem(localKey));
  };
  return {
    addItem: addItem
  };
})();