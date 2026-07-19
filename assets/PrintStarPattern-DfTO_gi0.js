import{_ as i}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{u as l}from"./cSolvedProblems-CjgUliVp.js";import{C as m}from"./CodeBlock-Dq1Y_ZOo.js";import{O as p}from"./OutputBlock-3JjA_7_X.js";import{d as u,r as o,p as f,l as d,m as g,o as c,a as e,t as x,k as r}from"./index-DzB2MRah.js";const w="April 3, 2026",S=u({__name:"PrintStarPattern",setup(b){const a=l(),s=o(`
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
`),n=o(`
Enter number of rows: 5
*
* *
* * *
* * * *
* * * * *
`);return(y,t)=>(c(),f(i,{title:"C Programming",navigation:g(a).sections},{default:d(()=>[t[0]||(t[0]=e("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Print Star Patterns (Nested Loops)",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+x(w)),t[1]||(t[1]=e("p",{class:"text-gray-600 mb-4 text-lg"}," Once upon a time in a magical kingdom ✨, there was a wizard who loved arranging stars in perfect triangles. Each row of stars represented a level of the castle tower. This program uses nested loops in C to create such a triangular pattern of stars. By adjusting the number of rows, you control how tall the magical tower grows! ",-1)),t[2]||(t[2]=e("p",{class:"mt-4 text-lg font-semibold text-gray-800"},"Solution",-1)),r(m,{code:s.value,language:"c"},null,8,["code"]),t[3]||(t[3]=e("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),r(p,{output:n.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{S as default};
