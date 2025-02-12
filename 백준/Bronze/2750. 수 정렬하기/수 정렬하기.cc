#include <stdio.h>
int array[1001];
void swap(int *a, int *b) {
	int temp;
	temp = *a;
	*a = *b;
	*b = temp;
}
int main()
{
	int i, j, num, min, index;
	scanf("%d", &num);
	for (i = 0; i < num; i++) {
		scanf("%d", &array[i]);
	}
	for (i = 0; i < num; i++) {
		min = 1001;
		for (j = i; j < num; j++) {
			if (array[j] < min) {
				min = array[j];
				index = j;
			}
		}
		swap(&array[i], &array[index]);
	}
	for (i = 0; i < num; i++) {
		printf("%d\n", array[i]);
	}
	return 0;
}