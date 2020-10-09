// Item Controller
const ItemController = (function() {
    // make a constructor
    const Items = function(id, name, calories) {
        this.name = name;
        this.id = id;
        this.calories = calories;
    }

    const data = {
        item: [],
        // item: StorageController.getItemsFromLocalStorage(),
        currentItem: null,

        totalCalories: 0
    };

    return {
        fetchItems: function() {
            return data.item;
        },
        addItemsToNewObject: function(name, calories) {

            // generate and ID
            let ID;
            if (data.item.length > 0) {
                ID = data.item[data.item.length - 1].id + 1;
            } else {
                ID = 0;
            }
            // convert calories to number
            calories = parseInt(calories);
            // create a new object 
            const newItem = new Items(ID, name, calories);
            // push the new item
            data.item.push(newItem);
            // return the new data
            return newItem;
        },
        addTotalCalories: function() {
            let total = 0;

            // loop through each item
            data.item.forEach(function(item) {
                    total = total + item.calories;
                })
                // set total calories in data structure
            data.totalCalories = total;

            return data.totalCalories;
        },
        getItemFromId: function(id) {
            let found = null;
            data.item.forEach(function(item) {
                if (item.id === id) {
                    found = item;
                }
            });
            return found;

        },
        updatedItem: function(name, calories) {
            // calories to number
            calories = parseInt(calories);

            let found = null;
            // loop through items
            data.item.forEach(function(item) {
                if (item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });
            return found;
        },
        deleteItem: function(id) {
            // get IDS
            const ids = data.item.map(function(item) {
                    return item.id;
                })
                // det index value
            const index = ids.indexOf(id);

            // splice the item

            data.item.splice(index, 1);
        },
        deleteAllItems: function() {
            data.item = [];
        },
        setCurrentEdittingItem: function(item) {
            data.currentItem = item;
        },
        getCurrentEdittingItem: function() {
            return data.currentItem;
        },
        logData: function() {
            return data;
        }
    }

})();


// UI controller
const UIController = (function() {
    const UISelectors = {
        container3: '.container3',
        addBtn: '#add-btn',
        listItems: '.listItems',
        meal: '#meal',
        calories: '#calories',
        totalCalories: '#total-calories',
        updateBtn: '#update-btn',
        deleteBtn: '#delete-btn',
        backBtn: '#back-btn',
        clearBtn: '#clear-btn'
    };


    return {
        populateItems: function(items) {
            let html = '';
            items.forEach(function(item) {
                html += `
      <div class="listItems" id="${item.id}">
          <li> Meal : ${item.name} </li>
          <li>Calories : ${item.calories} </li>
          <li><a href="#"><i class='fas fa-pen list-item' style='font-size:18px'>edit</i></a></li>
      </div>
      `
            });
            // Insert in UI
            document.querySelector(UISelectors.container3).innerHTML = html;
        },
        getInputItems: function() {
            return {
                name: document.querySelector(UISelectors.meal).value,
                calories: document.querySelector(UISelectors.calories).value
            }
        },
        addItemsToList: function(newItem) {
            // create a new div element
            const div = document.createElement('div');
            // add a class
            div.className = 'listItems';
            // add id
            div.id = `item-${newItem.id}`;
            // inser html
            div.innerHTML = `
      <li> Meal : ${newItem.name} </li>
      <li>Calories : ${newItem.calories} </li>
      <li><a href="#"><i class='fas fa-pen list-item' style='font-size:18px'>edit</i></a></li>
      `;
            // select a parentelement for insertint it
            document.querySelector(UISelectors.container3).appendChild(div);

        },
        updateListItems: function(item) {
            let listItems = document.querySelectorAll(UISelectors.listItems);
            // console.log(listitems);
            // convert Node to Array
            listItems = Array.from(listItems);
            // console.log(listitems);
            listItems.forEach(function(listItem) {
                // console.log(item)
                const itemID = listItem.getAttribute('id')

                if (itemID === `item-${item.id}`) {
                    document.querySelector(`#${itemID}`).innerHTML = `
          <li> Meal : ${item.name} </li>
          <li>Calories : ${item.calories} </li>
          <li><a href="#"><i class='fas fa-pen list-item' style='font-size:18px'>edit</i></a></li>
          `
                }
            });
        },
        deleteListItem: function(id) {
            const itemID = `#item-${id}`;
            // query selector
            const item = document.querySelector(itemID);
            item.remove();
        },
        removeItemsFromUI: function() {
            let listItems = document.querySelectorAll(UISelectors.listItems);
            // make an array
            listItems = Array.from(listItems);
            // loop through listItems for removing them
            listItems.forEach(function(item) {
                item.remove();
            })
        },
        clearTheFields: function() {
            document.querySelector(UISelectors.meal).value = '';
            document.querySelector(UISelectors.calories).value = '';
        },
        getCurrentEdittingItem: function() {
            this.clearTheFields();
            document.querySelector(UISelectors.meal).value = ItemController.getCurrentEdittingItem().name;
            document.querySelector(UISelectors.calories).value = ItemController.getCurrentEdittingItem().calories;
        },
        showTotalCalories: function(totalCalories) {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        clearEditState: function() {
            document.querySelector(UISelectors.addBtn).style.display = 'block';
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            UIController.clearTheFields();

        },
        showEditState: function() {
            document.querySelector(UISelectors.addBtn).style.display = 'none';
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
        },
        getSelectors: function() {
            return UISelectors;
        }
    }
})();

// App controller
const AppController = (function(ItemController, UIController) {
    // load event listeners
    const loadEventListeners = function() {
        const UISelectors = UIController.getSelectors();
        // event listeners
        document.querySelector(UISelectors.addBtn).addEventListener('click', submitInputItems);
        // disable item add with enter key
        document.querySelector('keypress', function(e) {
                if (e.keyCode === 13 || e.which === 13) {
                    e.preventDefault();
                    return false;
                }
            })
            // event for edit state
        document.querySelector(UISelectors.container3).addEventListener('click', itemEditSubmit);
        // event for update button
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);
        // event for back button
        document.querySelector(UISelectors.backBtn).addEventListener('click', UIController.clearEditState);
        // event for delete button
        document.querySelector(UISelectors.deleteBtn).addEventListener("click", removeSelectedItem);
        // clear all
        document.querySelector(UISelectors.clearBtn).addEventListener("click", clearAllItemsClick);
    }

    const submitInputItems = function() {
        const input = UIController.getInputItems();
        if (input.name !== '' && input.calories !== '') {
            // console.log(input);
            const newItem = ItemController.addItemsToNewObject(input.name, input.calories);
            // now add items to list
            UIController.addItemsToList(newItem);
            // add total calories
            const totalCalories = ItemController.addTotalCalories();
            // show total calories in UI
            UIController.showTotalCalories(totalCalories);
            // clear the fields after submitting
            UIController.clearTheFields();
        }
    }
    const itemEditSubmit = function(e) {
        if (e.target.className === 'fas fa-pen list-item') {
            const listId = e.target.parentNode.parentNode.parentNode.id;
            // split id and get specific number
            const listIdArr = listId.split('-')
                // exact id Number
            const id = parseInt(listIdArr[1])
                // get item for edit
            const getItemForEdit = ItemController.getItemFromId(id);
            // set current item
            ItemController.setCurrentEdittingItem(getItemForEdit);

            // fill the input fields with editing item
            UIController.getCurrentEdittingItem();
            // show the Update,delete,back button and hide the add button
            UIController.showEditState();

        }
        // e.preventDefault();
    }
    const itemUpdateSubmit = function(e) {
        // get item input
        const input = UIController.getInputItems();
        //Update Item
        const updatedItem = ItemController.updatedItem(input.name, input.calories);
        // update items in UI
        UIController.updateListItems(updatedItem);
        // add total calories
        const totalCalories = ItemController.addTotalCalories();
        // show total calories in UI
        UIController.showTotalCalories(totalCalories);
        // clear edit state
        UIController.clearEditState();

        e.preventDefault()
    };
    const removeSelectedItem = function(e) {
        const currentItem = ItemController.getCurrentEdittingItem();
        // deleting selected item
        ItemController.deleteItem(currentItem.id);
        //remove item from UI
        UIController.deleteListItem(currentItem.id);
        // add total calories
        const totalCalories = ItemController.addTotalCalories();
        // show total calories in UI
        UIController.showTotalCalories(totalCalories);
        // clear edit state
        UIController.clearEditState();

        e.preventDefault();
    }
    const clearAllItemsClick = function() {
        // remove items 
        ItemController.deleteAllItems();
        // remove Items from UI
        UIController.removeItemsFromUI();
        // add total calories
        const totalCalories = ItemController.addTotalCalories();
        // show total calories in UI
        UIController.showTotalCalories(totalCalories);
    }

    return {
        init: function() {
            // fetch items from data
            items = ItemController.fetchItems()
                // Populate these items in UI(firstly hardcodded)
            UIController.populateItems(items);
            // init load event listeners
            loadEventListeners();
            // Get Submitted items
            submitInputItems();
            // add total calories
            const totalCalories = ItemController.addTotalCalories();
            // show total calories in UI
            UIController.showTotalCalories(totalCalories);
            // hide the buttons except addBtn
            UIController.clearEditState();
        }
    }
})(ItemController, UIController);

AppController.init();