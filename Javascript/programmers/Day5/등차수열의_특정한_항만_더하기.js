console.log(solution(3, 4, [true, false, false, true, true]));

function solution(a, d, included) {
  var sum = 0;
  for (var i = 0; i < included.length; i++) {
    if (included[i]) sum += a + i * d;
  }
  return sum;
}
