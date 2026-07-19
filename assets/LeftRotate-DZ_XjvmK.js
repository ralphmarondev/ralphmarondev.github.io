import{_ as s}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{C as l}from"./CodeBlock-Dq1Y_ZOo.js";import{O as m}from"./OutputBlock-3JjA_7_X.js";import{u as f}from"./cSolvedProblems-CjgUliVp.js";import{d as p,r,p as u,l as d,m as g,o as c,a as e,t as x,k as n}from"./index-DzB2MRah.js";const y="April 3, 2026",w=p({__name:"LeftRotate",setup(b){const o=f(),a=r(`
#include <stdio.h>

int main() {
    int n;

    printf("Enter size of array: ");
    scanf("%d", &n);

    int arr[n];
    for (int i = 0; i < n; i++) {
        printf("Enter element %d: ", i + 1);
        scanf("%d", &arr[i]);
    }

    int first = arr[0];
    for (int i = 0; i < n - 1; i++)
        arr[i] = arr[i + 1];
    arr[n - 1] = first;

    printf("Array after left rotation: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\\n");

    return 0;
}
`),i=r(`
Enter size of array: 5
Enter element 1: 10
Enter element 2: 20
Enter element 3: 30
Enter element 4: 40
Enter element 5: 50
Array after left rotation: 20 30 40 50 10
`);return(h,t)=>(c(),u(s,{title:"C Programming",navigation:g(o).sections},{default:d(()=>[t[0]||(t[0]=e("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Left Rotate an Array by One",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+x(y)),t[1]||(t[1]=e("p",{class:"text-gray-600 mb-4 text-lg"}," Once upon a time in a village of numbers 🌟, the first number in the line wanted to explore the end of the row. Left rotating an array moves each element one position to the left, and the first element goes to the last position. This program shows how to perform this rotation in C using simple loops. ",-1)),t[2]||(t[2]=e("p",{class:"mt-4 text-lg font-semibold text-gray-800"},"Solution",-1)),n(l,{code:a.value,language:"c"},null,8,["code"]),t[3]||(t[3]=e("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),n(m,{output:i.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{w as default};
