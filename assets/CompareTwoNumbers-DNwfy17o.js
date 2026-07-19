import{_ as i}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{C as u}from"./CodeBlock-Dq1Y_ZOo.js";import{_ as m}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{O as p}from"./OutputBlock-3JjA_7_X.js";import{u as d}from"./cSolvedProblems-CjgUliVp.js";import{d as f,r as s,p as c,l,m as x,o as g,a as t,t as y,k as a}from"./index-DzB2MRah.js";const b="March 31, 2026",B=f({__name:"CompareTwoNumbers",setup(v){const o=d(),r=s(`
#include <stdio.h>

int main()
{
	int x, y;

	printf("Enter x: ");
	scanf("%d", &x);

	printf("Enter y: ");
	scanf("%d", &y);

	if(x == y)
		printf("Equal");
	else
		printf("Not equal");
	return 0;
}
`),n=s(`
Enter x: 10
Enter y: 10
Equal
`);return(E,e)=>(g(),c(i,{title:"C Programming",navigation:x(o).sections},{default:l(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Compare Two Numbers",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+y(b)),a(m,null,{default:l(()=>[...e[0]||(e[0]=[t("p",null," Two values can be checked to determine if they are the same. A condition is used to decide which result to display. ",-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Process:",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Read two integer values"),t("li",null,"Evaluate if both values are equal"),t("li",null,'If true, display "Equal"'),t("li",null,'Otherwise, display "Not equal"')],-1)])]),_:1}),e[2]||(e[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Example Solution",-1)),a(u,{code:r.value,language:"c"},null,8,["code"]),e[3]||(e[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),a(p,{output:n.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{B as default};
