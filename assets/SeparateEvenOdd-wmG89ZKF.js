import{_ as i}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-wnLsKI1e.js";import{C as s}from"./CodeBlock-D8cbajus.js";import{O as d}from"./OutputBlock-DBUi5rzu.js";import{d as l,r as n,p as m,l as p,a as t,k as r,t as u,o as f}from"./index-BoiLWSy3.js";import"./Footer.vue_vue_type_script_setup_true_lang-CUCs2pT8.js";const g="April 3, 2026",k=l({__name:"SeparateEvenOdd",setup(c){const a=n(`
#include <stdio.h>

int main() {
    int n;

    printf("Enter size of array: ");
    scanf("%d", &n);

    int arr[n], even[n], odd[n];
    int evenCount = 0, oddCount = 0;

    for (int i = 0; i < n; i++) {
        printf("Enter element %d: ", i + 1);
        scanf("%d", &arr[i]);
        if (arr[i] % 2 == 0)
            even[evenCount++] = arr[i];
        else
            odd[oddCount++] = arr[i];
    }

    printf("Even elements: ");
    for (int i = 0; i < evenCount; i++)
        printf("%d ", even[i]);
    printf("\\n");

    printf("Odd elements: ");
    for (int i = 0; i < oddCount; i++)
        printf("%d ", odd[i]);
    printf("\\n");

    return 0;
}
`),o=n(`
Enter size of array: 6
Enter element 1: 10
Enter element 2: 15
Enter element 3: 20
Enter element 4: 25
Enter element 5: 30
Enter element 6: 35
Even elements: 10 20 30
Odd elements: 15 25 35
`);return(v,e)=>(f(),m(i,{title:"C Programming",link:"/c/arrays/separate-even-odd"},{default:p(()=>[e[0]||(e[0]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Separate Even and Odd Elements into Two Arrays",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+u(g)),e[1]||(e[1]=t("p",{class:"text-gray-600 mb-4 text-lg"}," Once upon a time in a land of numbers 🏰, the even knights and odd knights wanted to line up in their own groups. This program reads a list of numbers and separates them into two arrays: one containing all even numbers, and another containing all odd numbers. It’s a great way to learn conditional checks and array handling in C! ",-1)),e[2]||(e[2]=t("p",{class:"mt-4 text-lg font-semibold text-gray-800"},"Solution",-1)),r(s,{code:a.value,language:"c"},null,8,["code"]),e[3]||(e[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),r(d,{output:o.value},null,8,["output"])]),_:1}))}});export{k as default};
