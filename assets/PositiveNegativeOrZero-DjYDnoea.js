import{_ as r}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{C as u}from"./CodeBlock-Dq1Y_ZOo.js";import{_ as m}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{O as p}from"./OutputBlock-3JjA_7_X.js";import{u as f}from"./cSolvedProblems-CjgUliVp.js";import{d,r as n,p as c,l as s,m as g,o as v,a as t,t as x,k as i}from"./index-DzB2MRah.js";const b="March 31, 2026",O=d({__name:"PositiveNegativeOrZero",setup(y){const a=f(),l=n(`
#include <stdio.h>

int main()
{
	int n;

	printf("Enter number: ");
	scanf("%d", &n);

	if (n > 0)
		printf("Positive");
	else if (n < 0)
		printf("Negative");
	else
		printf("Zero");
	return 0;
}
`),o=n(`
Enter number: -5
Negative
`);return(C,e)=>(v(),c(r,{title:"C Programming",navigation:g(a).sections},{default:s(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Positive, Negative, or Zero",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+x(b)),i(m,null,{default:s(()=>[...e[0]||(e[0]=[t("p",null," A number can fall into different categories depending on its value. Conditions are evaluated in sequence to determine the correct result. ",-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Process:",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Read an integer value"),t("li",null,"Check if the number is greater than 0"),t("li",null,"If not, check if it is less than 0"),t("li",null,"If neither condition is true, it is equal to 0"),t("li",null,"Display the result")],-1)])]),_:1}),e[2]||(e[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Example Solution",-1)),i(u,{code:l.value,language:"c"},null,8,["code"]),e[3]||(e[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),i(p,{output:o.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{O as default};
