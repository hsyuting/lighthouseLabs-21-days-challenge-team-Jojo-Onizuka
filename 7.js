const topics = [
    "smart city",
    "arts funding",
    "transportation"
  ];
  
  const termTopics = (interviews) => {
    let res = new Array(topics.length).fill(0);
    for(let interview of interviews){
      for(let i = 0; i < topics.length; ++i){
        if(interview === topics[i]){
          ++res[i];
          break;
        }
      }
    }
    return res;
  };