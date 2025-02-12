#include <iostream>
#include <cstdio>

using namespace std;
int main()
{
	char array[8][9];
	for (int i = 0; i < 8; i++) {
		scanf("%s", array[i]);
	}
	int cnt = 0;
	for (int i = 0; i < 8; i++) {
		for (int j = 0; j < 8; j++) {
			if ((i + j) % 2 == 0 && array[i][j] == 'F') {
				cnt++; //흰색칸에 있는 말의 갯수
			}
		}
	}
	printf("%d\n", cnt);
	return 0;
}