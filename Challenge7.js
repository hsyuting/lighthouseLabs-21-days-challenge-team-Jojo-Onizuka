const termTopics = (interviews) => {
    // Code here!
  
    // Remember to return an array!
    let responses = [0, 0, 0];
   
    for(let i = 0; i < interviews.length; ++i) {
      switch(interviews[i]) {
        case 'smart city' :
          responses[0]++;
          break;
        case 'arts funding' :
          responses[1]++;
          break;
        case 'transportation' :
          responses[2]++;
          break;
        default:
          break;
      }
    }
    return responses;
  }