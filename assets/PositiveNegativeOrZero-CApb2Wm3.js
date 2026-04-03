import{_ as o}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-H05dFO26.js";import{C as r}from"./CodeBlock-v8De0bNZ.js";import{_ as u}from"./TaskCard.vue_vue_type_script_setup_true_lang-ArSqQYBk.js";import{O as m}from"./OutputBlock-BXue0EeJ.js";import{d as p,r as n,p as d,l,a as t,k as i,t as f,o as c}from"./index-wsbNYnid.js";import"./Footer.vue_vue_type_script_setup_true_lang-DH4TUafw.js";const g="March 31, 2026",h=p({__name:"PositiveNegativeOrZero",setup(x){const s=n(`
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
`),a=n(`
Enter number: -5
Negative
`);return(v,e)=>(c(),d(o,{title:"C Programming",link:"/c-common-programs"},{default:l(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Positive, Negative, or Zero",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+f(g)),i(u,null,{default:l(()=>[...e[0]||(e[0]=[t("p",null," A number can fall into different categories depending on its value. Conditions are evaluated in sequence to determine the correct result. ",-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Process:",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Read an integer value"),t("li",null,"Check if the number is greater than 0"),t("li",null,"If not, check if it is less than 0"),t("li",null,"If neither condition is true, it is equal to 0"),t("li",null,"Display the result")],-1)])]),_:1}),e[2]||(e[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Example Solution",-1)),i(r,{code:s.value,language:"c"},null,8,["code"]),e[3]||(e[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),i(m,{output:a.value},null,8,["output"])]),_:1}))}});export{h as default};
