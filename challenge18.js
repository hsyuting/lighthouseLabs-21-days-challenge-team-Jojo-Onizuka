
const countTickets = (tickets) => {
    let count = {
      red: 0,
      green: 0,
      blue: 0
    };
    
    for (let i = 0; i < tickets.length; ++i) {
      switch(tickets[i]) {
        case 'red':
          ++count['red'];
          break;
        case 'green':
          ++count['green'];
          break;
        case 'blue':
          ++count['blue'];
          break;
      }
    }
    
    return count;
  }
  
  const bestOdds = (tickets, raffleEntries) => {
    let count = countTickets(tickets);
    let odds = 0;
    
    if (count['red'] / raffleEntries['red'] < count['green'] / raffleEntries['green']) {
      best = 'green';
      odds = count['green'] / raffleEntries['green'];
    } else {
      best = 'red'
      odds = count['red'] / raffleEntries['red'];
    }
    
    if (odds < count['blue'] / raffleEntries['blue'])
      best = 'blue'
      
    return 'You have the best odds of winning the ' + best + ' raffle.';
  }
  