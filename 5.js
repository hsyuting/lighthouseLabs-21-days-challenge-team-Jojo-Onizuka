const chooseStations = (stations) => stations.reduce((acc, cur) => {
    if(cur[1] >= 20 && (cur[2] === "school" || cur[2] === "community centre"))
      acc.push(cur[0]);
    return acc;
  }, []);