const names = ['Tim', 'Sally', 'Beth']
const castVote = (name, votes) => {
  votes[names.indexOf(name)]++
  return votes
}
