// storage controller




//-------------------------------------------------------------


// Item Controller
const ItemController = (function(){
// Item cnstructor
const Item = function(id, name, calories){
  this.id = id;
  this.name = name;
  this.calories = calories;

}

// Data Structure / state
const data = {
  items: [
    {id: 0 , name: "chicken" , calories: 1200},
    {id: 0 , name: "Mutton" , calories: 800},
    {id: 0 , name: "Beef" , calories: 300},
    {id: 0 , name: "Egg" , calories: 200},
   ],
  currentItem: null, // when we want to edit the item that item will be current item
  totalCalories: 0
}

  // This is public method
return {
  logData: function(){
    return data
  },
  addItem: function(name , calories){
    // console.log(name,calories)
    // create Auto ID increment
    let ID;
    if(data.items.length > 0){
      ID = data.items[data.items.length -1].id +1;
    }else{
      ID = 0;
    }

    // calories to number
    calories = parseInt(calories)

    // create new Item
    newItem = new Item(ID , name, calories);

    // push new items to data structure
    data.items.push(newItem)

    return newItem
  },
  getItem: function(){
    return data.items;
  }
}
})();


//---------------------------------------------------------------

// UI controller
const UIController = (function(){
const UISelectors = { // we did this if in future we'll change the class name than we'll only change here and it will be changed everywhere automatically
  listItems: '.listItems',
  addBtn: '#add-btn',
  inputItemName: '#meal',
  inputItemCalories : '#calorie'
}


  // This is public method
return {
  populateListItems: function(items){
    let html ='';
    items.forEach(function(item){
      html += `
      <div class="container2" id="${item.id}">
        <li> Meal : ${item.name} </li>
        <li>Calories : ${item.calories} </li>
        <li><a href="#"><i class='fas fa-pen' style='font-size:18px'></i></a></li>
      </div>
      `
    });
    // Insert in the UI
    document.querySelector(UISelectors.listItems).innerHTML = html;
  },
  getItemInput: function(){
    return {
      name: document.querySelector(UISelectors.inputItemName).value,
      calories: document.querySelector(UISelectors.inputItemCalories).value
    }
  },
  addListItems : function(item){
    // create DIV element inwhich data is present
    const div = document.createElement('div');
    // add a class
    div.className = 'container2';
    //add id
    div.id = `item-${item.id}`;
    // Add Html
    div.innerHTML = `
    <li> Meal : ${item.name} </li>
    <li>Calories : ${item.calories} </li>
    <li><a href="#"><i class='fas fa-pen' style='font-size:18px'></i></a></li>
    `;
    // inser item
    document.querySelector(UISelectors.listItems).appendChild(div);
    
  }, 
  clearFields: function(){
    document.querySelector(UISelectors.inputItemName).value = '';
    document.querySelector(UISelectors.inputItemCalories).value = '';
  },
  getSelectors: function(){
    return UISelectors;
  }
  }
})();


//---------------------------------------------------------------


// App controller
const App = (function(ItemController,UIController){
  const loadEventListners = function(){
    const UISelectors = UIController.getSelectors();

    document.querySelector(UISelectors.addBtn).addEventListener('click', itemSubmit)

  }

  // Item Submit
  const itemSubmit = function(e){
    const input = UIController.getItemInput();

    if(input.name !== '' && input.calories !== ''){
      const newItem = ItemController.addItem(input.name,input.calories);
      // Add items to list
      UIController.addListItems(newItem)
      // clear fields
      UIController.clearFields();
    }
    e.preventDefault();
  }

  // This is public method
return {
  init: function(){
  //  console.log(ItemController.getItem())

  // Fetch items from data structures

  const items = ItemController.getItem()
  // console.log(items)

  // Populate list items   in the UI
  UIController.populateListItems(items)

  // call for load event listners
  loadEventListners()
  }
}

})(ItemController,UIController); // here we are invoking(calling) the function


//----------------------------------------------------------------
App.init()