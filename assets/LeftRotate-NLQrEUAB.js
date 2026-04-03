import{_ as i}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-H05dFO26.js";import{C as s}from"./CodeBlock-v8De0bNZ.js";import{O as l}from"./OutputBlock-BXue0EeJ.js";import{d as m,r,p as f,l as p,a as e,k as n,t as u,o as d}from"./index-wsbNYnid.js";import"./Footer.vue_vue_type_script_setup_true_lang-DH4TUafw.js";const g="April 3, 2026",C=m({__name:"LeftRotate",setup(x){const o=r(`
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
`),a=r(`
Enter size of array: 5
Enter element 1: 10
Enter element 2: 20
Enter element 3: 30
Enter element 4: 40
Enter element 5: 50
Array after left rotation: 20 30 40 50 10
`);return(c,t)=>(d(),f(i,{title:"C Programming",link:"/c/arrays/left-rotate"},{default:p(()=>[t[0]||(t[0]=e("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Left Rotate an Array by One",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+u(g)),t[1]||(t[1]=e("p",{class:"text-gray-600 mb-4 text-lg"}," Once upon a time in a village of numbers 🌟, the first number in the line wanted to explore the end of the row. Left rotating an array moves each element one position to the left, and the first element goes to the last position. This program shows how to perform this rotation in C using simple loops. ",-1)),t[2]||(t[2]=e("p",{class:"mt-4 text-lg font-semibold text-gray-800"},"Solution",-1)),n(s,{code:o.value,language:"c"},null,8,["code"]),t[3]||(t[3]=e("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),n(l,{output:a.value},null,8,["output"])]),_:1}))}});export{C as default};
