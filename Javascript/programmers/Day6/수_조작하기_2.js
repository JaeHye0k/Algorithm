function solution(numLog) {
  var result = "";
  for (var i = 1; i < numLog.length; i++) {
    switch ([...numLog][i] - [...numLog][i - 1]) {
      case 1:
        result += "w";
        break;
      case -1:
        result += "s";
        break;
      case 10:
        result += "d";
        break;
      case -10:
        result += "a";
        break;
    }
  }
  return result;
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]));
