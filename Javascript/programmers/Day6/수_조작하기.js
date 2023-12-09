console.log(solution(0, "wsdawsdassw"));

function solution(n, control) {
  control.split("").map((e) => {
    switch (e) {
      case "w":
        n += 1;
        break;
      case "s":
        n -= 1;
        break;
      case "d":
        n += 10;
        break;
      case "a":
        n -= 10;
        break;
    }
  });
  return n;
}
