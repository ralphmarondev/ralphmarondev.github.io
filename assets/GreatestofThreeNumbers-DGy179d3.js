import{_ as m}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{C as i}from"./CodeBlock-Dq1Y_ZOo.js";import{_ as u}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{O as p}from"./OutputBlock-3JjA_7_X.js";import{u as d}from"./cSolvedProblems-CjgUliVp.js";import{d as f,r as s,p as x,l as a,m as c,o as b,a as t,t as g,k as r}from"./index-DzB2MRah.js";const h="March 31, 2026",G=f({__name:"GreatestofThreeNumbers",setup(y){const n=d(),o=s(`
#include <stdio.h>

int main()
{
    int x, y, z, max;

    printf("Enter first number: ");
    scanf("%d", &x);

    printf("Enter second number: ");
    scanf("%d", &y);

    printf("Enter third number: ");
    scanf("%d", &z);

    max = x;
    if (y > max)
        max = y;
    if (z > max)
        max = z;

    printf("Greatest: %d\\n", max);
    return 0;
}
`),l=s(`
Enter first number: 12
Enter second number: 7
Enter third number: 19
Greatest: 19
`);return(_,e)=>(b(),x(m,{title:"C Programming",navigation:c(n).sections},{default:a(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Greatest of Three Numbers",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+g(h)),r(u,null,{default:a(()=>[...e[0]||(e[0]=[t("p",null,"In this exercise, we aim to determine the largest of three numbers entered by the user. The program should:",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Prompt the user to input three numbers"),t("li",null,"Compare the first number with the second and third"),t("li",null,"Update the maximum value if a larger number is found"),t("li",null,"Display the greatest number as the result")],-1)])]),_:1}),e[2]||(e[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Solution",-1)),r(i,{code:o.value,language:"c"},null,8,["code"]),e[3]||(e[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),r(p,{output:l.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{G as default};
