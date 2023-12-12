// 주사위 4개를 굴렸을 때 나오는 중복되는 수의 개수의 따라 다르게 연산

// 1) 모두 같다면 1111 * p
// if(a===b && b===c && c===d) 1111 * p

// 2) 세 개가 같다면 (10*p+q)²
// if(a===b && b===c || b===c && c===d) (10*p+q)**2

// 3) 두 개, 두 개 같다면 (p+q) * |p-q|
// if(a===b && c===d || b===c && a===d) (p+q) * Math.abs(p-q)

// 4) 두 개는 같고 다른 두 개는 서로 다를 경우, q*r
// if(a===b || b===c || c===d) q*r

// 5) 모두 다르다면 가장 작은 숫자 반환
// if(a!===b && b!===c && c!===d) Math.min(a,b,c,d)

function solution(a, b, c, d) {
  const elements = [a, b, c, d];
  // (key=요소 - value=요소가 등장한 횟수) 쌍을 담는 객체 생성
  const counts = {};
  elements.forEach((element) => {
    counts[element] = [a, b, c, d].filter((e) => e === element).length;
  });

  // 값을 기준으로 내림차순 해주기 위해 객체를 키-값 쌍의 배열로 변환
  const entries = Object.entries(counts);

  // 값을 기준으로 배열을 내림차순 정렬한다.
  const sortedArr = entries.sort((b, a) => a[1] - b[1]);

  // 구조 분해 할당을 이용해서 키 값을 p,q,r에 넣어준다.
  var [p, q, r] = sortedArr.map(([key, _]) => key);

  // counts 객체에 담겨있는 요소가 등장한 횟수를 비교하여 연산을 수행한다. (p,q,r이 counts객체의 key로 작용한다.)
  if (counts[p] === 4) return 1111 * p;
  else if (counts[p] === 3 && counts[q] === 1) return (10 * p + Number(q)) ** 2;
  else if (counts[p] === 2 && counts[q] === 2) return (Number(p) + Number(q)) * Math.abs(Number(p) - Number(q));
  else if (counts[p] === 2 && counts[q] === 1 && counts[r] === 1) return q * r;
  else return Math.min(a, b, c, d);
}
