// factory pattern in javascript is a way of creating an interface for creating objectsbut we can let subclasses define which classes to instantiate.
// factory methods are often used in application to manage and maintain and manipulate collections of objects that are different but at the same time have many common characteristics and the good example that would be a MEMBER
// let's say some kind of paid membership application or website where your member may have different types but still have same properties and methods.

// we are going to create a memberFactory that takes a member type and creates a new object based on that type,

function MemberFactory() {
  this.createMember = function (name, type) {
    let member;
    //checking the type that are passd. let we have three types of memberships, a simple membership, a standard membership and a super membership
    // it may be a web hosting application

    if (type === 'simple') {
      member = new SimpleMembership(name);

    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }
    member.type = type

    member.define = function () {
      console.log(`${this.name} ${this.type} : ${this.cost} `)
    }
    return member;
  }
  // now we have to create our constructors for our membership types(subclasses)

}

const SimpleMembership = function (name) {
  this.name = name;
  this.cost = '5$'
}

const StandardMembership = function (name) {
  this.name = name;
  this.cost = '15$'
}
const SuperMembership = function (name) {
  this.name = name;
  this.cost = '25$'
}

const members = [];

// define our factory
const factory = new MemberFactory();

// add members
members.push(factory.createMember('usman','simple'))
members.push(factory.createMember('ehsan','standard'))
members.push(factory.createMember('farooq','super'))
console.log(members)

// loop through the member
members.forEach(function(member){
  member.define();
})