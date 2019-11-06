const registerToVote = (name, unregisteredVoters) => {
    // Code here!
  
    // Remember to return a value!
    let remove = unregisteredVoters.indexOf(name);
    unregisteredVoters.splice(remove, 1);
    return unregisteredVoters
  }