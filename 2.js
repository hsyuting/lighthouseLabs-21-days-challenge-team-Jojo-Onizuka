const responses = {
  'arts funding': "We'll have to get creative!",
  economy: 'Time is money.',
  transportation: "It's going to be a long road, so we better get moving."
}

const interviewAnswer = topic => responses[topic] || 'QUACK!'
