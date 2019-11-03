const castVote = (name, votes) => {
    const tim = 'Tim';
    const sally = 'Sally';
    const beth = 'Beth';

    switch(name) {
        case tim:
            ++votes[0];
            break;
        case sally:
            ++votes[1];
            break;
        case beth:
            ++votes[2];
            break;
        default:
            console.log("No such candidate");
            break;
    }

    return votes;
}