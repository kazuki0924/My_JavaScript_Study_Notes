// Check if an Object has a Property

// Now we can add, modify, and remove keys from objects. But what if we just wanted to know if an object has a specific property? JavaScript provides us with two different ways to do this. One uses the hasOwnProperty() method and the other uses the in keyword. If we have an object users with a property of Alan, we could check for its presence in either of the following ways:

// users.hasOwnProperty('Alan');
// 'Alan' in users;
// // both return true

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line
  if ( 'Alan', 'Jeff', 'Sarah', 'Ryan' in users) {
    return true;
  } else {
    return false;
  }
  // change code above this line
}

console.log(isEveryoneHere(users));

// true