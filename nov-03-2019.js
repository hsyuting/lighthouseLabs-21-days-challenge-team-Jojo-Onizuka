const castVote = (name, votes) => {
    if(name.includes("Tim") && votes[0]++ >= 0) return votes;
    else if(name.includes("Sally") && votes[1]++ >= 0) return votes;
    else {
      ++votes[2];
      return votes;
    }
  }
  