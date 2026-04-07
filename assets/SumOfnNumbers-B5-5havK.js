import{_ as r}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-wnLsKI1e.js";import{C as u}from"./CodeBlock-D8cbajus.js";import{_ as m}from"./TaskCard.vue_vue_type_script_setup_true_lang-BME11E4-.js";import{O as i}from"./OutputBlock-DBUi5rzu.js";import{d as p,r as a,p as d,l,a as t,k as n,t as f,o as c}from"./index-BoiLWSy3.js";import"./Footer.vue_vue_type_script_setup_true_lang-CUCs2pT8.js";const g="March 31, 2026",h=p({__name:"SumOfnNumbers",setup(b){const s=a(`
#include <stdio.h>

int main()
{
	int n, temp, sum = 0;

	printf("Enter n: ");
	scanf("%d", &n);

	for (int i = 0; i < n; i++)
	{
		printf("Enter number %d: ", i + 1);
		scanf("%d", &temp);
		sum += temp;
	}
	printf("Sum of %d number: %d\\n", n, sum);
	return 0;
}
`),o=a(`
Enter n: 3
Enter number 1: 5
Enter number 2: 10
Enter number 3: 2
Sum of 3 number: 17
`);return(x,e)=>(c(),d(r,{title:"C Programming",link:"/c-common-programs"},{default:l(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Sum of N Numbers",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+f(g)),n(m,null,{default:l(()=>[...e[0]||(e[0]=[t("p",null," Multiple values can be processed one at a time using repetition. Each value is added to a running total until all inputs are handled. ",-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Process:",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Read the total count of numbers"),t("li",null,"Repeat input for each value using a loop"),t("li",null,"Add each value to the running sum"),t("li",null,"After the loop, display the total sum")],-1)])]),_:1}),e[2]||(e[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Example Solution",-1)),n(u,{code:s.value,language:"c"},null,8,["code"]),e[3]||(e[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),n(i,{output:o.value},null,8,["output"])]),_:1}))}});export{h as default};
