const ticketTypes = ["red", "green", "blue"];
const countTickets = tickets =>
  tickets.reduce(
    (acc, cur) => (++acc[cur], acc),
    ticketTypes.reduce((acc, cur) => ((acc[cur] = 0), acc), {})
  );

const bestOdds = (tickets, raffleEntries) => {
  let ticketCounts = countTickets(tickets);
  let maxOdds = [0, "none"];
  for (let entry in raffleEntries) {
    let odd = ticketCounts[entry]
      ? ticketCounts[entry] / raffleEntries[entry]
      : 0;
    if (odd > maxOdds[0]) maxOdds = [odd, entry];
  }
  return `You have the best odds of winning the ${maxOdds[1]} raffle.`;
};
