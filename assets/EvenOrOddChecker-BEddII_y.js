import{_ as d}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{C as m}from"./CodeBlock-Dq1Y_ZOo.js";import{_ as u}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{O as p}from"./OutputBlock-3JjA_7_X.js";import{u as f}from"./cSolvedProblems-CjgUliVp.js";import{d as c,r as s,p as g,l as r,m as x,o as b,a as t,t as v,k as o,b as n}from"./index-DzB2MRah.js";const O="March 31, 2026",S=c({__name:"EvenOrOddChecker",setup(h){const a=f(),i=s(`
#include <stdio.h>

int main()
{
	int n;

	printf("Enter number: ");
	scanf("%d", &n);

	if(n % 2 == 0)
		printf("Even");
	else
		printf("Odd");

	return 0;
}
`),l=s(`
Enter number: 7
Odd
`);return(y,e)=>(b(),g(d,{title:"C Programming",navigation:x(a).sections},{default:r(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Odd or Even Checker",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+v(O)),o(u,null,{default:r(()=>[...e[0]||(e[0]=[t("p",null,[n(" This program checks whether a given integer is "),t("strong",null,"odd"),n(" or "),t("strong",null,"even"),n(". It uses the modulo operator "),t("code",null,"%"),n(" to find the remainder when dividing by 2. ")],-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Logic:",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Read an integer from the user"),t("li",null,"If the remainder of division by 2 is 0 (number is even)"),t("li",null,"Otherwise (number is odd)")],-1)])]),_:1}),e[2]||(e[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Solution",-1)),o(m,{code:i.value,language:"c"},null,8,["code"]),e[3]||(e[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),o(p,{output:l.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{S as default};
