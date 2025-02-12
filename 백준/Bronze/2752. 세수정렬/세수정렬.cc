#include <stdio.h>
int array[4];
void swap(int *a, int *b) {
	int temp;
	temp = *a;
	*a = *b;
	*b = temp;
}
int main()
{
	int i, j, min, index;
	for (i = 0; i < 3; i++) {
		scanf("%d", &array[i]);
	}
	for (i = 0; i < 3; i++) {
		min = 1000001;
		for (j = i; j < 3; j++) {
			if (array[j] < min) {
				min = array[j];
				index = j;
			}
		}
		swap(&array[i], &array[index]);
	}
	for (i = 0; i < 3; i++) {
		printf("%d ", array[i]);
	}
	return 0;
}