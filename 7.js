const keyPhrases = ['smart city', 'arts funding', 'transportation']
const termTopics = interviews =>
  interviews.reduce((totals, phrase) => {
    const idx = keyPhrases.indexOf(phrase)
    if (idx > -1) totals[idx]++
    return totals
  }, Array.from({ length: keyPhrases.length }, () => 0))
