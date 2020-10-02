class EventObserver {
  constructor(){
    this.observer = [];
  }

  subscribe(fn){
    this.observer.push(fn);
    console.log(`you are subscribed to ${fn.name}`)
  }
  unSubscribe(fn){
    // filter out from the list whatever matches the callback function. if there is no match, the callback gets to stay on the list. the filter returns the new list and reassign the list of observer.
    this.observer = this.observer.filter(function (item) {
      if (item !== fn) {
        return item
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }
  fire(){
    this.observer.forEach(function (item) {
      item.call();
    })
  }

}

// instantiate  an object
const click = new EventObserver();

// Event listner
document.querySelector('.sub-ms').addEventListener('click', function () {
  click.subscribe(getCurrentMiliSeconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unSubscribe(getCurrentMiliSeconds);
});

document.querySelector('.sub-s').addEventListener('click', function () {
  click.subscribe(getCurrentSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function () {
  click.unSubscribe(getCurrentSeconds);
});

document.querySelector('.fire').addEventListener('click', function () {
  click.fire();
});
// click handler
function getCurrentMiliSeconds() {
  console.log(`Current Miliseconds are ${new Date().getMilliseconds()}`);
}

function getCurrentSeconds() {
  console.log(`Current Seconds are ${new Date().getSeconds()}`);
}