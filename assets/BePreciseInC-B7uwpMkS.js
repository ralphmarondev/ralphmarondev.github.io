import{_ as n}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-wnLsKI1e.js";import{C as r}from"./CodeBlock-D8cbajus.js";import{_ as u}from"./TaskCard.vue_vue_type_script_setup_true_lang-BME11E4-.js";import{O as m}from"./OutputBlock-DBUi5rzu.js";import{d as p,r as l,p as d,l as s,a as t,k as a,t as c,o as f}from"./index-BoiLWSy3.js";import"./Footer.vue_vue_type_script_setup_true_lang-CUCs2pT8.js";const g="March 31, 2026",w=p({__name:"BePreciseInC",setup(x){const i=l(`
#include <stdio.h>

int main()
{
	float value;

	printf("Enter a decimal number: ");
	scanf("%f", &value);

	printf("Default output: %f\\n", value);
	printf("2 decimal places: %.2f\\n", value);
	printf("4 decimal places: %.4f\\n", value);

	return 0;
}
`),o=l(`
Enter a decimal number: 3.14159
Default output: 3.141590
2 decimal places: 3.14
4 decimal places: 3.1416
`);return(y,e)=>(f(),d(n,{title:"C Programming",link:"/c-common-programs"},{default:s(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Be Precise in C",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+c(g)),a(u,null,{default:s(()=>[...e[0]||(e[0]=[t("p",null," A value can appear differently depending on how it is formatted during output. The same number may show more or fewer decimal places. ",-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Process:",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Read a floating-point value"),t("li",null,"Display it using the default format"),t("li",null,"Display it with 2 decimal places"),t("li",null,"Display it with 4 decimal places"),t("li",null,"Compare the outputs")],-1)])]),_:1}),e[2]||(e[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Example Solution",-1)),a(r,{code:i.value,language:"c"},null,8,["code"]),e[3]||(e[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),a(m,{output:o.value},null,8,["output"])]),_:1}))}});export{w as default};
