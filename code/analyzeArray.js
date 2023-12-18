class Result {
  average = null;

  min = null;

  max = null;

  length = null;
}

function analyzeArray(array) {
  const answer = new Result();
  answer.length = array.length;

  // function findSum(numbers) {
  //   let sum = numbers.reduce(function (acc, current) {
  //     return acc + current;
  //   }, numbers[0]);
  // }

  function setAvg(numbers) {
    const sum = numbers.reduce((acc, current) => acc + current, numbers[0]);
    const avg = sum / answer.length;
    answer.average = Math.floor(avg);
  }

  const minValue = Math.min(...array);
  const maxValue = Math.max(...array);
  answer.min = minValue;
  answer.max = maxValue;
  setAvg(array);

  return answer;
}

module.exports = analyzeArray;
