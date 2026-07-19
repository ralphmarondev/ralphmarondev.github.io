import{_ as l}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{u as m}from"./cSolvedProblems-CjgUliVp.js";import{C as f}from"./CodeBlock-Dq1Y_ZOo.js";import{O as p}from"./OutputBlock-3JjA_7_X.js";import{d,r,p as u,l as g,m as c,o as y,a as e,t as x,b as a,k as n}from"./index-DzB2MRah.js";const b="April 3, 2026",R=d({__name:"ReverseArray",setup(v){const s=m(),o=r(`
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

    printf("Original array: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    printf("\\nReversed array: ");
    for (int i = n - 1; i >= 0; i--)
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
Original array: 10 20 30 40 50
Reversed array: 50 40 30 20 10
`);return(E,t)=>(y(),u(l,{title:"C Programming",navigation:c(s).sections},{default:g(()=>[t[0]||(t[0]=e("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Reverse an Array",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+x(b)),t[1]||(t[1]=e("p",{class:"text-gray-600 mb-4 text-lg"},[a(" Imagine a magical row of numbered stones in a forest 🌲. A fairy asks you to flip the order of the stones so the last comes first, and the first goes last. "),e("br"),a(" This program demonstrates how to reverse the elements of an array in C — a practical skill for rearranging data efficiently. ")],-1)),t[2]||(t[2]=e("p",{class:"mt-4 text-lg font-semibold text-gray-800"},"Solution",-1)),n(f,{code:o.value,language:"c"},null,8,["code"]),t[3]||(t[3]=e("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),n(p,{output:i.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{R as default};
