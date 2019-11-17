const judgeVegetable = (vegetables, metric) =>
  vegetables.reduce(
    (acc, cur, index) => {
      if (cur[metric] > acc.metricMax) {
        acc.metricMax = cur[metric];
        acc.submitter = cur.submitter;
      }
      return index === vegetables.length - 1 ? acc.submitter : acc;
    },
    { metricMax: 0, submitter: "" }
  );
