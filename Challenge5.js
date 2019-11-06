
const chooseStations = (stations) => {
    // Code here!

    // Remember to return a value!
    let names = [];
    for (let i = 0; i < stations.length; i++) {
        if (stations[i][1] >= 20 && (stations[i][2] === 'school' || stations[i][2] === 'community centre')) {
            names.push(stations[i][0]);
        }
    }
    return names;
}