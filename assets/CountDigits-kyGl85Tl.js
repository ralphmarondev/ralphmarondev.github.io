import{_ as a}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-wnLsKI1e.js";import{C as r}from"./CodeBlock-D8cbajus.js";import{_ as u}from"./TaskCard.vue_vue_type_script_setup_true_lang-BME11E4-.js";import{O as m}from"./OutputBlock-DBUi5rzu.js";import{d as p,r as s,p as d,l,a as t,k as n,t as c,o as g}from"./index-BoiLWSy3.js";import"./Footer.vue_vue_type_script_setup_true_lang-CUCs2pT8.js";const f="March 31, 2026",B=p({__name:"CountDigits",setup(b){const o=s(`
#include <stdio.h>

int main()
{
	int n, count = 0;

	printf("Enter n: ");
	scanf("%d", &n);

	while (n != 0)
	{
		n /= 10;
		count++;
	}

	printf("Number of digits: %d\\n", count);
	return 0;
}
`),i=s(`
Enter n: 12345
Number of digits: 5
`);return(x,e)=>(g(),d(a,{title:"C Programming",link:"/c-common-programs"},{default:l(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Count Digits",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+c(f)),n(u,null,{default:l(()=>[...e[0]||(e[0]=[t("p",null," A number can be reduced step by step by removing its last digit. Each step represents one digit until the number becomes zero. ",-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Process:",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Read an integer value"),t("li",null,"Repeat while the number is not equal to 0"),t("li",null,"Remove the last digit using division by 10"),t("li",null,"Increase the digit counter each step"),t("li",null,"Display the total count")],-1)])]),_:1}),e[2]||(e[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Example Solution",-1)),n(r,{code:o.value,language:"c"},null,8,["code"]),e[3]||(e[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),n(m,{output:i.value},null,8,["output"])]),_:1}))}});export{B as default};
