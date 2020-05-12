export const formatScore = (score) => {
  const scoreArray = score.split("");
  let formattedScore = "";
  for (let i = 0; i < scoreArray.length; i++) {
    if (i === scoreArray.length - 3) {
      formattedScore = formattedScore.concat(".");
    }
    if (i === scoreArray.length - 2) {
      formattedScore = formattedScore.concat("k");
      break;
    }
    formattedScore = formattedScore.concat(scoreArray[i]);
  }
  return formattedScore;
};
