import{_ as o}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{u}from"./cSolvedProblems-CjgUliVp.js";import{C as p}from"./CodeBlock-Dq1Y_ZOo.js";import{O as d}from"./OutputBlock-3JjA_7_X.js";import{_ as f}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{d as c,r as i,p as x,l,m as g,o as b,a as n,t as h,k as a,b as e}from"./index-DzB2MRah.js";const k="April 3, 2026",A=c({__name:"MinMaxArray",setup(y){const r=u(),s=i(`
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
`),m=i(`
Enter the number of elements: 5
Enter 5 elements:
12 7 25 3 18
Maximum element: 25
Minimum element: 3
`);return(v,t)=>(b(),x(o,{title:"C Programming",navigation:g(r).sections},{default:l(()=>[t[1]||(t[1]=n("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Find Maximum and Minimum in Array",-1)),n("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+h(k)),a(f,null,{default:l(()=>[...t[0]||(t[0]=[n("p",null," A treasure hunter collects gems of different values. He wants to know which gem is the most valuable and which one is the least valuable before selling them. ",-1),n("p",{class:"mt-2 font-medium"},[n("strong",null,"Task:"),e(" Read "),n("strong",null,"N numbers"),e(" into an array and find the "),n("strong",null,"maximum and minimum values"),e(". ")],-1),n("p",{class:"mt-2 font-medium text-gray-700"},"Steps to follow:",-1),n("ul",{class:"list-inside space-y-1 mt-1"},[n("li",null,[n("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[e("Read the number of gems "),n("code",null,"n")])]),n("li",null,[n("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},"Store the value of each gem in an array")]),n("li",null,[n("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[e("Initialize "),n("code",null,"max"),e(" and "),n("code",null,"min"),e(" with the first element")])]),n("li",null,[n("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[e("Traverse the array to update "),n("code",null,"max"),e(" and "),n("code",null,"min"),e(" using comparison")])])],-1)])]),_:1}),a(p,{code:s.value,language:"c"},null,8,["code"]),t[2]||(t[2]=n("p",{class:"mt-2 font-medium text-gray-700"},"Sample Output:",-1)),a(d,{output:m.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{A as default};
