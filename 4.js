const registerToVote = (name, unregisteredVoters) => {
  const idx = unregisteredVoters.indexOf(name)
  if (idx > -1) unregisteredVoters.splice(idx, 1)
  return unregisteredVoters
}
