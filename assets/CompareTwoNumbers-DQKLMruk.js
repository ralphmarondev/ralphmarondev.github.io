import{_ as n}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-wnLsKI1e.js";import{C as i}from"./CodeBlock-D8cbajus.js";import{_ as u}from"./TaskCard.vue_vue_type_script_setup_true_lang-BME11E4-.js";import{O as m}from"./OutputBlock-DBUi5rzu.js";import{d as p,r as l,p as d,l as s,a as t,k as a,t as f,o as c}from"./index-BoiLWSy3.js";import"./Footer.vue_vue_type_script_setup_true_lang-CUCs2pT8.js";const x="March 31, 2026",q=p({__name:"CompareTwoNumbers",setup(y){const o=l(`
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
`),r=l(`
Enter x: 10
Enter y: 10
Equal
`);return(g,e)=>(c(),d(n,{title:"C Programming",link:"/c-common-programs"},{default:s(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Compare Two Numbers",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+f(x)),a(u,null,{default:s(()=>[...e[0]||(e[0]=[t("p",null," Two values can be checked to determine if they are the same. A condition is used to decide which result to display. ",-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Process:",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Read two integer values"),t("li",null,"Evaluate if both values are equal"),t("li",null,'If true, display "Equal"'),t("li",null,'Otherwise, display "Not equal"')],-1)])]),_:1}),e[2]||(e[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Example Solution",-1)),a(i,{code:o.value,language:"c"},null,8,["code"]),e[3]||(e[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),a(m,{output:r.value},null,8,["output"])]),_:1}))}});export{q as default};
