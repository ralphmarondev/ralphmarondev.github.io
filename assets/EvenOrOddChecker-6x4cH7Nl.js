import{_ as i}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-H05dFO26.js";import{C as d}from"./CodeBlock-v8De0bNZ.js";import{_ as m}from"./TaskCard.vue_vue_type_script_setup_true_lang-ArSqQYBk.js";import{O as u}from"./OutputBlock-BXue0EeJ.js";import{d as p,r as o,p as f,l as s,a as t,k as r,t as c,e as n,o as g}from"./index-wsbNYnid.js";import"./Footer.vue_vue_type_script_setup_true_lang-DH4TUafw.js";const x="March 31, 2026",B=p({__name:"EvenOrOddChecker",setup(b){const l=o(`
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
`),a=o(`
Enter number: 7
Odd
`);return(v,e)=>(g(),f(i,{title:"C Programming",link:"/c-common-programs"},{default:s(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Odd or Even Checker",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+c(x)),r(m,null,{default:s(()=>[...e[0]||(e[0]=[t("p",null,[n(" This program checks whether a given integer is "),t("strong",null,"odd"),n(" or "),t("strong",null,"even"),n(". It uses the modulo operator "),t("code",null,"%"),n(" to find the remainder when dividing by 2. ")],-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Logic:",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Read an integer from the user"),t("li",null,"If the remainder of division by 2 is 0 (number is even)"),t("li",null,"Otherwise (number is odd)")],-1)])]),_:1}),e[2]||(e[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Solution",-1)),r(d,{code:l.value,language:"c"},null,8,["code"]),e[3]||(e[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),r(u,{output:a.value},null,8,["output"])]),_:1}))}});export{B as default};
