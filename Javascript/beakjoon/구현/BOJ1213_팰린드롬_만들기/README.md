# 팰린드롬 만들기

---

## 팰린드롬이란?

거꾸로 읽어도 제대로 읽는 것과 같은 문장이나 낱말, 숫자, 문자열 등

## 접근법

-   알파벳의 개수가 홀수일 경우 한 개는 가장 가운데에 들어가야 하고, 나머지는 양쪽으로 몰아놔야 한다.
-   알파벳의 개수가 짝수일 경우 양쪽으로 몰아놔야 한다.
-   개수가 홀수인 알파벳이 2개 이상이면 팰린드롬이 될 수 없다.
-   사전순으로 앞서는 것을 출력하려면 사전순으로 빠른 알파벳이 팰린드롬의 앞쪽에 있으면 된다. 따라서 팰린드롬을 만들때 'A'부터 배치해준다.
-   알파벳을 양쪽으로 몰아넣기 위해서는 왼쪽 인덱스, 오른쪽 인덱스가 필요하다.
-   알파벳과 개수를 키-값 쌍으로 저장해놓는다.
