import{_ as n}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-wnLsKI1e.js";import{C as r}from"./CodeBlock-D8cbajus.js";import{_ as m}from"./TaskCard.vue_vue_type_script_setup_true_lang-BME11E4-.js";import{O as p}from"./OutputBlock-DBUi5rzu.js";import{d as u,r as o,p as d,l as s,a as t,k as a,t as f,o as c}from"./index-BoiLWSy3.js";import"./Footer.vue_vue_type_script_setup_true_lang-CUCs2pT8.js";const g="March 31, 2026",O=u({__name:"ComputeAOverB",setup(v){const l=o(`
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
`),i=o(`
Enter a: 10
Enter b: 2
Result: 5
`);return(x,e)=>(c(),d(n,{title:"C Programming",link:"/c-common-programs"},{default:s(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Compute A / B",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+f(g)),a(m,null,{default:s(()=>[...e[0]||(e[0]=[t("p",null," A division operation requires a valid divisor. Before performing the operation, the second value must be checked to avoid an invalid computation. ",-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Process:",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Read two integer values"),t("li",null,"Check if the second value is not equal to 0"),t("li",null,"If valid, perform the division"),t("li",null,"Otherwise, display an error message")],-1)])]),_:1}),e[2]||(e[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Example Solution",-1)),a(r,{code:l.value,language:"c"},null,8,["code"]),e[3]||(e[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),a(p,{output:i.value},null,8,["output"])]),_:1}))}});export{O as default};
