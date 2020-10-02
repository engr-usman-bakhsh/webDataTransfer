// mediator is actually an interface for communicating between colleagues which are just mediator objects.
// one of its best example is a chat room
// its a full projects, we'll know about its fundamentals here
// we'll use two constructor functions one for the user and one for the chat room

const User = function(name){
this.name = name;
this.Chatroom = null;
}
User.prototype.send = function(message , to){
this.Chatroom.send(message , this, to)
}
User.prototype.recieve = function(message , from){
console.log(`${from.name} to ${this.name} : ${message}`);
}

const Chatroom = function(){
  let users = {} // list of users

  return {
    register: function(user){
      users[user.name] = user;
      user.Chatroom = this
    },
    send: function(message , from , to){
      if (to){
        // single user message
        to.recieve(message , from)
      }else{
        for (key in users){
          if(users[key] !== from){
            users[key].recieve(message,from)
          }
        }
      }
    }
  }
}

const usman = new User('usman');
const farooq = new User('farooq');
const ehsan = new User('ehsan');

const chatroom = new Chatroom();

chatroom.register(usman)
chatroom.register(farooq)
chatroom.register(ehsan)

usman.send('hello farooq', farooq)
ehsan.send('hello usman', usman)
// farooq.send('hello every one')