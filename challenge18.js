
const countTickets = (tickets) => {
  // Code here!
  let raffleEntries = {red: 0, green:0, blue:0};
  for(let ticket of tickets)
  {
    switch(ticket){
      case 'red': raffleEntries.red++; 
        break;
      case 'green': raffleEntries.green++; 
        break;
      case 'blue': raffleEntries.blue++;
        break;
    }
  }
  return raffleEntries;
}

const bestOdds = (tickets, raffleEntries) => {
  // Code here!
  const entries = countTickets(tickets);
  
  let redrate = entries.red / raffleEntries.red;
  let greenrate = entries.green / raffleEntries.green;
  let bluerate = entries.blue / raffleEntries.blue;
  
  if(redrate > greenrate && redrate > bluerate)
    return "You have the best odds of winning the red raffle.";
  else if(greenrate > redrate && greenrate > bluerate)
    return "You have the best odds of winning the green raffle.";
  else
    return "You have the best odds of winning the blue raffle.";
  
}
