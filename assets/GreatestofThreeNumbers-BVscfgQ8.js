import{_ as o}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-wnLsKI1e.js";import{C as l}from"./CodeBlock-D8cbajus.js";import{_ as i}from"./TaskCard.vue_vue_type_script_setup_true_lang-BME11E4-.js";import{O as u}from"./OutputBlock-DBUi5rzu.js";import{d as p,r as s,p as d,l as a,a as t,k as r,t as f,o as x}from"./index-BoiLWSy3.js";import"./Footer.vue_vue_type_script_setup_true_lang-CUCs2pT8.js";const c="March 31, 2026",B=p({__name:"GreatestofThreeNumbers",setup(b){const n=s(`
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
`),m=s(`
Enter first number: 12
Enter second number: 7
Enter third number: 19
Greatest: 19
`);return(g,e)=>(x(),d(o,{title:"C Programming",link:"/c-common-programs"},{default:a(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Greatest of Three Numbers",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+f(c)),r(i,null,{default:a(()=>[...e[0]||(e[0]=[t("p",null,"In this exercise, we aim to determine the largest of three numbers entered by the user. The program should:",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Prompt the user to input three numbers"),t("li",null,"Compare the first number with the second and third"),t("li",null,"Update the maximum value if a larger number is found"),t("li",null,"Display the greatest number as the result")],-1)])]),_:1}),e[2]||(e[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Solution",-1)),r(l,{code:n.value,language:"c"},null,8,["code"]),e[3]||(e[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),r(u,{output:m.value},null,8,["output"])]),_:1}))}});export{B as default};
