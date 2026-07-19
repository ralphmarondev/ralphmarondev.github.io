import{_ as s}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{u as l}from"./cSolvedProblems-CjgUliVp.js";import{C as d}from"./CodeBlock-Dq1Y_ZOo.js";import{O as m}from"./OutputBlock-3JjA_7_X.js";import{d as p,r as n,p as u,l as f,m as g,o as c,a as e,t as v,k as r}from"./index-DzB2MRah.js";const x="April 3, 2026",S=p({__name:"SeparateEvenOdd",setup(E){const a=l(),o=n(`
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
`),i=n(`
Enter size of array: 6
Enter element 1: 10
Enter element 2: 15
Enter element 3: 20
Enter element 4: 25
Enter element 5: 30
Enter element 6: 35
Even elements: 10 20 30
Odd elements: 15 25 35
`);return(C,t)=>(c(),u(s,{title:"C Programming",navigation:g(a).sections},{default:f(()=>[t[0]||(t[0]=e("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Separate Even and Odd Elements into Two Arrays",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+v(x)),t[1]||(t[1]=e("p",{class:"text-gray-600 mb-4 text-lg"}," Once upon a time in a land of numbers 🏰, the even knights and odd knights wanted to line up in their own groups. This program reads a list of numbers and separates them into two arrays: one containing all even numbers, and another containing all odd numbers. It’s a great way to learn conditional checks and array handling in C! ",-1)),t[2]||(t[2]=e("p",{class:"mt-4 text-lg font-semibold text-gray-800"},"Solution",-1)),r(d,{code:o.value,language:"c"},null,8,["code"]),t[3]||(t[3]=e("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),r(m,{output:i.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{S as default};
