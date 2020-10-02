// Select UI Variables
const form = document.querySelector('form');// form text
const addTask = document.querySelector('#addTaskText');// Form Submit Button
const filter = document.querySelector('#filter'); // filtering Tasks
const taskList = document.querySelector('.collection'); // list of tasks in ul tag
const clearButton = document.querySelector('#clearTask') // clear all tasks button

// All Event Listner
loadEventListner();

// load all event listner

function loadEventListner() { // all events will lie inside it
  // DOM load event ( to get data from local storage to browser)
  document.addEventListener('DOMContentLoaded', getTasks)
  // add task event
  form.addEventListener('submit', addTaskText)
  // Remove Task Event
  taskList.addEventListener('click', removeTask)
  // clear task events
  clearButton.addEventListener('click', clearAllTasks)
  // filter tasks events
  filter.addEventListener('keyup', filterTasks)

}

//////////////////////////////////////////////////////////////////
// Get TAsks from LocalStorage tp DOM
function getTasks(){
  let tasks;
  if (localStorage.getItem('tasks') === null){
    tasks = [];
  }else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.forEach(function(task){
    // create li element
    const li = document.createElement('li')
    // add class
    li.className = 'listItems';
    // create textNode and append to li
    li.appendChild(document.createTextNode(task))

    // there is a cross button inside the li tag
    const input = document.createElement('input')
    // add class list
    input.classList = 'cross delete';
    // type is button
    input.setAttribute('type','button')
    // set value
    input.setAttribute('value','X')
    // add button to li
    li.appendChild(input);

    // add li to ul
    taskList.appendChild(li)

  })
}

/////////////////////////////////////////////////////////////

// Add Task Text
function addTaskText(e) {
  if (addTask.value === '') {
    alert('Add a task')
  }
  else {
    // create li element
    const li = document.createElement('li')
    // add class
    li.className = 'listItems';
    // create textNode and append to li
    li.appendChild(document.createTextNode(addTask.value))

    // there is a cross button inside the li tag
    const input = document.createElement('input')
    // add class list
    input.classList = 'cross delete';
    // type is button
    input.setAttribute('type','button')
    // set value
    input.setAttribute('value','X')
    // add button to li
    li.appendChild(input);

    // add li to ul
    taskList.appendChild(li)

    // store tasks in local storage
    storeTaskInLocalStorage(addTask.value)

    // clear input after form submit
    addTask.value = '';

    // console.log(li);

  }
  e.preventDefault();
}
 /////////////////////////////////////////////////////////////////

 // Store Task
 function storeTaskInLocalStorage(task){
   let tasks;
   if (localStorage.getItem('tasks') === null){
     tasks = [];
   }else {
     tasks = JSON.parse(localStorage.getItem('tasks'))
   }
   tasks.push(task);

   localStorage.setItem('tasks', JSON.stringify(tasks))
 }

////////////////////////////////////////////////////////////////

// remove Task
function removeTask(e) {
  // first we have to target the element
  if (e.target.parentElement.classList.contains('listItems')) {
    // console.log(e.target)
    if (confirm('Are you sure ')) {
      e.target.parentElement.remove();

      // Remove from Local Storage
      removeTaskFromLocalStorage(e.target.parentElement);
    }
  }
}
////////////////////////////////////////////////////////////////
// remove from local storage
function removeTaskFromLocalStorage(taskItem){
   
  // console.log(taskItems)
  let tasks;
   if (localStorage.getItem('tasks') === null){
     tasks = [];
   }else {
     tasks = JSON.parse(localStorage.getItem('tasks'));
   }

   tasks.forEach(function(task,index){
     if (taskItem.textContent === task){
       tasks.splice(index, 1);
     }
   });
   localStorage.setItem('tasks',JSON.stringify(tasks));
}

///////////////////////////////////////////////////////////////

// clear all tasks

function clearAllTasks(e) {
  if (e.target.parentElement.classList.contains('delBtn')) {
    if (taskList.firstChild) {
      if (confirm('are you sure to delete all tasks')) {
        let confirm = prompt('carefully write this "Agree"')
        if (confirm === 'Agree') {
          // taskList.innerHTML = ''; // one method to delete all tasks, but its slow
          // other method is while loop
          // its faster method
          while (taskList.firstChild) { // if there is any first child is present than delete this first child. after deleting the first child second child will become the first child and it will also be deleted and so on;
            taskList.removeChild(taskList.firstChild);
          }
          alert('Deleted All Tasks')
        }
        else {
          alert('kindly ensure you follow the capital and small letter case and try again')
        }
      }}
      else {
        alert('There is no task for deletion')
      }
    }
    clearTasksFromLocalStorage()
  }
  //////////////////////////////////////////////////////////

  // Clear Tasks From Local Storage
function clearTasksFromLocalStorage(){
  localStorage.clear(); // its very easy
}
// Filter Tasks
function filterTasks(e) {
  let filterText = e.target.value.toLowerCase();
  // now select the whole task list and use forEach loop

  document.querySelectorAll('.listItems').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(filterText) != -1) {
      task.style.display = 'block'
    } else {
      task.style.display = 'none';
    }
  })

  // i tried my best to do it with fioloop but i didnt get success

  // const items = document.querySelectorAll('.listItems');
  // for (let i =0 ; i<items.length;i++){
  //   let item = items[i].textContent
  //   if (item.toLowerCase() === filterText ){
  //     item.style.display = 'block'
  //   }else {
  //     item.style.display = 'none'
  //   }
  //   // const item = items[i].firstChild.textContent;
}