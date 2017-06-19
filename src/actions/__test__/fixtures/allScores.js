export const allScoresModel = [
  {
    sum: '20',
    user_id: 1
  },
  {
    sum: '30',
    user_id: 2
  },
  {
    sum: '32',
    user_id: 3
  },
  {
    sum: '40',
    user_id: 4
  }
];

export const helper = (arr) => {
  const scoresObj = {};
  arr.forEach((score) => {
    scoresObj[score.user_id] = score.sum;
  })
  return scoresObj;
}
// export default allScoresModel;
