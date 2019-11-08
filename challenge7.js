
const termTopics = (interviews) => {
    // Code here!
  
    // Remember to return an array!

    let topicCounts = [0, 0, 0];

    for (let i = 0; i < interviews.length; ++i) {
        if (interviews[i] === 'smart city')
            ++topicCounts[0];
        else if (interviews[i] === 'arts funding')
            ++topicCounts[1];
        else if (interviews[i] === 'transportation')
            ++topicCounts[2];
    }

    return topicCounts;
  }
  