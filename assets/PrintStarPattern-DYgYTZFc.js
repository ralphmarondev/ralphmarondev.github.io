import{_ as n}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-H05dFO26.js";import{C as l}from"./CodeBlock-v8De0bNZ.js";import{O as i}from"./OutputBlock-BXue0EeJ.js";import{d as p,r as e,p as m,l as u,a as r,k as o,t as d,o as f}from"./index-wsbNYnid.js";import"./Footer.vue_vue_type_script_setup_true_lang-DH4TUafw.js";const g="April 3, 2026",C=p({__name:"PrintStarPattern",setup(c){const a=e(`
#include <stdio.h>

int main() {
    int n;

    printf("Enter number of rows: ");
    scanf("%d", &n);

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            printf("* ");
        }
        printf("\\n");
    }

    return 0;
}
`),s=e(`
Enter number of rows: 5
*
* *
* * *
* * * *
* * * * *
`);return(x,t)=>(f(),m(n,{title:"C Programming",link:"/c/loops/star-patterns"},{default:u(()=>[t[0]||(t[0]=r("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Print Star Patterns (Nested Loops)",-1)),r("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+d(g)),t[1]||(t[1]=r("p",{class:"text-gray-600 mb-4 text-lg"}," Once upon a time in a magical kingdom ✨, there was a wizard who loved arranging stars in perfect triangles. Each row of stars represented a level of the castle tower. This program uses nested loops in C to create such a triangular pattern of stars. By adjusting the number of rows, you control how tall the magical tower grows! ",-1)),t[2]||(t[2]=r("p",{class:"mt-4 text-lg font-semibold text-gray-800"},"Solution",-1)),o(l,{code:a.value,language:"c"},null,8,["code"]),t[3]||(t[3]=r("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),o(i,{output:s.value},null,8,["output"])]),_:1}))}});export{C as default};
