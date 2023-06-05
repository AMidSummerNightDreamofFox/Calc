#include <stdio.h>

int main()
{
    float score[10];
    int cnt1, cnt2, compare;
    // 배열에 학생 10명의 점수 입력받기
    printf("Insert the score of 10 students. \n");
    for(int cnt1 = 0; cnt1<10; cnt1++){
        printf("Insert the %dth student's grade", cnt1+1);
        scanf("%f", &score[cnt1]);
    }
    // 버블 정렬 반복문
    for(cnt2 = 0; cnt2 < 9; cnt2++) {
        for(cnt1 = 0; cnt1 < 9 - cnt2; cnt1++) {
            // 버블 정렬 조건문
            if(score[cnt1] < score[cnt1+1]) {
                compare = score[cnt1];
                score[cnt1] = score[cnt1 +1];
                score[cnt1+1] = compare;
            }
        }
    }
    // 정렬된 배열의 실수값 출력
    printf("The score list from the top to the bottom: \n");
    for(cnt1 = 0; cnt1 < 10; cnt1++){
        printf("%f", score[cnt1]);
        printf("\n");
    }
    return 0;
}