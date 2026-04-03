import{_ as m}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-H05dFO26.js";import{C as o}from"./CodeBlock-v8De0bNZ.js";import{O as u}from"./OutputBlock-BXue0EeJ.js";import{_ as p}from"./TaskCard.vue_vue_type_script_setup_true_lang-ArSqQYBk.js";import{d,r as i,p as f,l,a as e,k as a,t as c,e as n,o as x}from"./index-wsbNYnid.js";import"./Footer.vue_vue_type_script_setup_true_lang-DH4TUafw.js";const g="April 3, 2026",B=d({__name:"MinMaxArray",setup(k){const r=i(`
#include <stdio.h>

int main() {
    int n;
    printf("Enter the number of elements: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d elements:\\n", n);
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    int max = arr[0];
    int min = arr[0];

    for(int i = 1; i < n; i++) {
        if(arr[i] > max) max = arr[i];
        if(arr[i] < min) min = arr[i];
    }

    printf("Maximum element: %d\\n", max);
    printf("Minimum element: %d\\n", min);

    return 0;
}
`),s=i(`
Enter the number of elements: 5
Enter 5 elements:
12 7 25 3 18
Maximum element: 25
Minimum element: 3
`);return(y,t)=>(x(),f(m,{title:"C Programming",link:"/c-solved-loops-arrays"},{default:l(()=>[t[1]||(t[1]=e("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Find Maximum and Minimum in Array",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+c(g)),a(p,null,{default:l(()=>[...t[0]||(t[0]=[e("p",null," A treasure hunter collects gems of different values. He wants to know which gem is the most valuable and which one is the least valuable before selling them. ",-1),e("p",{class:"mt-2 font-medium"},[e("strong",null,"Task:"),n(" Read "),e("strong",null,"N numbers"),n(" into an array and find the "),e("strong",null,"maximum and minimum values"),n(". ")],-1),e("p",{class:"mt-2 font-medium text-gray-700"},"Steps to follow:",-1),e("ul",{class:"list-inside space-y-1 mt-1"},[e("li",null,[e("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[n("Read the number of gems "),e("code",null,"n")])]),e("li",null,[e("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},"Store the value of each gem in an array")]),e("li",null,[e("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[n("Initialize "),e("code",null,"max"),n(" and "),e("code",null,"min"),n(" with the first element")])]),e("li",null,[e("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[n("Traverse the array to update "),e("code",null,"max"),n(" and "),e("code",null,"min"),n(" using comparison")])])],-1)])]),_:1}),a(o,{code:r.value,language:"c"},null,8,["code"]),t[2]||(t[2]=e("p",{class:"mt-2 font-medium text-gray-700"},"Sample Output:",-1)),a(u,{output:s.value},null,8,["output"])]),_:1}))}});export{B as default};
