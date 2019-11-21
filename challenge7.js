
const termTopics = (interviews) => {
  // Code here!
  let topics = [0,0,0];
  
  for(const interview of interviews)
  {
    switch(interview)
    {
      case "smart city": topics[0]++; 
        break;
      case "arts funding": topics[1]++; 
        break;
      case "transportation": topics[2]++; 
        break;
    }
  }
  
  return topics;
  // Remember to return an array!
}
