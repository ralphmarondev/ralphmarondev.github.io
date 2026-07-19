import{_ as r}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{u}from"./cSolvedProblems-CjgUliVp.js";import{C as m}from"./CodeBlock-Dq1Y_ZOo.js";import{_ as p}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{O as d}from"./OutputBlock-3JjA_7_X.js";import{d as f,r as l,p as c,l as s,m as g,o as x,a as t,t as v,k as a}from"./index-DzB2MRah.js";const y="March 31, 2026",h=f({__name:"BePreciseInC",setup(b){const i=u(),o=l(`
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
`),n=l(`
Enter a decimal number: 3.14159
Default output: 3.141590
2 decimal places: 3.14
4 decimal places: 3.1416
`);return(C,e)=>(x(),c(r,{title:"C Programming",navigation:g(i).sections},{default:s(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Be Precise in C",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+v(y)),a(p,null,{default:s(()=>[...e[0]||(e[0]=[t("p",null," A value can appear differently depending on how it is formatted during output. The same number may show more or fewer decimal places. ",-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Process:",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Read a floating-point value"),t("li",null,"Display it using the default format"),t("li",null,"Display it with 2 decimal places"),t("li",null,"Display it with 4 decimal places"),t("li",null,"Compare the outputs")],-1)])]),_:1}),e[2]||(e[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Example Solution",-1)),a(m,{code:o.value,language:"c"},null,8,["code"]),e[3]||(e[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),a(d,{output:n.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{h as default};
