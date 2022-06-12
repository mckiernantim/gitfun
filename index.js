function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  function addPersonAsFriend(personA, personB) {
    personA.friends.push(other);
    return personB;
  }
  
  module.exports = {
    createPerson,
    addPersonAsFriend,
  };