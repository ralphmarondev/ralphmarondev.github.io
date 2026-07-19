import{_ as u}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{C as m}from"./CodeBlock-Dq1Y_ZOo.js";import{_ as d}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{O as p}from"./OutputBlock-3JjA_7_X.js";import{u as f}from"./cSolvedProblems-CjgUliVp.js";import{d as g,r as s,p as c,l as n,m as b,o as x,a as t,t as v,k as e,b as r}from"./index-DzB2MRah.js";const y="March 31, 2026",S=g({__name:"FirstDigitOfANumber",setup(h){const a=f(),l=s(`
#include <stdio.h>

int main()
{
    int n, firstDigit;

    printf("Enter number: ");
    scanf("%d", &n);

    // Make sure n is positive
    if (n < 0)
        n = -n;

    while (n >= 10)
        n /= 10;

    firstDigit = n;
    printf("The first digit is %d\\n", firstDigit);

    return 0;
}
`),o=s(`
Enter number: 98765
The first digit is 9
`);return(_,i)=>(x(),c(u,{title:"C Programming",navigation:b(a).sections},{default:n(()=>[i[1]||(i[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"First Digit of a Number",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+v(y)),e(d,null,{default:n(()=>[...i[0]||(i[0]=[t("p",null,[r(" This program finds the "),t("strong",null,"first digit"),r(" of a given integer. It repeatedly divides the number by 10 until only the first digit remains. ")],-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Steps:",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Read an integer from the user"),t("li",null,"Convert negative numbers to positive (if needed)"),t("li",null,"Divide the number by 10 in a loop until it is less than 10"),t("li",null,"Print the resulting number as the first digit")],-1)])]),_:1}),i[2]||(i[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Solution",-1)),e(m,{code:l.value,language:"c"},null,8,["code"]),i[3]||(i[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),e(p,{output:o.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{S as default};
