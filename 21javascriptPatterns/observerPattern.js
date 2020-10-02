// observer pattern allows us to subscribe and unsubscribe to certain events or certain functionality
// so it gives us a really nice subscription model and its one of the most interesting pattern.
// it can be used to notify the DOM of certain elements to be updated. angular js relies heavily on this pattern through event management within the scope.
// here we'll solve problems with prototypes and latter with ES6 classes
// we are making certain buttons to subscribe or unsubscribe from certain events.
// by using date object we'll make buttons to get seconds and miliseconds in console and than we'll handle these events


function EventObserver(){
   this.observer = [];
}
EventObserver.prototype.subscribe = function(fn){
  this.observer.push(fn);
  console.log(`you are subscribed to ${fn.name}`)
  }
  EventObserver.prototype.unSubscribe = function(fn){
    // filter out from the list whatever matches the callback function. if there is no match, the callback gets to stay on the list. the filter returns the new list and reassign the list of observer.
    this.observer = this.observer.filter(function(item){
      if (item !== fn){
        return item
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }
EventObserver.prototype.fire = function(){
  this.observer.forEach(function(item){
    item.call();
  })
}

// instantiate  an object
const click = new EventObserver();

// Event listner
document.querySelector('.sub-ms').addEventListener('click',function(){
  click.subscribe(getCurrentMiliSeconds);
});

document.querySelector('.unsub-ms').addEventListener('click',function(){
  click.unSubscribe(getCurrentMiliSeconds);
});

document.querySelector('.sub-s').addEventListener('click',function(){
  click.subscribe(getCurrentSeconds);
});

document.querySelector('.unsub-s').addEventListener('click',function(){
  click.unSubscribe(getCurrentSeconds);
});

document.querySelector('.fire').addEventListener('click',function(){
  click.fire();
});
// click handler
function getCurrentMiliSeconds(){
  console.log(`Current Miliseconds are ${new Date().getMilliseconds()}`);
}

function getCurrentSeconds(){
  console.log(`Current Seconds are ${new Date().getSeconds()}`);
}