const voterTurnout = (voter_signatures, voter_ids) =>
  voter_signatures.length !== voter_ids.length
    ? false
    : voter_signatures.every((sig, i) => voter_ids[i] === sig)
    ? 'All clear, we can count the votes!'
    : 'FRAUD!'
