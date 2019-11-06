const castVote = (name, votes) => {
  // Code here!

  // Remember to return a value!
  switch (name) {
    case 'Tim':
      votes[0]++;
      return votes;
    case 'Sally':
      votes[1]++;
      return votes;
    case 'Beth':
      votes[2]++;
      return votes;
  }
}