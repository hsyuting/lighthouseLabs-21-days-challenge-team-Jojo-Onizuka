
const registerToVote = (name, unregisteredVoters) => {
    for (let i = 0; i < unregisteredVoters.length; ++i) {
        if (unregisteredVoters[i] == name) {
            unregisteredVoters.splice(i, 1);
            return unregisteredVoters;
        }
    }
}
  