import{_ as n}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{C as r}from"./CodeBlock-Dq1Y_ZOo.js";import{_ as i}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{u as m}from"./cSolvedProblems-CjgUliVp.js";import{d as p,r as u,p as d,l as a,m as c,o as f,a as t,t as x,k as s}from"./index-DzB2MRah.js";const y="March 31, 2026",S=p({__name:"SwapTwoNumbers",setup(g){const o=m(),l=u(`
#include <stdio.h>

int main()
{
	int x, y;

	printf("Enter x: ");
	scanf("%d", &x);

	printf("Enter y: ");
	scanf("%d", &y);

	int temp = y;
	y = x;
	x = temp;

	printf("x: %d\\n", x);
	printf("y: %d\\n", y);
	return 0;
}
`);return(v,e)=>(f(),d(n,{title:"C Programming",navigation:c(o).sections},{default:a(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Swap Two Numbers",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+x(y)),s(i,null,{default:a(()=>[...e[0]||(e[0]=[t("p",null," Two values need to exchange places. To do this safely, we temporarily store one value so it won’t be lost during the swap. ",-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Process:",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Read two integer values"),t("li",null,"Store the second value in a temporary variable"),t("li",null,"Assign the first value to the second variable"),t("li",null,"Assign the temporary value to the first variable"),t("li",null,"Display the updated values")],-1)])]),_:1}),s(r,{code:l.value,language:"c"},null,8,["code"])]),_:1},8,["navigation"]))}});export{S as default};
