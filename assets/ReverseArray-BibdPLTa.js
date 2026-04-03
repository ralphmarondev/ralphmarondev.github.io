import{_ as o}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-H05dFO26.js";import{C as l}from"./CodeBlock-v8De0bNZ.js";import{O as m}from"./OutputBlock-BXue0EeJ.js";import{d as f,r,p,l as d,a as e,k as a,t as u,e as n,o as g}from"./index-wsbNYnid.js";import"./Footer.vue_vue_type_script_setup_true_lang-DH4TUafw.js";const y="April 3, 2026",O=f({__name:"ReverseArray",setup(c){const s=r(`
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
`);return(x,t)=>(g(),p(o,{title:"C Programming",link:"/c/arrays/reverse-array"},{default:d(()=>[t[0]||(t[0]=e("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Reverse an Array",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+u(y)),t[1]||(t[1]=e("p",{class:"text-gray-600 mb-4 text-lg"},[n(" Imagine a magical row of numbered stones in a forest 🌲. A fairy asks you to flip the order of the stones so the last comes first, and the first goes last. "),e("br"),n(" This program demonstrates how to reverse the elements of an array in C — a practical skill for rearranging data efficiently. ")],-1)),t[2]||(t[2]=e("p",{class:"mt-4 text-lg font-semibold text-gray-800"},"Solution",-1)),a(l,{code:s.value,language:"c"},null,8,["code"]),t[3]||(t[3]=e("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),a(m,{output:i.value},null,8,["output"])]),_:1}))}});export{O as default};
