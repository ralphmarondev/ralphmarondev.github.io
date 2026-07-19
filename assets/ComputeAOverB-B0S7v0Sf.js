import{_ as r}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{C as u}from"./CodeBlock-Dq1Y_ZOo.js";import{_ as m}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{O as p}from"./OutputBlock-3JjA_7_X.js";import{u as d}from"./cSolvedProblems-CjgUliVp.js";import{d as f,r as o,p as c,l as s,m as g,o as v,a as t,t as b,k as a}from"./index-DzB2MRah.js";const x="March 31, 2026",S=f({__name:"ComputeAOverB",setup(y){const i=d(),n=o(`
#include <stdio.h>

int main()
{
	int a, b;

	printf("Enter a: ");
	scanf("%d", &a);

	printf("Enter b: ");
	scanf("%d", &b);

	if (b != 0)
		printf("Result: %d\\n", a / b);
	else
		printf("Invalid, division by 0\\n");
	return 0;
}
`),l=o(`
Enter a: 10
Enter b: 2
Result: 5
`);return(C,e)=>(v(),c(r,{title:"C Programming",navigation:g(i).sections},{default:s(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Compute A / B",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+b(x)),a(m,null,{default:s(()=>[...e[0]||(e[0]=[t("p",null," A division operation requires a valid divisor. Before performing the operation, the second value must be checked to avoid an invalid computation. ",-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Process:",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Read two integer values"),t("li",null,"Check if the second value is not equal to 0"),t("li",null,"If valid, perform the division"),t("li",null,"Otherwise, display an error message")],-1)])]),_:1}),e[2]||(e[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Example Solution",-1)),a(u,{code:n.value,language:"c"},null,8,["code"]),e[3]||(e[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),a(p,{output:l.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{S as default};
