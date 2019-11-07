//May need edge checking, better regex and refactor on switch.
const interviewAnswer = (topic) => {
    const artsRegex = /arts funding/;
    const ecoRegex = /economy/;
    const transRegex = /transportation/;
    let result = "";
    switch(true){
      case artsRegex.test(topic):
        result += "We'll have to get creative!";
        break;
      case ecoRegex.test(topic):
        result += "Time is money.";
        break;
      case transRegex.test(topic):
        result += "It's going to be a long road, so we better get moving."
        break;
      default:
        result += "QUACK!"
      break;
    }
    
    return result;
  }