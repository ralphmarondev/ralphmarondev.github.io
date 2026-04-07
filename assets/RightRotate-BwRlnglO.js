import{_ as o}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-wnLsKI1e.js";import{C as s}from"./CodeBlock-D8cbajus.js";import{O as l}from"./OutputBlock-DBUi5rzu.js";import{d as m,r,p,l as f,a as e,k as a,t as g,o as d}from"./index-BoiLWSy3.js";import"./Footer.vue_vue_type_script_setup_true_lang-CUCs2pT8.js";const u="April 3, 2026",C=m({__name:"RightRotate",setup(c){const n=r(`
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

    int last = arr[n - 1];
    for (int i = n - 1; i > 0; i--)
        arr[i] = arr[i - 1];
    arr[0] = last;

    printf("Array after right rotation: ");
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
Array after right rotation: 50 10 20 30 40
`);return(h,t)=>(d(),p(o,{title:"C Programming",link:"/c/arrays/right-rotate"},{default:f(()=>[t[0]||(t[0]=e("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Right Rotate an Array by One",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+g(u)),t[1]||(t[1]=e("p",{class:"text-gray-600 mb-4 text-lg"}," Imagine a magical parade of numbers 🏰, where the last number wants to lead the line. Right rotating an array shifts each element one position to the right, and the last element moves to the first position. This program demonstrates how to accomplish a right rotation in C using a simple loop. ",-1)),t[2]||(t[2]=e("p",{class:"mt-4 text-lg font-semibold text-gray-800"},"Solution",-1)),a(s,{code:n.value,language:"c"},null,8,["code"]),t[3]||(t[3]=e("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),a(l,{output:i.value},null,8,["output"])]),_:1}))}});export{C as default};
